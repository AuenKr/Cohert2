import { Transform } from 'stream';

const replaceBadWordStream = new Transform({
    transform(chunk, encoding, callback) {
        const finalData = chunk.toString().replaceAll(/ipsum/gi, "*****");
        callback(null, finalData);
    }
});

export default replaceBadWordStream;