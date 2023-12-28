// 1. Create a counter
function countDown(n) {
    console.log("Count Down Started");
    for (let i = 0; i <= n; i++) {
        setTimer(n - i, n);
    }
}
function setTimer(s, e) {
    setTimeout(
        (s, e) => {
            if (s == e) console.log(`Times Up ${e - s} sec`);
            else console.log(`Tik tik : ${e - s} sec`);
        },
        s * 1000,
        s,
        e
    );
}
// countDown(5);

// 2. calc time it takes bw setTimeout call and inner function actually run
function calcTimeDiff(n) {
    let start = Date.now();
    setTimeout(
        (start, timmer) => {
            let end = Date.now();
            console.log(end - start - timmer);
        },
        n * 1000,
        start,
        n * 1000
    );
}
// calcTimeDiff(2);

// 3. Show time in terminal
function time() {
    const currTime = new Date();
    const hr = currTime.getHours();
    const min = currTime.getMinutes();
    const sec = currTime.getSeconds();
    let last = "";
    if (hr >= 12) last += "PM";
    else last += "AM";

    let time = `${hr}:${min}:${sec} ${last}`;
    return time;
}
function clock() {
    setInterval(() => {
        console.log(time());
    }, 1000);
}
clock();
