"use client";

import React from "react";
import { ComponentConfig } from "@puckeditor/core";

export interface VideoEmbedProps {
  url: string;
  aspectRatio: "16:9" | "4:3" | "1:1";
  maxWidth: string;
  borderRadius: string;
  alignment: "left" | "center" | "right";
  puck?: { isEditing?: boolean };
}

function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  // YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return null;
}

const aspectRatioValues: Record<string, string> = {
  "16:9": "56.25%",
  "4:3": "75%",
  "1:1": "100%",
};

export const VideoEmbed = ({
  url,
  aspectRatio,
  maxWidth,
  borderRadius,
  alignment,
}: VideoEmbedProps) => {
  const embedUrl = getEmbedUrl(url);

  const alignmentStyle: React.CSSProperties = {
    display: "flex",
    justifyContent:
      alignment === "center"
        ? "center"
        : alignment === "right"
        ? "flex-end"
        : "flex-start",
    width: "100%",
  };

  if (!embedUrl) {
    return (
      <div style={alignmentStyle}>
        <div
          style={{
            width: "100%",
            maxWidth,
            paddingBottom: aspectRatioValues[aspectRatio],
            backgroundColor: "#1a1a1a",
            borderRadius,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: "14px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {url ? "Invalid video URL" : "Add a YouTube or Vimeo URL"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div style={alignmentStyle}>
      <div
        style={{
          width: "100%",
          maxWidth,
          borderRadius,
          overflow: "hidden",
          position: "relative",
          paddingBottom: aspectRatioValues[aspectRatio],
        }}
      >
        <iframe
          src={embedUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video embed"
        />
      </div>
    </div>
  );
};

export const VideoEmbedConfig: ComponentConfig<VideoEmbedProps> = {
  label: "Video Embed",
  defaultProps: {
    url: "",
    aspectRatio: "16:9",
    maxWidth: "100%",
    borderRadius: "8px",
    alignment: "center",
  },
  fields: {
    url: {
      type: "text",
      label: "Video URL (YouTube or Vimeo)",
    },
    aspectRatio: {
      type: "radio",
      label: "Aspect Ratio",
      options: [
        { label: "16:9", value: "16:9" },
        { label: "4:3", value: "4:3" },
        { label: "1:1", value: "1:1" },
      ],
    },
    maxWidth: {
      type: "select",
      label: "Max Width",
      options: [
        { label: "Full (100%)", value: "100%" },
        { label: "Large (800px)", value: "800px" },
        { label: "Medium (640px)", value: "640px" },
        { label: "Small (480px)", value: "480px" },
      ],
    },
    borderRadius: {
      type: "select",
      label: "Border Radius",
      options: [
        { label: "None", value: "0px" },
        { label: "Small (4px)", value: "4px" },
        { label: "Medium (8px)", value: "8px" },
        { label: "Large (16px)", value: "16px" },
      ],
    },
    alignment: {
      type: "radio",
      label: "Alignment",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
  },
  render: VideoEmbed,
};
