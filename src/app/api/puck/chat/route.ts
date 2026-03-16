import { anthropic } from "@ai-sdk/anthropic";
import { convertToModelMessages, streamText, tool, stepCountIs } from "ai";
import { z } from "zod";
import type { NextRequest } from "next/server";

export const maxDuration = 60;

/* ------------------------------------------------------------------ */
/*  Available Puck components and their key props                      */
/* ------------------------------------------------------------------ */

const AVAILABLE_COMPONENTS = [
  "Section", "Container", "Grid", "Flex", "Row", "Columns",
  "Heading", "Text", "Button", "Image", "Spacer", "VideoEmbed",
  "Box", "Icon", "Divider",
  "Header", "Footer",
  "Card", "DataTable",
  "NavLink", "NavMenu", "NavMenuItem",
  "FooterColumn", "FooterLink", "SocialLink",
] as const;

const ComponentTypeEnum = z.enum(AVAILABLE_COMPONENTS);

/* ------------------------------------------------------------------ */
/*  Component schema for setPageContent                                */
/* ------------------------------------------------------------------ */

const ComponentSchema: z.ZodType<{
  type: string;
  props: Record<string, unknown>;
  children?: Array<{ type: string; props: Record<string, unknown>; children?: unknown[] }>;
}> = z.object({
  type: z.string().describe("Component type (e.g. 'Section', 'Heading', 'Button')"),
  props: z.record(z.string(), z.any()).describe("Component props including a unique 'id' string"),
  children: z.lazy(() => z.array(ComponentSchema)).optional().describe("Nested child components for containers"),
});

/* ------------------------------------------------------------------ */
/*  Tools                                                              */
/* ------------------------------------------------------------------ */

const tools = {
  setPageContent: tool({
    description:
      "Replace the ENTIRE page content with a new component tree. Use when building a full page from scratch or doing a major restructure. " +
      "Each component MUST have a unique 'id' in its props. " +
      "Container components (Section, Container, Grid, Flex, Row, Columns, Box, Header, Footer) use 'children' for nested components. " +
      "Use Puck's zone system: children go into zone slots like 'content', 'column0', 'column1', etc.",
    inputSchema: z.object({
      content: z.array(ComponentSchema).describe("Complete array of root-level components for the page"),
      zones: z.record(z.string(), z.array(ComponentSchema)).optional().describe(
        "Zone content map. Keys are 'parentId:zoneName' (e.g. 'abc123:content', 'def456:column0'). " +
        "Values are arrays of components inside that zone."
      ),
    }),
    execute: async ({ content, zones }) => ({
      action: "setPageContent" as const,
      content,
      zones,
    }),
  }),

  addComponent: tool({
    description:
      "Add a SINGLE component to the page. Specify zone to place it inside a parent container's slot. " +
      "For root-level placement, use zone 'content' (the default root zone). " +
      "For placing inside a Section/Container/Grid/Columns child zone, use 'parentId:zoneName' format. " +
      "Common zones: 'content' (default), 'column0'/'column1'/'column2' (for Grid/Columns), " +
      "'leftContent'/'centerContent'/'rightContent' (for Header), 'column1'/'column2'/'column3'/'column4' (for Footer).",
    inputSchema: z.object({
      componentType: ComponentTypeEnum.describe("The Puck component type to add"),
      props: z.record(z.string(), z.any()).optional().describe("Props for the new component (id will be auto-generated if not provided)"),
      zone: z.string().default("content").describe("Zone to place in. 'content' for root, or 'parentId:zoneName' for nested placement"),
      index: z.number().optional().describe("Position index in the zone. Omit to append at end"),
    }),
    execute: async ({ componentType, props, zone, index }) => ({
      action: "addComponent" as const,
      componentType,
      props: props || {},
      zone,
      index,
    }),
  }),

  updateComponent: tool({
    description:
      "Update an existing component's props. The componentId MUST match an actual component ID from the current page state. " +
      "Only include props you want to change - they will be merged with existing props.",
    inputSchema: z.object({
      componentId: z.string().describe("The exact component ID from the current page state"),
      props: z.record(z.string(), z.any()).describe("Props to update (merged with existing)"),
    }),
    execute: async ({ componentId, props }) => ({
      action: "updateComponent" as const,
      componentId,
      props,
    }),
  }),

  removeComponent: tool({
    description: "Remove a component by its ID. If it's a container, all children in its zones are removed too.",
    inputSchema: z.object({
      componentId: z.string().describe("Component ID from current page state"),
    }),
    execute: async ({ componentId }) => ({
      action: "removeComponent" as const,
      componentId,
    }),
  }),

  moveComponent: tool({
    description: "Move a component to a different position or zone.",
    inputSchema: z.object({
      componentId: z.string().describe("Component ID to move"),
      sourceZone: z.string().describe("Current zone of the component (e.g. 'content' or 'parentId:zoneName')"),
      sourceIndex: z.number().describe("Current index in the source zone"),
      destinationZone: z.string().describe("Target zone to move to"),
      destinationIndex: z.number().describe("Target index in the destination zone"),
    }),
    execute: async ({ componentId, sourceZone, sourceIndex, destinationZone, destinationIndex }) => ({
      action: "moveComponent" as const,
      componentId,
      sourceZone,
      sourceIndex,
      destinationZone,
      destinationIndex,
    }),
  }),

  highlightElement: tool({
    description:
      "Highlight a UI element in the editor to teach or guide the user. " +
      "Uses data-tour attributes to locate elements. " +
      "Common targets: 'component-list' (left sidebar components), 'fields-panel' (right property panel), " +
      "'canvas' (the main editing area), 'header' (top bar).",
    inputSchema: z.object({
      selector: z.string().describe("data-tour attribute value or CSS selector to highlight"),
      tooltip: z.string().describe("Helpful tooltip text to show near the highlighted element"),
      duration: z.number().optional().default(5000).describe("How long to show the highlight in ms"),
    }),
    execute: async ({ selector, tooltip, duration }) => ({
      action: "highlightElement" as const,
      selector,
      tooltip,
      duration,
    }),
  }),
};

