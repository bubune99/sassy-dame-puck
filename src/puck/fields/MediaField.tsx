"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import type { MediaWithRelations, FolderTree } from "@/lib/media/types";

interface MediaFieldProps {
  value: string;
  onChange: (value: string) => void;
  accept?: string;
}

interface MediaListResponse {
  media: MediaWithRelations[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export function MediaField({ value, onChange, accept = "image/*" }: MediaFieldProps) {
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState<MediaWithRelations[]>([]);
  const [folders, setFolders] = useState<FolderTree[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [folderId, setFolderId] = useState<string | null>(null);
  const [folderPath, setFolderPath] = useState<{ id: string | null; name: string }[]>([
    { id: null, name: "All Media" },
  ]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const mediaType = accept.startsWith("image/") ? "image" : undefined;

  const fetchMedia = useCallback(async (p: number, s: string, folder: string | null) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(p),
        limit: "30",
        sortBy: "createdAt",
        sortOrder: "desc",
      });
      if (mediaType) params.set("type", mediaType);
      if (s) params.set("search", s);
      if (folder) params.set("folderId", folder);

      const res = await fetch(`/api/media?${params}`);
      if (!res.ok) throw new Error("Failed to fetch media");
      const data: MediaListResponse = await res.json();

      setMedia(p === 1 ? data.media : (prev) => [...prev, ...data.media]);
      setHasMore(data.hasMore);
      setTotal(data.total);
    } catch (err) {
      console.error("MediaField fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [mediaType]);

  const fetchFolders = useCallback(async () => {
    try {
      const res = await fetch("/api/media/folders?tree=true");
      if (res.ok) {
        const data = await res.json();
        setFolders(data);
      }
    } catch (err) {
      console.error("MediaField folders error:", err);
    }
  }, []);

  useEffect(() => {
    if (open) {
      fetchMedia(1, search, folderId);
      fetchFolders();
    }
  }, [open, folderId, fetchMedia, fetchFolders]);

  useEffect(() => {
    if (!open) return;
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => {
      setPage(1);
      fetchMedia(1, search, folderId);
    }, 300);
    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [search]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  const handleSelect = (item: MediaWithRelations) => {
    onChange(item.url);
    setOpen(false);
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const presignRes = await fetch("/api/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "presign",
          filename: file.name,
          mimeType: file.type,
          size: file.size,
        }),
      });
      if (!presignRes.ok) throw new Error("Failed to get presigned URL");
      const presignData = await presignRes.json();

      const uploadRes = await fetch(presignData.uploadUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
          "Content-Length": String(file.size),
        },
      });
      if (!uploadRes.ok) throw new Error("Failed to upload file");

      const completeRes = await fetch("/api/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "complete",
          filename: presignData.key.split("/").pop(),
          originalName: file.name,
          mimeType: file.type,
          size: file.size,
          url: presignData.publicUrl,
          key: presignData.key,
          bucket: presignData.bucket,
          provider: presignData.provider,
          folderId: folderId || undefined,
        }),
      });
      if (!completeRes.ok) throw new Error("Failed to complete upload");
      const newMedia = await completeRes.json();

      onChange(newMedia.url);
      setOpen(false);
    } catch (err) {
      console.error("MediaField upload error:", err);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const navigateToFolder = (folder: FolderTree) => {
    setFolderId(folder.id);
    setFolderPath((prev) => [...prev, { id: folder.id, name: folder.name }]);
    setPage(1);
  };

  const navigateToBreadcrumb = (index: number) => {
    const crumb = folderPath[index];
    setFolderId(crumb.id);
    setFolderPath((prev) => prev.slice(0, index + 1));
    setPage(1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMedia(nextPage, search, folderId);
  };

  const modal = open
    ? createPortal(
        <div className="mf-overlay" onClick={() => setOpen(false)}>
          <div className="mf-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="mf-header">
              <h3 className="mf-title">Media Library</h3>
              <div className="mf-header-actions">
                <button
                  type="button"
                  className="mf-btn mf-btn-upload"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  {uploading ? "Uploading..." : "Upload"}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={accept}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleUpload(file);
                    e.target.value = "";
                  }}
                />
                <button
                  type="button"
                  className="mf-close"
                  onClick={() => setOpen(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Search bar */}
            <div className="mf-search-bar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mf-search-icon">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search media..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mf-search-input"
                autoFocus
              />
              {search && (
                <button type="button" className="mf-search-clear" onClick={() => setSearch("")}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Breadcrumbs + count */}
            <div className="mf-breadcrumbs">
              {folderPath.map((crumb, i) => (
                <React.Fragment key={crumb.id ?? "root"}>
                  {i > 0 && <span className="mf-sep">/</span>}
                  <button
                    type="button"
                    className={`mf-crumb ${i === folderPath.length - 1 ? "active" : ""}`}
                    onClick={() => navigateToBreadcrumb(i)}
                  >
                    {crumb.name}
                  </button>
                </React.Fragment>
              ))}
              <span className="mf-count">{total} items</span>
            </div>

            {/* Subfolders */}
            {folders.length > 0 && !search && (
              <div className="mf-folders">
                {(folderId ? findSubfolders(folders, folderId) : folders).map((folder) => (
                  <button
                    key={folder.id}
                    type="button"
                    className="mf-folder"
                    onClick={() => navigateToFolder(folder)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>{folder.name}</span>
                    {folder.mediaCount > 0 && (
                      <span className="mf-folder-badge">{folder.mediaCount}</span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Media grid */}
            <div className="mf-grid-scroll">
              <div className="mf-grid">
                {media.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`mf-item ${value === item.url ? "selected" : ""}`}
                    onClick={() => handleSelect(item)}
                    title={item.originalName}
                  >
                    {item.mimeType.startsWith("image/") ? (
                      <img src={item.url} alt={item.alt || item.originalName} loading="lazy" />
                    ) : (
                      <div className="mf-file-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                    )}
                    <span className="mf-item-name">{item.originalName}</span>
                    {value === item.url && (
                      <div className="mf-check">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
                {media.length === 0 && !loading && (
                  <div className="mf-empty">
                    {search ? "No media matching your search" : "No media in this folder"}
                  </div>
                )}
              </div>

              {loading && <div className="mf-loading">Loading...</div>}
              {hasMore && !loading && (
                <button type="button" className="mf-btn mf-btn-more" onClick={loadMore}>
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <div className="media-field">
      {/* Collapsed preview */}
      <div className="media-field-preview">
        {value ? (
          <div className="media-field-thumb-wrapper">
            <img src={value} alt="" className="media-field-thumb" />
            <div className="media-field-url">{value.split("/").pop()}</div>
          </div>
        ) : (
          <div className="media-field-empty">No media selected</div>
        )}
        <div className="media-field-actions">
          <button
            type="button"
            className="media-field-btn media-field-btn-primary"
            onClick={() => setOpen(true)}
          >
            Browse Media
          </button>
          {value && (
            <button
              type="button"
              className="media-field-btn media-field-btn-clear"
              onClick={() => onChange("")}
              title="Clear"
            >
              x
            </button>
          )}
        </div>
      </div>

      {modal}

      <style>{mediaFieldStyles}</style>
    </div>
  );
}

function findSubfolders(folders: FolderTree[], parentId: string): FolderTree[] {
  for (const f of folders) {
    if (f.id === parentId) return f.children || [];
    if (f.children?.length) {
      const found = findSubfolders(f.children, parentId);
      if (found.length) return found;
    }
  }
  return [];
}

const mediaFieldStyles = `
  /* ===== Collapsed field ===== */
  .media-field-preview {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: #fff;
    border: 1px solid #d1d5db;
    border-radius: 6px;
  }

  .media-field-thumb-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }

  .media-field-thumb {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    flex-shrink: 0;
  }

  .media-field-url {
    font-size: 12px;
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }

  .media-field-empty {
    flex: 1;
    font-size: 12px;
    color: #9ca3af;
  }

  .media-field-actions {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  .media-field-btn {
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.15s ease;
  }

  .media-field-btn-primary {
    background: #3b82f6;
    color: #fff;
    border-color: #3b82f6;
  }

  .media-field-btn-primary:hover { background: #2563eb; }

  .media-field-btn-clear {
    background: #fee2e2;
    color: #ef4444;
    border-color: #fecaca;
    padding: 6px 8px;
  }

  .media-field-btn-clear:hover { background: #fecaca; }

  /* ===== Modal overlay ===== */
  .mf-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    animation: mf-fade-in 0.15s ease;
  }

  @keyframes mf-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .mf-modal {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 800px;
    max-height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: mf-slide-up 0.2s ease;
  }

  @keyframes mf-slide-up {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Header */
  .mf-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid #e5e7eb;
    flex-shrink: 0;
  }

  .mf-title {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }

  .mf-header-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .mf-close {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: #6b7280;
    transition: all 0.15s ease;
  }

  .mf-close:hover {
    background: #f3f4f6;
    color: #111827;
  }

  /* Search */
  .mf-search-bar {
    position: relative;
    display: flex;
    align-items: center;
    margin: 12px 20px 0;
    flex-shrink: 0;
  }

  .mf-search-icon {
    position: absolute;
    left: 12px;
    color: #9ca3af;
    pointer-events: none;
  }

  .mf-search-input {
    width: 100%;
    padding: 10px 36px 10px 36px;
    font-size: 14px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.15s ease;
  }

  .mf-search-input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .mf-search-clear {
    position: absolute;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: #9ca3af;
    padding: 4px;
    border-radius: 4px;
  }

  .mf-search-clear:hover { color: #374151; }

  /* Breadcrumbs */
  .mf-breadcrumbs {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 10px 20px 0;
    flex-wrap: wrap;
    flex-shrink: 0;
  }

  .mf-crumb {
    background: none;
    border: none;
    font-size: 12px;
    color: #6b7280;
    cursor: pointer;
    padding: 2px 6px;
    border-radius: 4px;
    transition: all 0.15s ease;
  }

  .mf-crumb:hover { background: #f3f4f6; color: #374151; }
  .mf-crumb.active { color: #111827; font-weight: 600; }

  .mf-sep { font-size: 11px; color: #d1d5db; }

  .mf-count {
    margin-left: auto;
    font-size: 11px;
    color: #9ca3af;
  }

  /* Folders */
  .mf-folders {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    padding: 8px 20px 0;
    flex-shrink: 0;
  }

  .mf-folder {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 12px;
    color: #374151;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .mf-folder:hover { background: #f3f4f6; border-color: #d1d5db; }

  .mf-folder-badge {
    font-size: 10px;
    color: #9ca3af;
    background: #e5e7eb;
    padding: 1px 5px;
    border-radius: 8px;
  }

  /* Scrollable grid area */
  .mf-grid-scroll {
    flex: 1;
    overflow-y: auto;
    padding: 12px 20px 20px;
    min-height: 0;
  }

  .mf-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
  }

  /* Media items */
  .mf-item {
    position: relative;
    display: flex;
    flex-direction: column;
    background: #f9fafb;
    border: 2px solid transparent;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.15s ease;
    padding: 0;
  }

  .mf-item:hover {
    border-color: #93c5fd;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
  }

  .mf-item.selected {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  .mf-item img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    background: #f3f4f6;
  }

  .mf-file-icon {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f4f6;
    color: #9ca3af;
  }

  .mf-item-name {
    padding: 6px 8px;
    font-size: 11px;
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  .mf-check {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 22px;
    height: 22px;
    background: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .mf-empty {
    grid-column: 1 / -1;
    padding: 48px 24px;
    text-align: center;
    font-size: 14px;
    color: #9ca3af;
  }

  .mf-loading {
    text-align: center;
    padding: 16px;
    font-size: 13px;
    color: #6b7280;
  }

  /* Buttons inside modal */
  .mf-btn {
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .mf-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .mf-btn-upload {
    background: #f0fdf4;
    color: #16a34a;
    border-color: #bbf7d0;
  }

  .mf-btn-upload:hover:not(:disabled) { background: #dcfce7; }

  .mf-btn-more {
    width: 100%;
    justify-content: center;
    background: #f9fafb;
    color: #6b7280;
    margin-top: 12px;
  }

  .mf-btn-more:hover { background: #f3f4f6; color: #374151; }
`;

export default MediaField;
