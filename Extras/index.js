const cluster = require('node:cluster');
const os = require("node:os")

function main() {
  const noCPU = os.availableParallelism()

  if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`)

    // Fork Worker
    for (let i = 0; i < noCPU; i++) {
      cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`)
    })

  } else {
    console.log(`Worker ${process.pid} started`);
    function calc() {
      let i = 0;
      while (i < 10000000000) {
        i++;
      }
    }

    let start = Date.now();
    calc();
    let end = Date.now();

    console.log("time taken to execute :", end - start, "milli sec");

    process.kill(process.pid);
  }
}

main()
