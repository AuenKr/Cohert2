// ## Counter without setInterval
function counterUsingSetTimeout(currTime=1){
    console.log(`Tik tik : ${currTime}`);
    currTime++;
    setTimeout(counterUsingSetTimeout, 1000, currTime);
}

counterUsingSetTimeout();