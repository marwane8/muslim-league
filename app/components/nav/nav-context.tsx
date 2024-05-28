import { createContext, useContext } from "react";

import { Basketball, Soccer } from "../icons";
import { DocumentTextIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

type NavContextType = {
  path: string;
  setPath: (path: string) => void;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};
export const NavContext = createContext<NavContextType | null>(null);

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
}

export const navLinks = [
  { name: "basketball", icon: Basketball },
  { name: "soccer", icon: Soccer },
];

export const sideLinks = [
  { name: "about" },
  { name: "contact" },
  { name: "rules", icon: ClipboardDocumentCheckIcon },
  { name: "waivers", icon: DocumentTextIcon },
];
