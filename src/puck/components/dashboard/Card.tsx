"use client";

import { ComponentConfig } from "@puckeditor/core";
import React from "react";
import { AnimatedWrapper } from "../../animations/AnimatedWrapper";
import {
  AnimationConfig,
  LockConfig,
  GroupConfig,
  defaultAnimationConfig,
  defaultLockConfig,
  defaultGroupConfig,
} from "../../animations/types";
import { AnimationField } from "../../fields/AnimationField";
import { LockField } from "../../fields/LockField";
import { GroupField } from "../../fields/GroupField";
import { ResponsiveVisibility, VisibilitySettings } from "../../fields/ResponsiveVisibility";
import { getVisibilityClassName, defaultVisibility } from "../../utils/visibility";

// Inline color picker for Puck fields
function ColorPickerField({ value, onChange, label }: { value: string; onChange: (v: string) => void; label?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <input
        type="color"
        value={value?.startsWith("#") ? value : "#ffffff"}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: 36, height: 28, border: "1px solid #d1d5db", borderRadius: 4, cursor: "pointer", padding: 0 }}
      />
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label || "#hex or css color"}
        style={{ flex: 1, padding: "4px 8px", border: "1px solid #d1d5db", borderRadius: 4, fontSize: 13 }}
      />
    </div>
  );
}

export interface CardProps {
  // Layout mode
  layoutMode: "single" | "columns" | "grid";
  columns: number;
  columnLayout: string;
  gap: string;

  // Sizing
  width: string;
  height: string;
  minHeight: string;
  maxWidth: string;

  // Card styling
  backgroundColor: string;
  borderRadius: string;
  padding: string;
  shadow: "none" | "sm" | "md" | "lg" | "xl";
  borderWidth: string;
  borderStyle: "solid" | "dashed" | "dotted";
  borderColor: string;
  overflow: "visible" | "hidden" | "auto";

  // Content alignment within slots
  contentAlign: "left" | "center" | "right" | "stretch";
  contentVerticalAlign: "top" | "center" | "bottom" | "stretch";

  // Named slots (up to 4)
  slot0?: React.FC | never[];
  slot1?: React.FC | never[];
  slot2?: React.FC | never[];
  slot3?: React.FC | never[];

  // Behavior
  animation?: Partial<AnimationConfig>;
  lock?: Partial<LockConfig>;
  group?: Partial<GroupConfig>;
  visibility?: VisibilitySettings;

  puck?: { isEditing?: boolean };
}

const shadowStyles: Record<string, string> = {
  none: "none",
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
  lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
  xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
};

const layoutOptions: Record<string, string[]> = {
  "1": ["100%"],
  "1-1": ["50%", "50%"],
  "1-2": ["33.33%", "66.67%"],
  "2-1": ["66.67%", "33.33%"],
  "1-1-1": ["33.33%", "33.33%", "33.33%"],
  "1-2-1": ["25%", "50%", "25%"],
  "2-1-1": ["50%", "25%", "25%"],
  "1-1-2": ["25%", "25%", "50%"],
  "1-1-1-1": ["25%", "25%", "25%", "25%"],
};

function getColumnCountFromLayout(layout: string): number {
  return (layoutOptions[layout] || layoutOptions["1-1"]).length;
}

