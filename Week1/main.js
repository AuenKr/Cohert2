// Simple Primitive
function greet(first, last) {
    console.log(`welcome, ${first} ${last}`);
}

function count(start = 0, end = 1000) {
    let count = 0;
    for (let i = start; i <= end; i++) count += i;
    console.log(count);
}
// count();

// Callbacks
function calculateArithmetic(a, b, arithmeticOperation) {
    const value = arithmeticOperation(a, b);
    return value;
}

function sum(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    if (hh > 12) {
        session = "PM";
    }
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss + " " + session;
    return time;
}

setInterval(function () {
    console.log(currentTime());
}, 1000);

