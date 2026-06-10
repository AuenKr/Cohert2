/*
Ascii
1 character = 7 bits
Every byte corresponds to a text on the computer . 
Here is a complete list - https://www.w3schools.com/charsets/ref_html_ascii.asp#:~:text=The ASCII Character Set&text=ASCII is a 7-bit,are all based on ASCII.
*/

let bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
console.log("Bytes");
console.log(bytes);

export function bytesToAscii(byteArray) {
  let res = "";
  byteArray.forEach((each) => {
    res += String.fromCharCode(each);
  });
  return res;
}

// Example usage:
console.log("bytesToAscii");
const asciiString = bytesToAscii(bytes);
console.log("Result : ", asciiString); // Output: "Hello"

export function asciiToByte(s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    res.push(charCode);
  }
  return res;
}

console.log("asciiToByte");
console.log("Result : ", asciiToByte(asciiString));

export function Uint8ArrayToAscii(Uint8Array) {
  let res = "";
  Uint8Array.forEach((each) => {
    res += String.fromCharCode(each);
  });
  return res;
}

bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"

console.log("Uint8ArrayToAscii bytes", bytes);
console.log("Result : ", Uint8ArrayToAscii(bytes));

export function asciiToUint8Array(s = "Hello") {
  return new Uint8Array([...s].map((each) => each.charCodeAt(0)));
}

console.log("asciiToUint8Array");
console.log("Result : ", asciiToByte(asciiString));