/* ------------------------------------------------------------------ */
/*  Build system prompt                                                */
/* ------------------------------------------------------------------ */

function buildSystemPrompt(pageData: unknown, editorContext?: Record<string, unknown>): string {
  const hasContent = pageData &&
    typeof pageData === "object" &&
    "content" in pageData &&
    Array.isArray((pageData as { content: unknown[] }).content) &&
    (pageData as { content: unknown[] }).content.length > 0;

  const stateBlock = hasContent
    ? `\n\nCURRENT PAGE STATE:\n\`\`\`json\n${JSON.stringify(pageData, null, 2)}\n\`\`\`\nThe component IDs above are REAL. Use them exactly when calling updateComponent / removeComponent / moveComponent.`
    : "\n\nThe canvas is EMPTY. Use setPageContent to build a full page, or addComponent to add components one at a time.";

  let contextBlock = "";
  if (editorContext) {
    if (editorContext.helpMode) {
      contextBlock += "\n\n**HELP MODE ACTIVE**: The user wants guidance on using the editor. Use highlightElement to point out UI elements. Focus on explaining rather than making changes.";
    }
    if (editorContext.selectedComponent) {
      const sel = editorContext.selectedComponent as { id: string; type: string; props: Record<string, unknown> };
      contextBlock += `\n\n**Currently Selected**: ${sel.type} (ID: ${sel.id})\nProps: ${JSON.stringify(sel.props, null, 2)}`;
    }
  }

  return `You are an AI assistant embedded in the Puck visual page editor. You build and edit web pages by calling tools that manipulate components on the canvas.

## Available Components

**Layout (root-level containers):**
- Section - Full-width page section with background options. Has 'content' zone for children. Props: backgroundColor, backgroundImage, overlayColor, overlayOpacity, paddingTop, paddingBottom, slotDirection, slotGap, slotAlign
- Container - Centers content with max-width. Has 'content' zone. Props: maxWidth, padding, slotDirection, slotGap, slotAlign
- Grid - Equal-width column grid. Has column zones: column0, column1, column2, etc. Props: columns (1-6), gap
- Flex - Flexible layout. Has 'content' zone. Props: direction, justifyContent, alignItems, gap, wrap
- Row - Simple horizontal row. Has 'content' zone. Props: gap, align
- Columns - Custom width splits. Has column zones: column0, column1, etc. Props: layout ("1-1", "1-2", "2-1", "1-1-1"), gap, reverse

**Content (place inside containers):**
- Heading - Titles with rich text. Props: text, level (h1-h6), align, color, fontSize
- Text - Paragraphs with rich text. Props: text, align, color, fontSize, fontWeight, lineHeight
- Button - CTA buttons. Props: label, href, variant (primary/secondary/outline), size (sm/md/lg), backgroundColor, textColor, borderRadius
- Image - Responsive images. Props: src, alt, aspectRatio, objectFit, borderRadius
- Spacer - Vertical whitespace. Props: height
- VideoEmbed - YouTube/Vimeo. Props: url, aspectRatio, maxWidth

**Primitives:**
- Box - Flexible container with 'content' zone. Props: padding, backgroundColor, borderRadius, slotDirection, slotGap, slotAlign
- Icon - Vector icons. Props: icon, size, color
- Divider - Horizontal separator. Props: orientation, thickness, color, style

**Navigation:**
- Header - Site header with 3 column zones: leftContent, centerContent, rightContent. Props: logoText, logoImageSrc, sticky, shadow, background, layout
- Footer - Site footer with column zones: column1-column4, bottomContent. Props: columnsCount, columnsLayout, backgroundColor, showCopyright
- NavMenu - Navigation container with 'items' zone. Props: direction, alignment, gap
- NavMenuItem - Menu item with dropdown 'children' zone. Props: label, href, hasDropdown
- NavLink - Navigation link with optional 'submenu' zone. Props: label, href, hasSubmenu
- FooterColumn - Footer section with 'links' zone. Props: title
- FooterLink - Footer link. Props: label, href
- SocialLink - Social icon link. Props: platform, href, iconColor

**Pre-built:**
- Card - Customizable card container with slot zones (slot0-slot3). Props: layoutMode (single/columns/grid), columnLayout, backgroundColor, shadow, padding, borderRadius
- DataTable - Data table. Props: columns, rows

## Puck Zone System

Puck uses a zone-based system for nesting components:
- Root zone is called "content" - components at the top level go here
- Container components have named zones for their children
- Zone keys in the data are formatted as "parentId:zoneName"
- Example: A Section with id "hero" has its children in zone "hero:content"
- A Grid with id "grid1" and 3 columns has zones: "grid1:column0", "grid1:column1", "grid1:column2"

## Structure Pattern

\`\`\`
Section (root, full-width background)
  zone "sectionId:content" ->
    Container (max-width constraint)
      zone "containerId:content" ->
        Grid (3-column layout)
          zone "gridId:column0" -> Heading, Text
          zone "gridId:column1" -> Heading, Text
          zone "gridId:column2" -> Heading, Text
\`\`\`

## Data Structure

The page data has this shape:
\`\`\`json
{
  "root": { "props": { "title": "Page Title" } },
  "content": [
    { "type": "Section", "props": { "id": "hero-section", ... } },
    { "type": "Section", "props": { "id": "features-section", ... } }
  ],
  "zones": {
    "hero-section:content": [
      { "type": "Container", "props": { "id": "hero-container", ... } }
    ],
    "hero-container:content": [
      { "type": "Heading", "props": { "id": "hero-title", "text": "Welcome", "level": "h1" } },
      { "type": "Text", "props": { "id": "hero-desc", "text": "Description here" } }
    ]
  }
}
\`\`\`

## Rules

1. When the canvas is empty and the user wants a page, use setPageContent with the full component tree including zones.
2. When editing existing content, use updateComponent with the EXACT component ID from the page state.
3. For adding single components to existing pages, use addComponent with the correct zone.
4. ALWAYS give components human-readable IDs like "hero-section", "cta-button", "feature-card-1".
5. NEVER guess component IDs - only use IDs from the current page state.
6. After calling tools, write a SHORT sentence explaining what you did.
7. For layouts with nested components, you MUST populate the zones object in setPageContent.
8. When building a full page from scratch, use setPageContent with all components and zones at once.

## Design Tips

- Use Section for each major page area (hero, features, about, CTA, footer)
- Always put Container inside Section for proper content width
- Use Grid for equal-column layouts, Columns for asymmetric splits
- Keep headings concise, use Text for longer descriptions
- Use Button with action-oriented labels ("Get Started", "Learn More")
- Set proper heading levels: h1 once per page, h2 for sections, h3 for subsections
${contextBlock}${stateBlock}`;
}

/* ------------------------------------------------------------------ */
/*  Route handler                                                      */
/* ------------------------------------------------------------------ */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, pageData, editorContext } = body;

    const systemMessage = buildSystemPrompt(pageData, editorContext);

    const result = streamText({
      model: anthropic("claude-sonnet-4-20250514"),
      system: systemMessage,
      messages: await convertToModelMessages(messages),
      tools,
      stopWhen: stepCountIs(8),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Puck AI chat error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process AI request",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  return new Response("Puck AI chat endpoint is ready", { status: 200 });
}
