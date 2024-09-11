import { appData } from "@/config";
import { Button } from "./ui/button";

export function Home() {
  return (
    <main className="space-y-2">
      <div className="text-3xl font-bold">
        {appData.name} supports multiple blockchains
      </div>
      <div className="text-primary/75">Choose a blockchain to get started.</div>
      <div className="space-x-2">
        <Button>Solana</Button>
        <Button>BlockChain</Button>
        <Button>Ethereum</Button>
      </div>
    </main>
  );
}
