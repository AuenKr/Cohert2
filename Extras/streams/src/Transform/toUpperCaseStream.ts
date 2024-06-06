import { Transform } from 'stream';

const toUpperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const finalData = chunk.toString().toUpperCase();
        callback(null, finalData);
    }
});

export default toUpperCaseStream;