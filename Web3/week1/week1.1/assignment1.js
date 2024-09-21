import crypto from "node:crypto";

function prefixFind(prefix = "") {
  let input = 0;
  while (true) {
    let hash = crypto.createHash("sha256");
    ;
    const res = hash.update(input.toString()).digest("hex");

    if (res.startsWith(prefix)) {
      console.log("Input : ", input);
      console.log("Hash : ", res);
    }
    input++;
  }
}

prefixFind("000000");