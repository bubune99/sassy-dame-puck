'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';

type TourId = string;

interface WizardContextType {
  startTour: (tourId: TourId) => void;
  endTour: () => void;
  isTourActive: boolean;
  currentTourId: TourId | null;
  markTourCompleted: (tourId: TourId) => void;
  isTourCompleted: (tourId: TourId) => boolean;
  resetTourHistory: () => void;
}

interface WizardProviderProps {
  children: ReactNode;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

interface TourStep {
  id: string;
  title?: string;
  text: string;
  attachTo?: { element: string; on: string };
  buttons?: Array<{ text: string; action: string | (() => void); classes?: string }>;
  classes?: string;
  highlightClass?: string;
  scrollTo?: boolean;
  canClickTarget?: boolean;
}

interface TourConfig {
  steps: TourStep[];
  options?: {
    useModalOverlay?: boolean;
    exitOnEsc?: boolean;
    keyboardNavigation?: boolean;
    defaultStepOptions?: {
      scrollTo?: boolean;
      cancelIcon?: { enabled?: boolean };
    };
  };
}

const tourStyles = `
  .shepherd-element {
    background: white !important;
    border-radius: 12px !important;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
    padding: 20px !important;
    max-width: 360px !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif !important;
  }
  .shepherd-header { padding-bottom: 12px !important; }
  .shepherd-title { font-size: 18px !important; font-weight: 600 !important; color: #1d1d1f !important; }
  .shepherd-text { font-size: 15px !important; line-height: 1.5 !important; color: #424245 !important; margin: 8px 0 16px 0 !important; }
  .shepherd-footer { display: flex !important; justify-content: flex-end !important; gap: 8px !important; padding-top: 12px !important; }
  .shepherd-button { background: #007aff !important; color: white !important; border: none !important; border-radius: 8px !important; padding: 8px 16px !important; font-size: 15px !important; font-weight: 500 !important; cursor: pointer !important; transition: background 0.2s !important; }
  .shepherd-button:hover { background: #0051d5 !important; }
  .shepherd-button-secondary { background: #f5f5f7 !important; color: #1d1d1f !important; }
  .shepherd-button-secondary:hover { background: #e8e8ed !important; }
  .shepherd-modal-overlay-container { background: rgba(0, 0, 0, 0.5) !important; }
`;

const tours: Record<TourId, TourConfig> = {
  'page-builder-intro': {
    steps: [
      {
        id: 'welcome',
        title: 'Welcome to the Page Builder',
        text: 'This is your visual page builder. Create beautiful pages by dragging and dropping components. Let\u2019s take a quick tour.',
        buttons: [{ text: 'Get Started', action: 'next' }]
      },
      {
        id: 'sidebar',
        title: 'Navigation',
        text: 'Use the sidebar to navigate between Pages, Media, and Settings. Everything you need is right here.',
        attachTo: { element: '[data-tour="sidebar"]', on: 'right' },
        buttons: [{ text: 'Next', action: 'next' }]
      },
      {
        id: 'pages',
        title: 'Pages',
        text: 'Create and manage your website pages. Click any page to open it in the visual editor where you can drag and drop components.',
        attachTo: { element: '[data-tour="pages-link"]', on: 'right' },
        buttons: [{ text: 'Next', action: 'next' }]
      },
      {
        id: 'media',
        title: 'Media Library',
        text: 'Upload and organize images and files. These can be used in your pages through the Image component.',
        attachTo: { element: '[data-tour="media-link"]', on: 'right' },
        buttons: [{ text: 'Next', action: 'next' }]
      },
      {
        id: 'ai-help',
        title: 'AI Assistant',
        text: 'Need help? Click the AI Help button to chat with an assistant that can guide you through building pages.',
        attachTo: { element: '[data-tour="ai-help"]', on: 'bottom' },
        buttons: [{ text: 'Next', action: 'next' }]
      },
      {
        id: 'header',
        title: 'Top Bar',
        text: 'The top bar shows where you are and provides quick access to help and the AI assistant.',
        attachTo: { element: '[data-tour="header"]', on: 'bottom' },
        buttons: [{ text: 'Finish', action: 'complete' }]
      },
    ],
    options: {
      useModalOverlay: true,
      exitOnEsc: true,
      keyboardNavigation: true,
      defaultStepOptions: { scrollTo: true, cancelIcon: { enabled: true } }
    }
  },

  'puck-editor': {
    steps: [
      {
        id: 'editor-welcome',
        title: 'The Visual Editor',
        text: 'This is the Puck visual editor. You can drag components from the left sidebar onto the canvas to build your page.',
        buttons: [{ text: 'Let\u2019s Go', action: 'next' }]
      },
      {
        id: 'components-panel',
        title: 'Components',
        text: 'Browse available components here. Drag any component onto the canvas. Categories include Layout, Content, and Pre-built sections.',
        attachTo: { element: '.custom-sidebar', on: 'right' },
        buttons: [{ text: 'Next', action: 'next' }]
      },
      {
        id: 'canvas',
        title: 'Canvas',
        text: 'This is your page canvas. Click any component to select it, then edit its properties in the right panel.',
        attachTo: { element: '.puck-editor-container', on: 'left' },
        buttons: [{ text: 'Next', action: 'next' }]
      },
      {
        id: 'publish',
        title: 'Save & Publish',
        text: 'When you\u2019re happy with your page, click Publish to save your changes. The page will be live immediately.',
        buttons: [{ text: 'Got It', action: 'complete' }]
      },
    ],
    options: {
      useModalOverlay: true,
      exitOnEsc: true,
      defaultStepOptions: { scrollTo: true, cancelIcon: { enabled: true } }
    }
  },
};

export function WizardProvider({ children }: WizardProviderProps) {
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentTourId, setCurrentTourId] = useState<TourId | null>(null);
  const [completedTours, setCompletedTours] = useState<Set<TourId>>(new Set());
  const tourRef = useRef<InstanceType<typeof Shepherd.Tour> | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('completedTours');
    if (stored) {
      setCompletedTours(new Set(JSON.parse(stored)));
    }
  }, []);

  useEffect(() => {
    if (completedTours.size > 0) {
      localStorage.setItem('completedTours', JSON.stringify(Array.from(completedTours)));
    }
  }, [completedTours]);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = tourStyles;
    document.head.appendChild(styleElement);
    return () => { document.head.removeChild(styleElement); };
  }, []);

  const startTour = (tourId: TourId) => {
    const tourConfig = tours[tourId];
    if (!tourConfig) { console.warn(`Tour "${tourId}" not found`); return; }
    if (tourRef.current) { tourRef.current.complete(); }

    const tour = new Shepherd.Tour({
      useModalOverlay: tourConfig.options?.useModalOverlay ?? true,
      defaultStepOptions: {
        cancelIcon: { enabled: tourConfig.options?.defaultStepOptions?.cancelIcon?.enabled ?? true },
        scrollTo: tourConfig.options?.defaultStepOptions?.scrollTo ?? true,
      },
    });

    tourConfig.steps.forEach((step) => {
      const shepherdStep: any = {
        id: step.id,
        title: step.title,
        text: step.text,
        scrollTo: step.scrollTo ?? true,
        classes: step.classes,
        canClickTarget: step.canClickTarget ?? false,
        buttons: step.buttons?.map((button) => {
          if (typeof button.action === 'string') {
            if (button.action === 'next') return { text: button.text, action: tour.next, classes: button.classes };
            if (button.action === 'back') return { text: button.text, action: tour.back, classes: button.classes };
            if (button.action === 'complete') return { text: button.text, action: tour.complete, classes: button.classes };
          }
          return { text: button.text, action: button.action, classes: button.classes };
        }),
      };
      if (step.attachTo) shepherdStep.attachTo = step.attachTo;
      tour.addStep(shepherdStep);
    });

    tour.on('complete', () => { markTourCompleted(tourId); endTour(); });
    tour.on('cancel', () => { endTour(); });

    tourRef.current = tour;
    setCurrentTourId(tourId);
    setIsTourActive(true);
    tour.start();
  };

  const endTour = () => {
    if (tourRef.current) { tourRef.current.complete(); tourRef.current = null; }
    setIsTourActive(false);
    setCurrentTourId(null);
  };

  const markTourCompleted = (tourId: TourId) => {
    setCompletedTours((prev) => new Set([...prev, tourId]));
  };

  const isTourCompleted = (tourId: TourId) => completedTours.has(tourId);

  const resetTourHistory = () => {
    setCompletedTours(new Set());
    localStorage.removeItem('completedTours');
  };

  return (
    <WizardContext.Provider value={{ startTour, endTour, isTourActive, currentTourId, markTourCompleted, isTourCompleted, resetTourHistory }}>
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (context === undefined) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
}
