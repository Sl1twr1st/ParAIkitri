"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavigationContext = {
  isOpen: boolean;
  toggle: () => void;
};

const NavigationContext = createContext<NavigationContext | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavigationContext.Provider value={{ isOpen, toggle }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}
