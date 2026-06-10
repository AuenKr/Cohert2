import dotenv from "dotenv";
dotenv.config();

let s = "hello";
const binary = new TextEncoder().encode(s); // 8 bit array (with constraints store upto only 255  )
const binary2 = new Uint8Array([2551025510]); // 8 bit array (with constraints store upto only 255  )

console.log(binary);
console.log(binary2);

const publicKey = process.env.PUBLIC_KEY || "Your public key";
const publicKeyBinary = new TextEncoder().encode(publicKey);
console.log(publicKeyBinary)