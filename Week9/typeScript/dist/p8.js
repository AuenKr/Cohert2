"use strict";
function maxNum(arr) {
    let max = arr[0];
    for (let i of arr)
        if (max < i)
            max = i;
    return max;
}
maxNum([2, 43, 343, 432, 123, 4123, -134]);
