// base58 => 2^6 - 6  
// Total 58 unique characters, from base 64 we remove unreadble/confusing characters

function bytestobase58(bytes: Uint8Array): string {
  return ""
}

function base58tobytes(hex: string): Uint8Array {
  return new Uint8Array()
}

function main4() {
  var hex = "0x1234567890abcdef"

  const r1 = base58tobytes(hex)
  console.log(r1)
  const r2 = bytestobase58(r1)
  console.log(r2)
}

main4()
