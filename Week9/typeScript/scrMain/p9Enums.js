var enumValidKeys;
(function (enumValidKeys) {
    enumValidKeys["Up"] = "up";
    enumValidKeys["Down"] = "down";
    enumValidKeys["Left"] = "left";
    enumValidKeys["Right"] = "right";
})(enumValidKeys || (enumValidKeys = {}));
function doSomething(keypressed) {
    console.log(keypressed);
}
doSomething(enumValidKeys.Up);
doSomething(enumValidKeys.Down);
doSomething(enumValidKeys.Left);
doSomething(enumValidKeys.Right);
