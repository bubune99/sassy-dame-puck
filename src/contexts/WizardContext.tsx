"use client";

import { createContext, useContext, type ReactNode } from "react";

const WizardContext = createContext({});

export function WizardProvider({ children }: { children: ReactNode }) {
  return <WizardContext.Provider value={{}}>{children}</WizardContext.Provider>;
}

export function useWizard() {
  return useContext(WizardContext);
}
