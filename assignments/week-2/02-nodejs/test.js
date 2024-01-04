const fs = require("fs");
const path = "./files/";

function readDirectory(path) {
    try {
        fs.readdir(path, (err, data) => {
            if (err) throw new Error(err);
            else {
                const files = data;
                const res = [];
                files.forEach((e)=>{
                    res.push(e);
                })
                return res;
            }
        });
    } catch (err) {
        console.error(err);
    }
}
readDirectory(path);
