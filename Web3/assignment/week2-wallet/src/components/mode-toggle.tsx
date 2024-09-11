import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="flex p-2 space-x-2">
      <Sun className={isDarkMode ? "opacity-50" : ""} />
      <Switch
        checked={isDarkMode}
        onCheckedChange={(e) => {
          setTheme(e.valueOf() ? "dark" : "light");
        }}
      />
      <Moon className={isDarkMode ? "" : "opacity-50"} />
    </div>
  );
}
