import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const keys = Keypair.generate();

const publicKey = keys.publicKey;
const privateKey = keys.secretKey;

console.log("Public key : ", publicKey.toBytes());
console.log("Private key : ", privateKey);

const message = new TextEncoder().encode("Hello bro");

const signature = nacl.sign.detached(message, privateKey);
console.log("Signature : ", signature);

const verify = nacl.sign.detached.verify(message, signature, publicKey.toBytes());
console.log("verify : ", verify);