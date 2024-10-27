import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function Balance() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number | null>();
  useEffect(() => {
    async function getAccountBalance() {
      if (!wallet.publicKey) throw new Error("Please connect the wallet first");
      const response = await connection.getAccountInfo(wallet.publicKey);
      if (!response) return;
      setBalance(response.lamports / LAMPORTS_PER_SOL);
    }
    getAccountBalance();
  }, [connection, wallet.publicKey]);

  return <div>Balance : {balance}</div>;
}
