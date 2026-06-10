// Base64 => 2^6 => 6 bit together
// Totol 64 unique characters
import { convertAsciiToBytes } from "./bytes-Ascii"

function bytestobase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64")
}

function base64tobytes(hex: string): Uint8Array {
  return new Uint8Array()
}

function main3() {
  let res = "auenkr.com"
  let hex = convertAsciiToBytes(res)

  const r2 = bytestobase64(hex)
  console.log(r2)
  const r1 = base64tobytes(r2)
  console.log(r1)
}

main3()
