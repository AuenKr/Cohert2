// Bit
var x = 0;
console.log(x);

// Byte => 8 bit => [0, 255]
var x = 202;
console.log(x);

// Bytes => array of bytes
var x = [202, 244, 1, 23];
console.log(x);

// Ideal way
var x = new Uint8Array([202, 244, 1, 23]);
console.log(x);
