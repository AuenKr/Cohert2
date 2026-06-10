import crypto from "crypto";

function prefixFind(inputString, nonce = 0, prefix = "0000") {
  let input = nonce;
  console.log("Started mining");
  while (true) {
    const hash = crypto.createHash("sha256");
    const res = hash.update(inputString + input.toString()).digest("hex");
    if (res.startsWith(prefix)) {
      console.log("Input : ", inputString);
      console.log("Curr Nonce : ", input);
      console.log("Hash : ", res);
      break;
    }
    if (input % 10000000 == 0) console.log(input);
    input++;
  }
}

prefixFind(`golden is king`, 0, "aaaaaaaa");
