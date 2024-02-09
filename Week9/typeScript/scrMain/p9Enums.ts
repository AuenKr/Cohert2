type validkeys = "up" | "down" | "left" | "right";

enum enumValidKeys {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

function doSomething(keypressed: enumValidKeys): void {
    console.log(keypressed);
}

doSomething(enumValidKeys.Up);
doSomething(enumValidKeys.Down);
doSomething(enumValidKeys.Left);
doSomething(enumValidKeys.Right);