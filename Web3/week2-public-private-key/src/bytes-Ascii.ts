// ASCII => 2^8 => 8 bit together
// Total 256 unique characters


function convertBytesToAscii(bytes: Uint8Array): string {
  var res = ""
  bytes.forEach((each) => {
    res += String.fromCharCode(each)
  })
  return res
  // return new TextDecoder().decode(bytes)
}

export function convertAsciiToBytes(value: string): Uint8Array {
  const length = value.length
  let result = new Uint8Array(length)
  for (let i = 0; i < length; i++) {
    result[i] = value.charCodeAt(i)
  }
  return result
  // return new Uint8Array([...value].map((char) => char.charCodeAt(0)))
}


function main() {
  let value = new Uint8Array([65, 87, 88, 89])
  let r1 = convertBytesToAscii(value)
  console.log(r1)

  let r2 = convertAsciiToBytes(r1)
  console.log(r2)
}

// main()
