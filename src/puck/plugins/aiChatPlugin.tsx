"use client";

import { useRef, useEffect, useMemo, useCallback, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, isToolUIPart } from "ai";
import type { UIMessage, ToolUIPart } from "ai";
import { usePuck } from "@puckeditor/core";
import type { Data, ComponentData } from "@puckeditor/core";
import type { PuckEditorContext, SelectedComponent } from "@/lib/puck/ai/types";
import { useHelpModeOptional } from "@/lib/puck/help-mode-context";

// Icons
const SparklesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const HelpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const LoaderIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ai-chat-spinner">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Tool action icons and labels                                       */
/* ------------------------------------------------------------------ */

const TOOL_NAMES = [
  "setPageContent", "addComponent", "updateComponent",
  "removeComponent", "moveComponent", "highlightElement",
] as const;
type ToolName = (typeof TOOL_NAMES)[number];

const TOOL_LABELS: Record<string, string> = {
  setPageContent: "Built page content",
  addComponent: "Added component",
  updateComponent: "Updated component",
  removeComponent: "Removed component",
  moveComponent: "Moved component",
  highlightElement: "Highlighted element",
};

const TOOL_ICONS: Record<string, string> = {
  setPageContent: "\u229E",  // squared plus
  addComponent: "+",
  updateComponent: "\u270E",   // pencil
  removeComponent: "\u2212",   // minus
  moveComponent: "\u2195",   // up-down arrow
  highlightElement: "\u2606", // star outline
};

/* ------------------------------------------------------------------ */
/*  Tool call badge                                                    */
/* ------------------------------------------------------------------ */

