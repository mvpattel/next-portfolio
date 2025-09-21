"use client";

import { Button } from "@carbon/react";
import { Sun, Moon } from "@carbon/icons-react";
import { useUiTheme } from "@/src/app/components/ThemeContext/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useUiTheme();
    const isDark = theme === "dark";

    return (
        <Button
            kind="ghost"
            size="sm"
            onClick={toggleTheme}
            renderIcon={isDark ? Sun : Moon}
            iconDescription={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
            {isDark ? "Light" : "Dark"}
        </Button>
    );
}
