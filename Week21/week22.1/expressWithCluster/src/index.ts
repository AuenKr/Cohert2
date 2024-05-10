import express from 'express';
import cluster from "cluster";
import os from "os";

const totalCPU = os.cpus().length;

const PORT = 3000;

if (cluster.isPrimary) {
    console.log("No of CPUs are ", totalCPU, "\nWorker is running on ", totalCPU - 2);
    console.log("Primary process id : ", process.pid)

    // Fork Workers
    for (let i = 0; i < totalCPU - 2; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker process id : ${worker.process.pid} died`);
        console.log('Lets fork another worker');
        cluster.fork();
    })
} else {
    const app = express();
    app.get('/', (req, res) => {
        res.json({
            msg: 'On health check route',
            pid: process.pid || "Null"
        })
    })

    app.get('/add/:n', (req, res) => {
        let n = parseInt(req.params.n);
        let count = 0;

        if (n > 5000000000) n = 5000000000;

        for (let i = 0; i <= n; i++) {
            count += i;
        }

        res.send(`Final count is ${count} by process id ${process.pid}`);


    })

    app.listen(PORT, () => {
        console.log('App is listning of port ', PORT, ' and on process id ', process.pid)
    })
}