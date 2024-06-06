import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import { Transform, pipeline } from 'stream';
import replaceBadWordStream from './Transform/replaceBadWordStream';
import toUpperCaseStream from './Transform/toUpperCaseStream';

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({
        msg: "server is good"
    })
})

let count = 0;

app.get('/bad/testfile', (req, res) => {
    // bad way
    // Directly loading into memory
    const fileRead = fs.readFileSync('src/TextFile/TextFile/textfile.txt', 'utf8');
    res.json({ fileRead: fileRead });
})

// req -> readableStream res-> writeableStream
app.get('/good/testfile', async (req, res) => {
    // Using stream
    console.log("stream in called ", ++count)
    const readStream = fs.createReadStream('Big file 2GB.mp4');
    // Readablestream ->pipe -> writeableStream (req)
    res.set({
        'Content-Type': 'video/mp4'
    })
    readStream.pipe(res);
})

// Copy big file txt to another file
app.get('/bad/copy', (req, res) => {
    // Copy textfile.txt(big text file) to plain.txt
    const data = fs.readFileSync('src/TextFile/textfile.txt');
    fs.writeFileSync('src/TextFile/plain.txt', data);
    res.send("File copied into plain.txt")
})

app.get('/good/copy', async (req, res) => {
    const readableStream = fs.createReadStream('src/TextFile/textfile.txt', 'utf8');
    const writeableStream = fs.createWriteStream('src/TextFile/plain.txt', 'utf8');

    readableStream.on('data', (chunk) => {
        writeableStream.write(chunk);
    })

    readableStream.on('end', () => {
        console.log("Data transfer success")
    })
    res.json({
        msg: "data copied to plain.txt file to textfile.txt"
    })
})

// create stream
// Readable and Writable class in stream
// Transform class in stream => process data buffer

// Convert src/TextFile/textfile.txt => all world first letter uppercase and replace ipsum(bad word) with *****
// Without using Transform stream
app.get('/string-process', (req, res) => {
    const readableStream = fs.createReadStream('src/TextFile/plain.txt');
    const writeableStream = fs.createWriteStream('src/TextFile/transform.txt');
    readableStream.on('data', (chunk) => {
        // start processing
        const finalData = chunk.toString().toUpperCase().replaceAll('IPSUM', "*****");
        writeableStream.write(finalData)
    })
    res.send("String process success, result save in transform.txt");
})

// With Transform stream
app.get('/transform/string-process', (req, res) => {
    const readableStream = fs.createReadStream('src/TextFile/plain.txt');
    const writeableStream = fs.createWriteStream('src/TextFile/transform.txt');

    const filterAndUpperProcessing = new Transform({
        transform(chunk, encoding, callback) {
            const finalData = chunk.toString().toUpperCase().replaceAll('IPSUM', "*****");
            // console.log("Chunk : ", chunk.toString());

            // callback => return data after processing as readableStream
            callback(null, finalData);
        }
    });

    readableStream.pipe(filterAndUpperProcessing).pipe(writeableStream);
    res.json({
        msg: "data process through transform stream"
    })
})
// Better way with transform stream
app.get('/transform2/string-process', (req, res) => {
    const readableStream = fs.createReadStream('src/TextFile/plain.txt');
    const writeableStream = fs.createWriteStream('src/TextFile/transform.txt');

    // readableStream
    //     .pipe(replaceBadWordStream).on("error", (err) => console.error)
    //     .pipe(toUpperCaseStream).on("error", (err) => console.error)
    //     .pipe(writeableStream).on("error", (err) => console.error);

    // To handle error properly we use pipeline function from stream
    pipeline(readableStream, replaceBadWordStream, toUpperCaseStream, writeableStream, (error) => {
        if (!error) return;
        console.log("Error occur :", error)
    })

    res.json({
        msg: "data process through transform stream"
    })
})

app.listen(3000, () => {
    console.log("Listenning on port 3000")
})