"use client";

import { createContext, useContext, useState } from "react";

type OffcanvasContextType = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

const OffcanvasContext = createContext<OffcanvasContextType | undefined>(
  undefined,
);

export function OffcanvasProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <OffcanvasContext.Provider
      value={{
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
      }}
    >
      {children}
    </OffcanvasContext.Provider>
  );
}

export function useOffcanvas() {
  const ctx = useContext(OffcanvasContext);
  if (!ctx)
    throw new Error("useOffcanvas must be used within a OffcanvasProvider");
  return ctx;
}
