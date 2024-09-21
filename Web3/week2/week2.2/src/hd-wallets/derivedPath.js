/*
 From this seed phase, using derived path 
  m / purpose' / coin_type' / account' / change / address_index.

> m: Refers to the master node, or the root of the HD wallet.
> purpose: A constant that defines the purpose of the wallet (e.g., 44' for BIP44, which is a standard for HD wallets).
> coin_type: Indicates the type of cryptocurrency (e.g., 0' for Bitcoin, 60' for Ethereum, 501' for solana).
> account: Specifies the account number (e.g., 0' for the first account).
> change: This is either 0 or 1, where 0 typically represents external addresses (receiving addresses), and 1 represents internal addresses (change addresses).
> address_index: A sequential index to generate multiple addresses under the same account and change path.


example : 
  - Bitcoin keypair
  - Solana keypair
  - Eth keypair
  - any other crypto keypair

Bagpack use derived path: 

  m/44'/0'/${x}'/0' -> blockchain
  m/44'/501'/${x}'/0' -> Solana
  m/44'/60'/${x}'/0' -> Eth
*/

import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";

// const mnemonics = generateMnemonic(256);
const mnemonics =
  "place music recipe enable record phone either jaguar taxi position tree train learn couch draft tissue owner few inspire just great nerve army party";
const seed = mnemonicToSeedSync(mnemonics);

// console.log("mnemonics : ", mnemonics);
// console.log("seed : ", seed);

// Generating 4 account (sol) from mnemonics phase
for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`;

  const derivedSeed = derivePath(path, seed.toString("hex"));
  // console.log("derivedSeed : ", derivedSeed);
  const derivedSeedKey = derivedSeed.key;
  // console.log("derivedSeedKey : ", derivedSeedKey);

  const keys = nacl.sign.keyPair.fromSeed(derivedSeedKey);
  const privateKey = keys.secretKey;

  // // Keys in hex
  // console.log("privateKey : ", keys.secretKey);
  // console.log("publicKey : ", keys.publicKey);

  console.log(
    "publicKey : ",
    Keypair.fromSecretKey(privateKey).publicKey.toString("hex") // Keypair class to generate public key from private key
  );
}