export const Card = ({
  layoutMode,
  columns,
  columnLayout,
  gap,
  width,
  height,
  minHeight,
  maxWidth,
  backgroundColor,
  borderRadius,
  padding,
  shadow,
  borderWidth: borderWidthProp,
  borderStyle,
  borderColor,
  overflow,
  contentAlign,
  contentVerticalAlign,
  slot0: Slot0,
  slot1: Slot1,
  slot2: Slot2,
  slot3: Slot3,
  animation,
  lock,
  visibility,
  puck,
}: CardProps) => {
  // Backward compat: old data may have `border: boolean` instead of `borderWidth: string`
  const borderWidth = borderWidthProp || "0px";
  const isEditing = puck?.isEditing ?? false;
  const isLocked = lock?.isLocked ?? false;
  const visibilityClasses = getVisibilityClassName(visibility);

  const cardStyle: React.CSSProperties = {
    position: "relative",
    backgroundColor,
    borderRadius,
    padding,
    boxShadow: shadowStyles[shadow] || shadowStyles.none,
    border: borderWidth && borderWidth !== "0px" ? `${borderWidth} ${borderStyle || "solid"} ${borderColor || "#e5e7eb"}` : "none",
    overflow,
    width: width || undefined,
    height: height || undefined,
    minHeight: minHeight || undefined,
    maxWidth: maxWidth || undefined,
  };

  const slots = [Slot0, Slot1, Slot2, Slot3];

  // Map alignment props to CSS flex values
  const alignMap: Record<string, string> = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
    stretch: "stretch",
  };
  const vAlignMap: Record<string, string> = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
    stretch: "stretch",
  };

  const slotInnerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: alignMap[contentAlign] || "stretch",
    justifyContent: vAlignMap[contentVerticalAlign] || "flex-start",
    height: "100%",
    minWidth: 0,
  };

  const lockBadge = isLocked && isEditing && (
    <div
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        background: "#ef4444",
        color: "white",
        padding: "2px 6px",
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 600,
        zIndex: 10,
      }}
    >
      🔒
    </div>
  );

  let inner: React.ReactNode;

  if (layoutMode === "columns") {
    const widths = layoutOptions[columnLayout] || layoutOptions["1-1"];
    inner = (
      <div
        className={visibilityClasses}
        style={{
          ...cardStyle,
          display: "flex",
          gap,
          pointerEvents: isLocked && !isEditing ? "none" : undefined,
        }}
      >
        {lockBadge}
        {widths.map((w, i) => {
          const Slot = slots[i];
          return (
            <div
              key={i}
              style={{
                ...slotInnerStyle,
                flex: `0 0 calc(${w} - ${gap} * ${(widths.length - 1) / widths.length})`,
              }}
            >
              {typeof Slot === "function" && <Slot />}
            </div>
          );
        })}
      </div>
    );
  } else if (layoutMode === "grid") {
    const colCount = Math.min(Math.max(columns || 2, 1), 4);
    inner = (
      <div
        className={visibilityClasses}
        style={{
          ...cardStyle,
          display: "grid",
          gridTemplateColumns: `repeat(${colCount}, 1fr)`,
          gap,
          pointerEvents: isLocked && !isEditing ? "none" : undefined,
        }}
      >
        {lockBadge}
        {slots.slice(0, colCount).map((Slot, i) => (
          <div key={i} style={slotInnerStyle}>
            {typeof Slot === "function" && <Slot />}
          </div>
        ))}
      </div>
    );
  } else {
    // single mode (default)
    inner = (
      <div
        className={visibilityClasses}
        style={{
          ...cardStyle,
          display: "flex",
          flexDirection: "column",
          alignItems: alignMap[contentAlign] || "stretch",
          justifyContent: vAlignMap[contentVerticalAlign] || "flex-start",
          pointerEvents: isLocked && !isEditing ? "none" : undefined,
        }}
      >
        {lockBadge}
        {typeof Slot0 === "function" && <Slot0 />}
      </div>
    );
  }

  if (animation?.enabled && !isEditing) {
    return (
      <AnimatedWrapper animation={animation} isEditing={isEditing}>
        {inner}
      </AnimatedWrapper>
    );
  }

  return inner;
};

