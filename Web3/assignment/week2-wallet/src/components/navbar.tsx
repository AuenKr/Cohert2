import { appData } from "@/config";
import { Box } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 text-3xl mt-3">
      <div className="flex space-x-2 items-center">
        <Box />
        <span className="font-bold">{appData.name}</span>
        <span className="rounded-full bg-primary/10 border border-primary/50 px-2 text-sm font-bold">
          v{appData.appVersion}
        </span>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
