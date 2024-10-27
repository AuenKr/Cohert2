import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function AirDrop() {
  const [input, setInput] = useState<number>(0);
  const wallet = useWallet();
  const { connection } = useConnection();
  const [result, setResult] = useState<string>("");
  return (
    <>
      <div>
        <label htmlFor="airdrop-amount">Amount to Airdrop</label>
        <input
          value={input}
          id="airdrop-amount"
          type="number"
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
      </div>
      <button
        onClick={async () => {
          if (!wallet.publicKey) {
            throw new Error("Please connect the wallet first");
          }
          if (!input) throw new Error("Please select a number");
          
          console.log("Wallet public key : ", wallet.publicKey.toString());

          const lamports = input * LAMPORTS_PER_SOL;
          const response = await connection.requestAirdrop(
            wallet.publicKey,
            lamports
          );

          console.log("Airdrop received of lamports : ", lamports);

          setResult(JSON.stringify({ result: response }));
        }}
      >
        Devnet
      </button>
      <div>{result}</div>
    </>
  );
}
