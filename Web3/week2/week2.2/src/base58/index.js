import bs58 from "bs58";

class Base58 {
  static uint8ArrayToBase58(uint8Array) {
    return bs58.encode(uint8Array);
  }
  static base58ToUint8Array(base58String) {
    return bs58.decode(base58String);
  }
}

// Example usage:
const bytes = Uint8Array.from([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const address = Base58.uint8ArrayToBase58(bytes);
console.log(address);

// Example usage:
const base58 = address; // Use the previously encoded Base58 string
const byteArrayFromBase58 = Base58.base58ToUint8Array(base58);
console.log(byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
