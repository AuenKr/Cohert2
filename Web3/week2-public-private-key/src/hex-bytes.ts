// Hex =>16 => 2^4 => 4 bit together
// 1, 2, 3, ... 9, A, B, C, D, E, F

import { convertAsciiToBytes } from "./bytes-Ascii"

function bytestohex(bytes: Uint8Array): string {
  let res = ""
  for (let i = 0; i < bytes.length; i++) {
    res += bytes[i]?.toString(16).padStart(2, "0")
  }
  return res
}

function hextobytes(hex: string): Uint8Array {
  let length = hex.length
  let res = new Uint8Array(length / 2)
  for (let i = 0; i < length; i += 2) {
    res[i] = hex[i]?.codePointAt(0)! + hex[i + 1]?.codePointAt(0)!
  }
  return res
}

function main2() {
  var value = "hello"

  var binary = convertAsciiToBytes(value)
  console.log(binary)

  const r1 = bytestohex(binary)
  console.log(r1)

  const r2 = hextobytes(r1)
  console.log(r2)
}

main2()