export const CardConfig: ComponentConfig<CardProps> = {
  label: "Card",
  defaultProps: {
    layoutMode: "single",
    columns: 2,
    columnLayout: "1-1",
    gap: "16px",
    width: "auto",
    height: "auto",
    minHeight: "",
    maxWidth: "",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    shadow: "md",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    overflow: "hidden",
    contentAlign: "stretch",
    contentVerticalAlign: "top",
    animation: defaultAnimationConfig,
    lock: defaultLockConfig,
    group: defaultGroupConfig,
    visibility: defaultVisibility,
    slot0: [],
    slot1: [],
    slot2: [],
    slot3: [],
  },
  resolveFields: (data, { fields }) => {
    const mode = data.props?.layoutMode ?? "single";
    const resolved: Record<string, any> = { ...fields };

    // Remove all slot fields first
    for (const key of Object.keys(resolved)) {
      if (key.startsWith("slot")) delete resolved[key];
    }

    // Show/hide layout-specific fields
    if (mode === "single") {
      delete resolved.columnLayout;
      delete resolved.columns;
      resolved.slot0 = { type: "slot", label: "Content" };
    } else if (mode === "columns") {
      delete resolved.columns;
      const layout = data.props?.columnLayout ?? "1-1";
      const colCount = getColumnCountFromLayout(layout);
      for (let i = 0; i < colCount; i++) {
        resolved[`slot${i}`] = { type: "slot", label: `Column ${i + 1}` };
      }
    } else if (mode === "grid") {
      delete resolved.columnLayout;
      const colCount = Math.min(Math.max(data.props?.columns ?? 2, 1), 4);
      for (let i = 0; i < colCount; i++) {
        resolved[`slot${i}`] = { type: "slot", label: `Cell ${i + 1}` };
      }
    }

    // Hide outline style/color when outline width is none
    const bw = data.props?.borderWidth ?? "0px";
    if (bw === "0px") {
      delete resolved.borderStyle;
      delete resolved.borderColor;
    }

    return resolved as typeof fields;
  },
  fields: {
    slot0: { type: "slot", label: "Content" },
    slot1: { type: "slot", label: "Column 2" },
    slot2: { type: "slot", label: "Column 3" },
    slot3: { type: "slot", label: "Column 4" },
    layoutMode: {
      type: "radio",
      label: "Layout Mode",
      options: [
        { label: "Single", value: "single" },
        { label: "Columns", value: "columns" },
        { label: "Grid", value: "grid" },
      ],
    },
    columnLayout: {
      type: "select",
      label: "Column Layout",
      options: [
        { label: "Single (100%)", value: "1" },
        { label: "Two Equal (50/50)", value: "1-1" },
        { label: "Two (33/67)", value: "1-2" },
        { label: "Two (67/33)", value: "2-1" },
        { label: "Three Equal (33/33/33)", value: "1-1-1" },
        { label: "Three (25/50/25)", value: "1-2-1" },
        { label: "Three (50/25/25)", value: "2-1-1" },
        { label: "Three (25/25/50)", value: "1-1-2" },
        { label: "Four Equal (25/25/25/25)", value: "1-1-1-1" },
      ],
    },
    columns: {
      type: "select",
      label: "Grid Columns",
      options: [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
      ],
    },
    gap: {
      type: "select",
      label: "Gap",
      options: [
        { label: "None", value: "0px" },
        { label: "Small (8px)", value: "8px" },
        { label: "Medium (16px)", value: "16px" },
        { label: "Large (24px)", value: "24px" },
        { label: "XL (32px)", value: "32px" },
      ],
    },
    width: {
      type: "select",
      label: "Width",
      options: [
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
        { label: "300px", value: "300px" },
        { label: "400px", value: "400px" },
        { label: "500px", value: "500px" },
        { label: "600px", value: "600px" },
      ],
    },
    height: {
      type: "select",
      label: "Height",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Fit Content", value: "fit-content" },
        { label: "200px", value: "200px" },
        { label: "300px", value: "300px" },
        { label: "400px", value: "400px" },
        { label: "500px", value: "500px" },
      ],
    },
    minHeight: {
      type: "text",
      label: "Min Height",
    },
    maxWidth: {
      type: "text",
      label: "Max Width",
    },
    backgroundColor: {
      type: "custom",
      label: "Fill Color",
      render: ({ value, onChange }) => (
        <ColorPickerField value={value || "#ffffff"} onChange={onChange} label="#hex or css color" />
      ),
    },
    borderRadius: {
      type: "select",
      label: "Rounded Corners",
      options: [
        { label: "None (0px)", value: "0px" },
        { label: "Small (4px)", value: "4px" },
        { label: "Medium (8px)", value: "8px" },
        { label: "Large (12px)", value: "12px" },
        { label: "XL (16px)", value: "16px" },
        { label: "2XL (24px)", value: "24px" },
        { label: "Full (pill)", value: "9999px" },
      ],
    },
    padding: {
      type: "select",
      label: "Padding",
      options: [
        { label: "None", value: "0px" },
        { label: "Small", value: "12px" },
        { label: "Medium", value: "20px" },
        { label: "Large", value: "28px" },
        { label: "XL", value: "40px" },
      ],
    },
    shadow: {
      type: "select",
      label: "Shadow",
      options: [
        { label: "None", value: "none" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "XL", value: "xl" },
      ],
    },
    borderWidth: {
      type: "select",
      label: "Outline Width",
      options: [
        { label: "None", value: "0px" },
        { label: "Thin (1px)", value: "1px" },
        { label: "Medium (2px)", value: "2px" },
        { label: "Thick (3px)", value: "3px" },
      ],
    },
    borderStyle: {
      type: "select",
      label: "Outline Style",
      options: [
        { label: "Solid", value: "solid" },
        { label: "Dashed", value: "dashed" },
        { label: "Dotted", value: "dotted" },
      ],
    },
    borderColor: {
      type: "custom",
      label: "Outline Color",
      render: ({ value, onChange }) => (
        <ColorPickerField value={value || "#e5e7eb"} onChange={onChange} label="#hex or css color" />
      ),
    },
    overflow: {
      type: "select",
      label: "Overflow",
      options: [
        { label: "Hidden", value: "hidden" },
        { label: "Visible", value: "visible" },
        { label: "Auto (Scroll)", value: "auto" },
      ],
    },
    contentAlign: {
      type: "radio",
      label: "Horizontal Align",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
        { label: "Stretch", value: "stretch" },
      ],
    },
    contentVerticalAlign: {
      type: "radio",
      label: "Vertical Align",
      options: [
        { label: "Top", value: "top" },
        { label: "Center", value: "center" },
        { label: "Bottom", value: "bottom" },
        { label: "Stretch", value: "stretch" },
      ],
    },
    animation: {
      type: "custom",
      label: "Animation",
      render: ({ value, onChange }) => (
        <AnimationField value={value || defaultAnimationConfig} onChange={onChange} />
      ),
    },
    lock: {
      type: "custom",
      label: "Lock",
      render: ({ value, onChange }) => (
        <LockField value={value || defaultLockConfig} onChange={onChange} />
      ),
    },
    group: {
      type: "custom",
      label: "Group",
      render: ({ value, onChange }) => (
        <GroupField value={value || defaultGroupConfig} onChange={onChange} />
      ),
    },
    visibility: {
      type: "custom",
      label: "Visibility",
      render: ({ value, onChange }) => (
        <ResponsiveVisibility value={value || defaultVisibility} onChange={onChange} />
      ),
    },
  },
  render: Card,
};
