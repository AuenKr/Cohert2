import express from 'express';
import { BACKEND_URL } from '@repo/common/config';

const app = express();
const PORT = 3004;

console.log(BACKEND_URL)
app.get('/', (req, res) => {
    res.json({
        'msg': 'healthy route check point',
        BACKEND_URL,
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`)
})