import { Button } from "./ui/button";

export function MnemonicsGenerate() {
  return (
    <main className="space-y-2">
      <div className="text-3xl font-bold">Secret Recovery Phrase</div>
      <div className="text-primary/75">Save these words in a safe place.</div>
      <Button className="w-full">Generate Wallet</Button>
    </main>
  );
}

export function MnemonicsShow() {
  const mnemonics = [
    "prosper",
    "else",
    "now",
    "hundred",
    "forest",
    "vapor",
    "grit",
    "seven",
    "manage",
    "battle",
    "soldier",
    "barrel",
  ];
  return (
    <div className="p-4 border-2 rounded-lg">
      <div className="text-3xl font-bold mb-5 px-2">Your Secret Phrase</div>
      <div className="grid grid-cols-2">
        {mnemonics.map((each) => {
          return (
            <span className="grid-cols-1 p-3 m-2 border rounded-xl bg-foreground/5">
              {each}
            </span>
          );
        })}
      </div>
    </div>
  );
}
