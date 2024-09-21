import * as bip39 from "bip39";

const mnemonics = bip39.generateMnemonic(256);
console.log("mnemonics", mnemonics);

const seed = bip39.mnemonicToSeedSync(mnemonics);
console.log("seed : ", seed);