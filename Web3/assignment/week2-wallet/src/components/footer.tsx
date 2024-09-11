import { appData } from "@/config";

export function Footer() {
  return (
    <div className="w-full border-t-2 p-4 fixed bottom-0 text-center bg-white dark:bg-black">
      <div>
        Developed by <span className="font-bold">{appData.madeBy}</span>
      </div>
    </div>
  );
}
