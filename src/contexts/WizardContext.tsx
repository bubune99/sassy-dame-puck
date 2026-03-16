'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import Joyride, { CallBackProps, STATUS, ACTIONS, EVENTS, Step } from 'react-joyride';

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

// Define tours with Joyride steps
const tours: Record<TourId, Step[]> = {
  'page-builder-intro': [
    {
      target: 'body',
      content: 'Welcome to the Page Builder! This is your visual page builder for creating beautiful pages by dragging and dropping components. Let\'s take a quick tour.',
      title: 'Welcome to the Page Builder',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '[data-tour="sidebar"]',
      content: 'Use the sidebar to navigate between Pages, Media, and Settings. Everything you need is right here.',
      title: 'Navigation Sidebar',
      placement: 'right',
      disableBeacon: true,
    },
    {
      target: '[data-tour="pages-link"]',
      content: 'Create and manage your website pages. Click any page to open it in the visual editor where you can drag and drop components.',
      title: 'Pages',
      placement: 'right',
      disableBeacon: true,
    },
    {
      target: '[data-tour="media-link"]',
      content: 'Upload and organize images and files. These can be used in your pages through the Image component.',
      title: 'Media Library',
      placement: 'right',
      disableBeacon: true,
    },
    {
      target: '[data-tour="ai-help"]',
      content: 'Need help? Click the AI Help button to chat with an assistant that can guide you through building pages and using the editor.',
      title: 'AI Assistant',
      placement: 'bottom',
      disableBeacon: true,
    },
    {
      target: '[data-tour="header"]',
      content: 'The top bar shows where you are and provides quick access to the guided tour and AI assistant. You can retake this tour anytime by clicking the Help button.',
      title: 'Top Bar',
      placement: 'bottom',
      disableBeacon: true,
    },
  ],

  'puck-editor': [
    {
      target: 'body',
      content: 'This is the Puck visual editor. You can drag components from the left sidebar onto the canvas to build your page.',
      title: 'The Visual Editor',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '.custom-sidebar',
      content: 'Browse available components here. Drag any component onto the canvas. Categories include Primitives, Layout, Content, and Pre-built sections.',
      title: 'Components Panel',
      placement: 'right',
      disableBeacon: true,
    },
    {
      target: '.puck-editor-container',
      content: 'This is your page canvas. Click any component to select it, then edit its properties in the right panel.',
      title: 'Canvas',
      placement: 'left',
      disableBeacon: true,
    },
    {
      target: 'body',
      content: 'When you\'re happy with your page, click Publish in the top right to save your changes. The page will be live immediately at its URL.',
      title: 'Save & Publish',
      placement: 'center',
      disableBeacon: true,
    },
  ],
};

// Joyride tooltip styling
const joyrideStyles = {
  options: {
    arrowColor: '#fff',
    backgroundColor: '#fff',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    primaryColor: '#007aff',
    textColor: '#1d1d1f',
    zIndex: 10000,
  },
  tooltip: {
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  tooltipTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1d1d1f',
    marginBottom: '8px',
  },
  tooltipContent: {
    fontSize: '15px',
    lineHeight: 1.5,
    color: '#424245',
  },
  buttonNext: {
    backgroundColor: '#007aff',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '15px',
    fontWeight: 500,
    padding: '8px 16px',
  },
  buttonBack: {
    backgroundColor: '#f5f5f7',
    borderRadius: '8px',
    color: '#1d1d1f',
    fontSize: '15px',
    fontWeight: 500,
    marginRight: '8px',
  },
  buttonSkip: {
    color: '#86868b',
    fontSize: '14px',
  },
};

export function WizardProvider({ children }: WizardProviderProps) {
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentTourId, setCurrentTourId] = useState<TourId | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [completedTours, setCompletedTours] = useState<Set<TourId>>(new Set());

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

  const startTour = useCallback((tourId: TourId) => {
    const tourSteps = tours[tourId];
    if (!tourSteps) {
      console.warn(`Tour "${tourId}" not found`);
      return;
    }
    setSteps(tourSteps);
    setStepIndex(0);
    setCurrentTourId(tourId);
    setIsTourActive(true);
  }, []);

  const endTour = useCallback(() => {
    setIsTourActive(false);
    setCurrentTourId(null);
    setStepIndex(0);
  }, []);

  const markTourCompleted = useCallback((tourId: TourId) => {
    setCompletedTours((prev) => new Set([...prev, tourId]));
  }, []);

  const isTourCompleted = useCallback((tourId: TourId) => {
    return completedTours.has(tourId);
  }, [completedTours]);

  const resetTourHistory = useCallback(() => {
    setCompletedTours(new Set());
    localStorage.removeItem('completedTours');
  }, []);

  const handleJoyrideCallback = useCallback((data: CallBackProps) => {
    const { action, index, status, type } = data;

    if (status === STATUS.FINISHED) {
      if (currentTourId) markTourCompleted(currentTourId);
      endTour();
    } else if (status === STATUS.SKIPPED) {
      endTour();
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));
    }
  }, [currentTourId, markTourCompleted, endTour]);

  return (
    <WizardContext.Provider
      value={{ startTour, endTour, isTourActive, currentTourId, markTourCompleted, isTourCompleted, resetTourHistory }}
    >
      {children}
      <Joyride
        steps={steps}
        stepIndex={stepIndex}
        run={isTourActive}
        continuous
        scrollToFirstStep
        showProgress
        showSkipButton
        disableOverlayClose
        callback={handleJoyrideCallback}
        styles={joyrideStyles}
        locale={{
          back: 'Back',
          close: 'Close',
          last: 'Finish',
          next: 'Next',
          skip: 'Skip Tour',
        }}
      />
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
