class Base64 {
  static encode(uint8Array) {
    const base64Encoded = Buffer.from(uint8Array).toString("base64");
    return base64Encoded;
  }
}

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

console.log("Base64.encode(uint8Array)");
const result = Base64.encode(uint8Array);
console.log(result);

/* 
[72, 101, 108, 108, 111] -> 01001000 01100101 01101100 01101100 01101111 -> 40 bit 40/8 = 5
                            010010 000110 010101 101100 011011 001101 111  -> ceil(40/6) = 7
                                                                      as at last not whole 6 bit so it add = sign to complete 6 bit

Base 64 -> 6 bit encoding
Base64 encoding uses 64 different characters (A-Z, a-z, 0-9, +, /), which means each character can represent one of 64 possible values.
*/
