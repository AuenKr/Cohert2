// Reading the contents of a file
const fs = require('fs');

function readData(){
    const filePath = resolve('./testFile.txt');
    const data = fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) throw err;
        return data;
    })
    data.then(console.log(data));
}
readData();

// for(let i=0; i<100000000; i++){    
// }

