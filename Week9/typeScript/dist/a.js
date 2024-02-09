"use strict";
function greet(firstName, lastName, age) {
    console.log("Hello " + firstName + " " + lastName + " of age ", age);
}
// greet("gyan", "therapy", 43);
function sum(a, b) {
    return a + b;
}
// const value = sum(1, 4);
// console.log(value)
// type inference
function isLegal(age) {
    if (age < 18)
        return false;
    return true;
}
// let x = isLegal(13);
// console.log(x);
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
function fn(a, b) {
    console.log("hi there");
    console.log(a);
    console.log(b);
    return a + b;
}
// runAfter1s(fn(1, 1));
function delayedCall(fn) {
    setTimeout(fn, 2000);
}
delayedCall(function () {
    console.log("hi there");
    return 1;
});
