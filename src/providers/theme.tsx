"use client";

import { ThemeProvider } from "next-themes";

export function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      value={{ light: "light-mode", dark: "dark-mode" }}
    >
      {children}
    </ThemeProvider>
  );
}
