import * as ed from "@noble/ed25519";

async function main() {
  const privateKey = ed.utils.randomPrivateKey();
  let publicKey = await ed.getPublicKey(privateKey);

  console.log("Private Key : ", privateKey);
  console.log("Public Key : ", publicKey);

  const message = new TextEncoder().encode("Hello World");
  console.log("Message encode : ", message);

  const signature = await ed.sign(message, privateKey);
  console.log("Signature : ", signature);

  const isValid = await ed.verify(signature, message, publicKey);
  const decrypt = await ed.de
  console.log("is Valid : ", isValid);
}

main();
