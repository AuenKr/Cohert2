class Hexadecimal {
  static arrayToHexa(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
      const hexValue = str[i].charCodeAt(0).toString(16);
      // x -> 0000 0011 => hexValue = b, but we want 0b => solve by padStart
      res += hexValue.padStart(2, "0");
    }
    return res;
  }

  static hexToArray(hexString = "68656c6c6f") {
    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
  }
}

const arr = [..."hello"];

console.log("Hexadecimal.arrayToHexa(arr)");
const result = Hexadecimal.arrayToHexa(arr);
console.log(result);

console.log("Hexadecimal.hexToArray(arr)");
console.log(Hexadecimal.hexToArray(result));
