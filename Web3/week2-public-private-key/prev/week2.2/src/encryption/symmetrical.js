import crypto from "crypto";

const algorithm = "aes-192-cbc"; // generate 192 bits
const password = "Password used to generate key";
// Generate a random encryption key
// 32 bytes = 256 bits
const key = crypto.randomBytes(32);
console.log("Key : ", key);
// Initialization vector (IV)
const iv = crypto.randomBytes(16);

// Function to encrypt text
function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypt = cipher.update(text, "utf-8", "hex");
  encrypt += cipher.final("hex");
  return encrypt;
}

// Function to decrypt text
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypt, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}

// Example usage
const textToEncrypt = "Hello, World!";
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log("Original Text:", textToEncrypt);
console.log("Encrypted Text:", encryptedText);
console.log("Decrypted Text:", decryptedText);
