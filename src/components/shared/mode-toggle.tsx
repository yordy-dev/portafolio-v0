"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const transitionTimeout = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (transitionTimeout.current !== null) {
        window.clearTimeout(transitionTimeout.current);
      }
      document.documentElement.classList.remove("theme-transition");
    },
    [],
  );

  const toggleTheme = () => {
    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current);
    }
    document.documentElement.classList.add("theme-transition");
    setTheme(theme === "dark" ? "light" : "dark");
    transitionTimeout.current = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
      transitionTimeout.current = null;
    }, 600);
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      aria-label="Cambiar tema"
      className="px-2"
      onClick={toggleTheme}
    >
      <span className="relative block size-[1.2rem]" aria-hidden="true">
        <SunIcon className="absolute inset-0 size-full text-neutral-800 opacity-100 dark:text-neutral-200 dark:opacity-0" />
        <MoonIcon className="absolute inset-0 size-full text-neutral-800 opacity-0 dark:text-neutral-200 dark:opacity-100" />
      </span>
    </Button>
  );
}
