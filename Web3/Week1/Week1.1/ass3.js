import crypto from "crypto";

function prefixFind(inputString, nounce = 0, prefix = "0000") {
  let input = nounce;
  while (true) {
    const hash = crypto.createHash("sha256");
    const res = hash.update(inputString + input.toString()).digest("hex");
    if (res.startsWith(prefix)) {
      console.log("Input : ", inputString);
      console.log("Curr Nounce : ", input);
      console.log("Hash : ", res);
    }
    input++;
  }
}

prefixFind(
  `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`,
  103423,
  "000000"
);
