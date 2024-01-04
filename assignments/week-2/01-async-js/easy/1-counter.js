function counter() {
    let currTime = 1;
    setInterval(() => {
        console.log("Tik tik : ", currTime);
        currTime++;
    }, 1000);
}
counter();
