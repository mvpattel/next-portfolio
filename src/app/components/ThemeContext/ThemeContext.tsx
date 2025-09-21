"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Theme } from "@carbon/react";

export type UiTheme = "light" | "dark";

type ThemeContextValue = {
  theme: UiTheme;
  toggleTheme: () => void;
  setTheme: (t: UiTheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_STORAGE_KEY = "ui-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<UiTheme>("light");

  useEffect(() => {
    const saved = (typeof window !== "undefined"
      ? (localStorage.getItem(THEME_STORAGE_KEY) as UiTheme | null)
      : null);
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      document.documentElement.setAttribute("data-theme", theme); // handy for custom CSS hooks
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {/* This actually applies Carbon’s theme */}
      <Theme theme={theme === "dark" ? "g100" : "g10"}>{children}</Theme>
    </ThemeContext.Provider>
  );
}

export function useUiTheme() {
  return useContext(ThemeContext)!;
}
