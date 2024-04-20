import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import multer from 'multer';


dotenv.config();

const app = express();
const upload = multer({ dest: path.join(__dirname, "./uploads/") })

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res) => {
    return res.json({
        msg: "On heath check point"
    })
})

app.get('/file', (req, res) => {
    return res.render("homepage")
})

app.post('/upload', upload.single('testImage'), (req, res) => {
    console.log("upload is called")
    console.log(req.body);
    console.log(req.file);
    return res.json({
        msg: "On upload route"
    })
})

app.listen(process.env.PORT, () => {
    console.log("listen on port : ", process.env.PORT)
})