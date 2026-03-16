'use client'

/**
 * Help System Provider
 *
 * Provides context for help mode and walkthrough functionality.
 * Handles hotkeys, element registration, and content fetching.
 */

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import type {
  HelpContextValue,
  HelpModeState,
  HelpProviderProps,
  RegisteredElement,
  HelpContent,
  HelpTour,
} from './types'
import type { HelpContentUpdateEvent } from './types'
import { getDefaultContent } from './default-content'
import { HelpOverlay } from './help-overlay'
import { HelpMessageBar } from './help-message-bar'
import { HelpTooltip } from './help-tooltip'

// Create context
const HelpContext = createContext<HelpContextValue | null>(null)

// Custom hook to use help context
export function useHelp() {
  const context = useContext(HelpContext)
  if (!context) {
    throw new Error('useHelp must be used within a HelpProvider')
  }
  return context
}

// Optional hook that doesn't throw if outside provider
export function useHelpOptional() {
  return useContext(HelpContext)
}

export function HelpProvider({
  children,
  defaultContent,
  storeId,
  disabled = false,
}: HelpProviderProps) {
  // Element registry
  const elementsRef = useRef<Map<string, HTMLElement>>(new Map())

  // Help mode state
  const [helpMode, setHelpMode] = useState<HelpModeState>({
    isActive: false,
    selectedElement: null,
    visibleElements: [],
    content: null,
    isLoading: false,
  })

  // Walkthrough state
  const [isWalkthroughActive, setIsWalkthroughActive] = useState(false)
  const [availableTours, setAvailableTours] = useState<HelpTour[]>([])

  // Content update tracking (for AI integration)
  const [recentUpdates, setRecentUpdates] = useState<HelpContentUpdateEvent[]>([])

  // Auto-discover elements with data-help-key attribute
  const discoverHelpElements = useCallback(() => {
    const elements = document.querySelectorAll('[data-help-key]')
    elements.forEach((element) => {
      const key = element.getAttribute('data-help-key')
      if (key && element instanceof HTMLElement) {
        elementsRef.current.set(key, element)
      }
    })
  }, [])

  // Set up mutation observer to detect new help elements
  useEffect(() => {
    if (!helpMode.isActive) return

    // Discover elements with data-help-key on activation
    discoverHelpElements()

    // Set up mutation observer to detect new elements dynamically added
    const mutationObserver = new MutationObserver(() => {
      discoverHelpElements()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
    }
  }, [helpMode.isActive, discoverHelpElements])

  // Hotkey handling
  useEffect(() => {
    if (disabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Q: Toggle help mode
      if (e.ctrlKey && e.key === 'q') {
        e.preventDefault()
        toggleHelpMode()
      }

      // Ctrl+W: Start walkthrough
      if (e.ctrlKey && e.key === 'w') {
        e.preventDefault()
        if (!isWalkthroughActive) {
          startWalkthrough()
        }
      }

      // Escape: Exit help mode or walkthrough
      if (e.key === 'Escape') {
        if (helpMode.isActive) {
          e.preventDefault()
          exitHelpMode()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [disabled, helpMode.isActive, isWalkthroughActive])

  // Toggle help mode
  const toggleHelpMode = useCallback(() => {
    setHelpMode((prev) => ({
      ...prev,
      isActive: !prev.isActive,
      selectedElement: null,
      content: null,
      visibleElements: [],
    }))
  }, [])

  const enterHelpMode = useCallback(() => {
    setHelpMode((prev) => ({
      ...prev,
      isActive: true,
      selectedElement: null,
      content: null,
    }))
  }, [])

  const exitHelpMode = useCallback(() => {
    setHelpMode((prev) => ({
      ...prev,
      isActive: false,
      selectedElement: null,
      content: null,
      visibleElements: [],
    }))
  }, [])

  // Register an element for help
  const registerElement = useCallback(
    (key: string, element: HTMLElement) => {
      elementsRef.current.set(key, element)
      // CSS classes are applied by HelpOverlay when help mode is active
    },
    []
  )

  // Unregister an element
  const unregisterElement = useCallback((key: string) => {
    elementsRef.current.delete(key)
  }, [])

  // Fetch content for an element
  // Priority: Database (custom) > Props > Built-in defaults
  const getContent = useCallback(
    async (key: string): Promise<HelpContent | null> => {
      // 1. First try database (highest priority - allows AI/admin overrides)
      try {
        const params = new URLSearchParams({ elementKey: key })
        if (storeId) {
          params.set('storeId', storeId)
        }

        const response = await fetch(`/api/help/content?${params}`)
        if (response.ok) {
          const data = await response.json()
          if (data) return data
        }
      } catch (error) {
        console.error('Failed to fetch help content from API:', error)
      }

      // 2. Check props (component-specific overrides)
      if (defaultContent?.[key]) {
        return {
          ...defaultContent[key],
          elementKey: key,
          createdBy: 'SYSTEM',
        }
      }

      // 3. Fall back to built-in default content
      const builtInDefault = getDefaultContent(key)
      if (builtInDefault) {
        return builtInDefault
      }

      return null
    },
    [defaultContent, storeId]
  )

  // Select an element and load its content
  const selectElement = useCallback(
    async (key: string) => {
      const element = elementsRef.current.get(key)
      if (!element) return

      const rect = element.getBoundingClientRect()
      const registered: RegisteredElement = { key, element, rect }

      setHelpMode((prev) => ({
        ...prev,
        selectedElement: registered,
        isLoading: true,
        content: null,
      }))

      const content = await getContent(key)

      setHelpMode((prev) => ({
        ...prev,
        content,
        isLoading: false,
      }))
    },
    [getContent]
  )

  // Clear selection
  const clearSelection = useCallback(() => {
    setHelpMode((prev) => ({
      ...prev,
      selectedElement: null,
      content: null,
      isLoading: false,
    }))
  }, [])

  // Highlight a specific element with optional custom content (called by AI tools)
  const highlightWithContent = useCallback(
    async (key: string, customContent?: Partial<HelpContent>) => {
      // Enter help mode if not already active
      setHelpMode((prev) => ({
        ...prev,
        isActive: true,
        selectedElement: null,
        content: null,
      }))

      // Wait for MutationObserver to discover elements
      await new Promise((resolve) => setTimeout(resolve, 150))
      discoverHelpElements()

      const element = elementsRef.current.get(key)
      if (!element) {
        console.warn(`[HelpProvider] Element not found for key: ${key}`)
        return
      }

      const rect = element.getBoundingClientRect()
      const registered: RegisteredElement = { key, element, rect }

      if (customContent && (customContent.title || customContent.summary)) {
        // Use custom content directly (AI-provided contextual help)
        setHelpMode((prev) => ({
          ...prev,
          selectedElement: registered,
          content: {
            elementKey: key,
            title: customContent.title || key,
            summary: customContent.summary || '',
            details: customContent.details,
            createdBy: 'AI',
          } as HelpContent,
          isLoading: false,
        }))
      } else {
        // Fetch content as usual
        setHelpMode((prev) => ({
          ...prev,
          selectedElement: registered,
          isLoading: true,
          content: null,
        }))

        const content = await getContent(key)
        setHelpMode((prev) => ({
          ...prev,
          content,
          isLoading: false,
        }))
      }
    },
    [discoverHelpElements, getContent]
  )

  // Start walkthrough
  const startWalkthrough = useCallback(async (tourSlug?: string) => {
    setIsWalkthroughActive(true)
    // Exit help mode if active
    setHelpMode((prev) => ({
      ...prev,
      isActive: false,
      selectedElement: null,
      content: null,
      visibleElements: [],
    }))

    if (tourSlug) {
      // Fetch tour steps from API
      try {
        const params = new URLSearchParams({ slug: tourSlug })
        if (storeId) params.set('storeId', storeId)
        const response = await fetch(`/api/help/tours?${params}`)
        if (response.ok) {
          const tours = await response.json()
          const tour = Array.isArray(tours) ? tours.find((t: HelpTour) => t.slug === tourSlug) : null
          if (tour) {
            setAvailableTours((prev) => {
              const exists = prev.some((t) => t.slug === tourSlug)
              return exists ? prev : [...prev, tour]
            })
          }
        }
      } catch (error) {
        console.error('[HelpProvider] Failed to fetch tour:', error)
      }
    }
  }, [storeId])

  // Stop walkthrough
  const stopWalkthrough = useCallback(() => {
    setIsWalkthroughActive(false)
  }, [])

  // Handle content updates from AI tools
  const onContentUpdated = useCallback((event: HelpContentUpdateEvent) => {
    // Add to recent updates (keep last 10)
    setRecentUpdates((prev) => {
      const updated = [event, ...prev].slice(0, 10)
      return updated
    })

    // If the updated element is currently selected, refresh it
    if (helpMode.selectedElement?.key === event.elementKey) {
      selectElement(event.elementKey)
    }

    console.log('[HelpProvider] Content updated:', event.elementKey, event.action)
  }, [helpMode.selectedElement?.key, selectElement])

  // Load available tours on mount
  useEffect(() => {
    if (disabled) return

    async function loadTours() {
      try {
        const params = new URLSearchParams()
        if (storeId) {
          params.set('storeId', storeId)
        }

        const response = await fetch(`/api/help/tours?${params}`)
        if (response.ok) {
          const data = await response.json()
          setAvailableTours(data || [])
        }
      } catch (error) {
        console.error('Failed to fetch help tours:', error)
      }
    }

    loadTours()
  }, [disabled, storeId])

  const contextValue: HelpContextValue = {
    helpMode,
    toggleHelpMode,
    enterHelpMode,
    exitHelpMode,
    registerElement,
    unregisterElement,
    selectElement,
    clearSelection,
    getContent,
    highlightWithContent,
    onContentUpdated,
    recentUpdates,
    isWalkthroughActive,
    startWalkthrough,
    stopWalkthrough,
    availableTours,
  }

  if (disabled) {
    return <>{children}</>
  }

  return (
    <HelpContext.Provider value={contextValue}>
      {children}

      {/* Help mode UI */}
      {helpMode.isActive && (
        <>
          <HelpOverlay />
          <HelpMessageBar />
          {helpMode.selectedElement && <HelpTooltip />}
        </>
      )}
    </HelpContext.Provider>
  )
}
