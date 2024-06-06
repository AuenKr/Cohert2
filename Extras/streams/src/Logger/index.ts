import fs from 'fs';
import { pipeline } from 'stream';

const writeableStream = fs.createWriteStream('./src/Logger/log.txt', {
    'flags': 'a',
    'mode': 0o666
});

writeableStream.on('open', () => {
    writeableStream.write((new Date()).toString() + '\n');
})
const terminalReadStream = process.stdin;

pipeline(terminalReadStream, writeableStream, (error) => {
    if (error) return console.log("Error occured, :", error)
    console.log("New data logged")
})