function ToolCallBubble({ toolName, state }: { toolName: string; state: string }) {
  const label = TOOL_LABELS[toolName] || toolName;
  const icon = TOOL_ICONS[toolName] || "\u2699";
  const done = state === "output-available";
  const errored = state === "output-error";

  return (
    <div className={`ai-chat-tool ${errored ? "errored" : ""}`}>
      {done || errored ? (
        <span className="ai-chat-tool-icon">{icon}</span>
      ) : (
        <LoaderIcon />
      )}
      <span className="ai-chat-tool-name">
        {errored ? `Failed: ${label}` : done ? label : `${label}...`}
      </span>
      {done && <span className="ai-chat-tool-status success">{"\u2713"}</span>}
      {errored && <span className="ai-chat-tool-status error">{"\u2717"}</span>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick prompts                                                      */
/* ------------------------------------------------------------------ */

const QUICK_PROMPTS = [
  { label: "Build Landing Page", prompt: "Build a complete landing page with a hero section, features grid, and a call-to-action section" },
  { label: "Add Hero", prompt: "Add a hero section with a large heading, description text, and a call-to-action button" },
  { label: "Add Features", prompt: "Add a features grid section with 3 feature cards, each with a heading and description" },
  { label: "What's here?", prompt: "What components are currently on this page? Give me a summary." },
];

const HELP_PROMPTS = [
  {
    label: "How to edit?",
    prompt: "Help me edit the selected component. Explain what each prop does and how I can modify them in the Properties Panel.",
  },
  {
    label: "What is this?",
    prompt: "Explain what the selected component does and what its key properties are.",
  },
  {
    label: "Show examples",
    prompt: "Show me example configurations for the selected component type.",
  },
  {
    label: "Guide me",
    prompt: "Give me a visual tour of the Puck editor. Show me where the component list, canvas, and properties panel are.",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getSelectedComponentInfo(appState: {
  ui?: { itemSelector?: { index: number; zone?: string | null } | null };
  data?: { content?: Array<{ type: string; props: Record<string, unknown> }> };
}): SelectedComponent | undefined {
  if (!appState?.ui?.itemSelector) return undefined;
  if (!appState?.data?.content) return undefined;

  const selector = appState.ui.itemSelector;
  const { index, zone } = selector;
  const content = appState.data.content;

  if (!Array.isArray(content) || index < 0 || index >= content.length) return undefined;

  const component = content[index];
  if (!component) return undefined;

  return {
    id: (component.props?.id as string) || `component-${index}`,
    type: component.type,
    props: component.props || {},
    zone: zone || undefined,
    index,
  };
}

function getPageId(): string {
  if (typeof window === "undefined") return "default";
  const path = window.location.pathname;
  const patterns = [
    /\/editor\/([^/]+)/,
    /\/admin\/pages\/([^/]+)\/puck/,
    /\/admin\/pages\/layout\/([^/]+)/,
    /\/admin\/email-marketing\/([^/]+)\/design/,
    /\/email\/([^/]+)/,
  ];
  for (const pattern of patterns) {
    const match = path.match(pattern);
    if (match) return match[1];
  }
  return "default";
}

function getChatStorageKey(pageId: string): string {
  return `puck-ai-chat-${pageId}`;
}

function getTextFromParts(msg: UIMessage): string {
  if (!msg.parts || !Array.isArray(msg.parts)) return "";
  return msg.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/* ------------------------------------------------------------------ */
/*  Apply tool actions to the Puck editor                              */
/* ------------------------------------------------------------------ */

function findComponentInData(
  data: Data,
  componentId: string
): { zone: string; index: number; component: ComponentData } | null {
  // Check root content
  for (let i = 0; i < data.content.length; i++) {
    if (data.content[i].props?.id === componentId) {
      return { zone: "content", index: i, component: data.content[i] };
    }
  }
  // Check all zones
  if (data.zones) {
    for (const [zoneName, zoneContent] of Object.entries(data.zones)) {
      if (Array.isArray(zoneContent)) {
        for (let i = 0; i < zoneContent.length; i++) {
          if (zoneContent[i].props?.id === componentId) {
            return { zone: zoneName, index: i, component: zoneContent[i] };
          }
        }
      }
    }
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

function AIChatPluginPanel() {
  const { appState, dispatch } = usePuck();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const appliedRef = useRef<Set<string>>(new Set());

  const pageId = useMemo(() => getPageId(), []);
  const chatId = useMemo(() => `puck-ai-chat-${pageId}`, [pageId]);

  const [input, setInput] = useState("");

  const { helpMode, helpTarget } = useHelpModeOptional();

  // Keep a ref to appState so callbacks always have fresh state
  const appStateRef = useRef(appState);
  appStateRef.current = appState;

  const selectedComponent = useMemo(
    () => getSelectedComponentInfo(appState),
    [appState?.ui?.itemSelector, appState?.data?.content]
  );

  const editorContext: PuckEditorContext = useMemo(() => ({
    selectedComponent,
    helpMode,
    helpTarget: helpTarget ? {
      componentId: helpTarget.componentId,
      componentType: helpTarget.componentType,
      action: "explain" as const,
    } : undefined,
    canUndo: (appState as { history?: { hasPast?: boolean } }).history?.hasPast ?? false,
    canRedo: (appState as { history?: { hasFuture?: boolean } }).history?.hasFuture ?? false,
  }), [selectedComponent, helpMode, helpTarget, appState]);

  // Transport sends pageData and editorContext with every message
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/puck/chat",
        prepareSendMessagesRequest: ({ id, messages }) => ({
          body: {
            messages,
            id,
            pageData: appStateRef.current.data,
            editorContext,
          },
        }),
      }),
    [editorContext]
  );

  const {
    messages,
    status,
    sendMessage,
    setMessages,
  } = useChat({
    id: chatId,
    transport,
  });

  /* ---- Apply tool output to the Puck editor ---- */
  const applyToolAction = useCallback(
    (toolName: string, output: Record<string, unknown>) => {
      const data = appStateRef.current.data;

      switch (toolName) {
        case "setPageContent": {
          const rawContent = output.content as Array<{ type: string; props: Record<string, unknown>; children?: unknown[] }>;
          const rawZones = output.zones as Record<string, Array<{ type: string; props: Record<string, unknown> }>> | undefined;

          if (!Array.isArray(rawContent) || rawContent.length === 0) break;

          // Build Puck data from the flat content + zones structure
          const newContent: ComponentData[] = rawContent.map((c) => ({
            type: c.type,
            props: {
              id: generateId(),
              ...c.props,
            },
          }));

          const newZones: Record<string, ComponentData[]> = {};
          if (rawZones) {
            for (const [zoneName, zoneComponents] of Object.entries(rawZones)) {
              newZones[zoneName] = zoneComponents.map((c) => ({
                type: c.type,
                props: {
                  id: generateId(),
                  ...c.props,
                },
              }));
            }
          }

          // Also process children arrays into zones if present
          for (const comp of rawContent) {
            if (Array.isArray(comp.children) && comp.children.length > 0) {
              const parentId = comp.props?.id || (newContent.find(nc => nc.type === comp.type)?.props?.id);
              if (parentId) {
                const zoneKey = `${parentId}:content`;
                if (!newZones[zoneKey]) {
                  newZones[zoneKey] = [];
                }
                for (const child of comp.children as Array<{ type: string; props?: Record<string, unknown>; children?: unknown[] }>) {
                  const childComponent: ComponentData = {
                    type: child.type,
                    props: {
                      id: generateId(),
                      ...(child.props || {}),
                    },
                  };
                  newZones[zoneKey].push(childComponent);

                  // Recursively handle grandchildren
                  if (Array.isArray(child.children) && child.children.length > 0) {
                    const childZoneKey = `${childComponent.props.id}:content`;
                    if (!newZones[childZoneKey]) {
                      newZones[childZoneKey] = [];
                    }
                    for (const grandchild of child.children as Array<{ type: string; props?: Record<string, unknown> }>) {
                      newZones[childZoneKey].push({
                        type: grandchild.type,
                        props: {
                          id: generateId(),
                          ...(grandchild.props || {}),
                        },
                      });
                    }
                  }
                }
              }
            }
          }

          dispatch({
            type: "set",
            state: {
              data: {
                root: data.root || { props: {} },
                content: newContent,
                zones: newZones,
              },
            },
          } as Parameters<typeof dispatch>[0]);
          break;
        }

        case "addComponent": {
          const componentType = output.componentType as string;
          const props = (output.props || {}) as Record<string, unknown>;
          const zone = (output.zone as string) || "content";
          const index = output.index as number | undefined;

          if (!componentType) break;

          // Ensure an ID exists
          if (!props.id) {
            props.id = generateId();
          }

          dispatch({
            type: "insert",
            componentType,
            zone,
            index: index ?? (zone === "content" ? data.content.length : undefined),
            props,
          } as Parameters<typeof dispatch>[0]);
          break;
        }

        case "updateComponent": {
          const componentId = output.componentId as string;
          const newProps = output.props as Record<string, unknown>;
          if (!componentId || !newProps) break;

          const found = findComponentInData(data, componentId);
          if (!found) {
            console.warn(`Component ${componentId} not found for update`);
            break;
          }

          // Use replace to update the component with merged props
          dispatch({
            type: "replace",
            destinationIndex: found.index,
            destinationZone: found.zone,
            data: {
              type: found.component.type,
              props: {
                ...found.component.props,
                ...newProps,
              },
            },
          } as Parameters<typeof dispatch>[0]);
          break;
        }

        case "removeComponent": {
          const componentId = output.componentId as string;
          if (!componentId) break;

          const found = findComponentInData(data, componentId);
          if (!found) {
            console.warn(`Component ${componentId} not found for removal`);
            break;
          }

          dispatch({
            type: "remove",
            index: found.index,
            zone: found.zone,
          } as Parameters<typeof dispatch>[0]);
          break;
        }

        case "moveComponent": {
          const sourceZone = output.sourceZone as string;
          const sourceIndex = output.sourceIndex as number;
          const destinationZone = output.destinationZone as string;
          const destinationIndex = output.destinationIndex as number;

          dispatch({
            type: "move",
            source: { index: sourceIndex, zone: sourceZone },
            destination: { index: destinationIndex, zone: destinationZone },
          } as Parameters<typeof dispatch>[0]);
          break;
        }

        case "highlightElement": {
          const selector = output.selector as string;
          const tooltip = output.tooltip as string;
          const duration = (output.duration as number) || 5000;

          if (!selector) break;

          // Find element by data-tour attribute or CSS selector
          const el = document.querySelector(`[data-tour="${selector}"]`) || document.querySelector(selector);
          if (el) {
            // Create highlight overlay
            const overlay = document.createElement("div");
            overlay.className = "ai-highlight-overlay";
            const rect = el.getBoundingClientRect();
            Object.assign(overlay.style, {
              position: "fixed",
              top: `${rect.top - 4}px`,
              left: `${rect.left - 4}px`,
              width: `${rect.width + 8}px`,
              height: `${rect.height + 8}px`,
              border: "2px solid #6366f1",
              borderRadius: "8px",
              boxShadow: "0 0 0 4000px rgba(0,0,0,0.3)",
              zIndex: "99999",
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            });

            // Create tooltip
            if (tooltip) {
              const tip = document.createElement("div");
              Object.assign(tip.style, {
                position: "absolute",
                bottom: "-40px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#6366f1",
                color: "white",
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "500",
                whiteSpace: "nowrap",
                pointerEvents: "none",
              });
              tip.textContent = tooltip;
              overlay.appendChild(tip);
            }

            document.body.appendChild(overlay);
            setTimeout(() => {
              overlay.style.opacity = "0";
              setTimeout(() => overlay.remove(), 300);
            }, duration);
          }
          break;
        }
      }
    },
    [dispatch]
  );

  /* ---- Watch messages for completed tool calls ---- */
  useEffect(() => {
    for (const msg of messages) {
      if (msg.role !== "assistant" || !msg.parts) continue;
      for (const part of msg.parts) {
        if (!isToolUIPart(part)) continue;
        if (part.state !== "output-available") continue;
        if (appliedRef.current.has(part.toolCallId)) continue;

        appliedRef.current.add(part.toolCallId);

        // Extract tool name from the part type (format: "tool-toolName")
        const toolName = part.type.replace("tool-", "");
        const output = (part as unknown as { output?: Record<string, unknown> }).output;
        if (output) {
          console.log("[AI Chat] Applying tool action:", toolName, output);
          applyToolAction(toolName, output);
        }
      }
    }
  }, [messages, applyToolAction]);

  /* ---- Load/save chat history ---- */
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    try {
      const stored = localStorage.getItem(getChatStorageKey(pageId));
      if (stored) {
        const parsedMessages = JSON.parse(stored) as UIMessage[];
        if (parsedMessages.length > 0) {
          setMessages(parsedMessages);
        }
      }
    } catch (e) {
      console.error("Failed to load chat history:", e);
    }
  }, [pageId, setMessages]);

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(getChatStorageKey(pageId), JSON.stringify(messages));
      } catch (e) {
        console.error("Failed to save chat history:", e);
      }
    }
  }, [messages, pageId]);

  /* ---- Auto-scroll ---- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  /* ---- Clear chat ---- */
  const handleClearHistory = useCallback(() => {
    try {
      localStorage.removeItem(getChatStorageKey(pageId));
      setMessages([]);
      appliedRef.current.clear();
    } catch (e) {
      console.error("Failed to clear chat history:", e);
    }
  }, [pageId, setMessages]);

  /* ---- Quick prompt ---- */
  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  /* ---- Submit ---- */
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const messageText = input;
    setInput("");
    await sendMessage({ text: messageText });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  /* ---- Get tool parts from a message ---- */
  const getToolParts = (message: UIMessage): ToolUIPart[] => {
    if (!message.parts) return [];
    return message.parts.filter(
      (p): p is ToolUIPart => isToolUIPart(p)
    );
  };

  return (
    <div className="ai-chat-panel">
      {/* Header */}
      <div className="ai-chat-header">
        <div className="ai-chat-header-left">
          {selectedComponent && (
            <span className="ai-chat-selected-indicator" title={`Selected: ${selectedComponent.type}`}>
              {selectedComponent.type}
            </span>
          )}
          {!selectedComponent && (
            <span className="ai-chat-header-hint">Select a component to edit</span>
          )}
        </div>
        {messages.length > 0 && (
          <div className="ai-chat-header-right">
            <span className="ai-chat-header-title">
              {messages.length} messages
            </span>
            <button
              className="ai-chat-clear-btn"
              onClick={handleClearHistory}
              title="Clear chat history"
            >
              <TrashIcon />
            </button>
          </div>
        )}
      </div>

      {/* Help mode banner */}
      {helpMode && (
        <div className="ai-chat-help-banner">
          <HelpIcon />
          <span>
            <strong>Help Mode Active</strong>
            {selectedComponent
              ? ` - Ask about ${selectedComponent.type}`
              : " - Select a component to get help"}
          </span>
        </div>
      )}

      {/* Messages area */}
      <div className="ai-chat-messages">
        {messages.length === 0 ? (
          <div className="ai-chat-empty">
            <div className={`ai-chat-empty-icon ${helpMode ? "help-mode" : ""}`}>
              {helpMode ? <HelpIcon /> : <SparklesIcon />}
            </div>
            <p className="ai-chat-empty-title">
              {helpMode ? "Help Mode" : "AI Page Builder"}
            </p>
            <p className="ai-chat-empty-desc">
              {helpMode
                ? selectedComponent
                  ? `Ask about the selected ${selectedComponent.type} component. I'll explain how to edit it.`
                  : "Select a component in the editor, then ask me how to edit it."
                : "Ask me to build pages, add components, edit content, or rearrange layouts."
              }
            </p>
            <div className="ai-quick-prompts">
              {(helpMode && selectedComponent ? HELP_PROMPTS : QUICK_PROMPTS).map((item) => (
                <button
                  key={item.label}
                  className={`ai-quick-btn ${helpMode ? "help-mode" : ""}`}
                  onClick={() => handleQuickPrompt(item.prompt)}
                  disabled={helpMode && !selectedComponent}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => {
              const text = getTextFromParts(message);
              const toolParts = getToolParts(message);

              if (message.role === "user") {
                return (
                  <div key={message.id} className="ai-chat-message ai-chat-message-user">
                    <div className="ai-chat-content">
                      <div className="ai-chat-text">{text}</div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={message.id} className="ai-chat-message ai-chat-message-assistant">
                  <div className="ai-chat-avatar">
                    <SparklesIcon />
                  </div>
                  <div className="ai-chat-content">
                    {/* Tool call badges */}
                    {toolParts.length > 0 && (
                      <div className="ai-chat-tools">
                        {toolParts.map((part) => (
                          <ToolCallBubble
                            key={part.toolCallId}
                            toolName={part.type.replace("tool-", "")}
                            state={part.state}
                          />
                        ))}
                      </div>
                    )}
                    {/* Text content */}
                    {text && (
                      <div className="ai-chat-text">{text}</div>
                    )}
                  </div>
                </div>
              );
            })}
            {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="ai-chat-message ai-chat-message-assistant">
                <div className="ai-chat-avatar">
                  <SparklesIcon />
                </div>
                <div className="ai-chat-content">
                  <div className="ai-chat-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input area */}
      <form onSubmit={onSubmit} className="ai-chat-input-area">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={helpMode ? "Ask about the editor..." : "Ask AI to edit your page..."}
          className="ai-chat-input"
          rows={2}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="ai-chat-submit"
          disabled={!input.trim() || isLoading}
        >
          <SendIcon />
        </button>
      </form>

      <style>{`
        .ai-chat-panel {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #fafafa;
        }

        .ai-chat-help-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          border-bottom: 1px solid #c4b5fd;
          font-size: 13px;
          color: #5b21b6;
        }

        .ai-chat-help-banner svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .ai-chat-help-banner strong {
          font-weight: 600;
        }

        .ai-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-bottom: 1px solid #e5e7eb;
          background: white;
          min-height: 44px;
        }

        .ai-chat-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ai-chat-header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ai-chat-header-title {
          font-size: 11px;
          font-weight: 500;
          color: #9ca3af;
        }

        .ai-chat-header-hint {
          font-size: 11px;
          color: #9ca3af;
          font-style: italic;
        }

        .ai-chat-selected-indicator {
          display: inline-flex;
          padding: 3px 8px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .ai-chat-clear-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: transparent;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          color: #9ca3af;
          cursor: pointer;
          transition: all 0.15s;
        }

        .ai-chat-clear-btn:hover {
          background: #fef2f2;
          border-color: #fecaca;
          color: #ef4444;
        }

        .ai-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .ai-chat-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          padding: 20px;
        }

        .ai-chat-empty-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 16px;
        }

        .ai-chat-empty-icon.help-mode {
          background: linear-gradient(135deg, #7c3aed, #a78bfa);
        }

        .ai-chat-empty-icon.help-mode svg {
          width: 24px;
          height: 24px;
        }

        .ai-chat-empty-title {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .ai-chat-empty-desc {
          font-size: 13px;
          color: #6b7280;
          margin: 0 0 20px 0;
          line-height: 1.5;
        }

        .ai-quick-prompts {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .ai-quick-btn {
          padding: 8px 12px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          font-size: 12px;
          color: #374151;
          cursor: pointer;
          transition: all 0.15s;
        }

        .ai-quick-btn:hover {
          background: #f3f4f6;
          border-color: #6366f1;
          color: #6366f1;
        }

        .ai-quick-btn.help-mode {
          border-color: #ddd6fe;
        }

        .ai-quick-btn.help-mode:hover {
          background: #ede9fe;
          border-color: #a78bfa;
          color: #7c3aed;
        }

        .ai-quick-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .ai-quick-btn:disabled:hover {
          background: white;
          border-color: #e5e7eb;
          color: #374151;
        }

        .ai-chat-message {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .ai-chat-message-user {
          justify-content: flex-end;
        }

        .ai-chat-message-user .ai-chat-content {
          background: #6366f1;
          color: white;
          border-radius: 16px 16px 4px 16px;
        }

        .ai-chat-message-assistant .ai-chat-content {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px 16px 16px 4px;
          color: #1f2937;
        }

        .ai-chat-avatar {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .ai-chat-avatar svg {
          width: 14px;
          height: 14px;
        }

        .ai-chat-content {
          padding: 10px 14px;
          max-width: 85%;
        }

        .ai-chat-text {
          font-size: 13px;
          line-height: 1.5;
          white-space: pre-wrap;
        }

        .ai-chat-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 8px;
        }

        .ai-chat-tool {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 4px;
          font-size: 11px;
          color: #166534;
        }

        .ai-chat-tool.errored {
          background: #fef2f2;
          border-color: #fecaca;
          color: #991b1b;
        }

        .ai-chat-tool-icon {
          font-size: 12px;
          font-weight: 600;
        }

        .ai-chat-tool-name {
          font-weight: 500;
        }

        .ai-chat-tool-status {
          font-weight: 600;
          margin-left: 2px;
        }

        .ai-chat-tool-status.success {
          color: #22c55e;
        }

        .ai-chat-tool-status.error {
          color: #ef4444;
        }

        .ai-chat-spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .ai-chat-typing {
          display: flex;
          gap: 4px;
          padding: 4px 0;
        }

        .ai-chat-typing span {
          width: 6px;
          height: 6px;
          background: #9ca3af;
          border-radius: 50%;
          animation: typing 1.4s ease-in-out infinite;
        }

        .ai-chat-typing span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .ai-chat-typing span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        .ai-chat-input-area {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid #e5e7eb;
          background: white;
        }

        .ai-chat-input {
          flex: 1;
          padding: 10px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          font-size: 13px;
          font-family: inherit;
          resize: none;
          min-height: 40px;
          max-height: 120px;
          color: #1f2937;
          background: white;
        }

        .ai-chat-input::placeholder {
          color: #9ca3af;
        }

        .ai-chat-input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .ai-chat-input:disabled {
          background: #f9fafb;
          color: #6b7280;
        }

        .ai-chat-submit {
          width: 40px;
          height: 40px;
          background: #6366f1;
          border: none;
          border-radius: 10px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
          flex-shrink: 0;
          align-self: flex-end;
        }

        .ai-chat-submit:hover:not(:disabled) {
          background: #4f46e5;
        }

        .ai-chat-submit:disabled {
          background: #d1d5db;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

// Export the plugin
export const aiChatPlugin = {
  name: "ai-chat",
  label: "AI",
  icon: <SparklesIcon />,
  render: AIChatPluginPanel,
};
