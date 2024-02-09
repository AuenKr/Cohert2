function maxNum(arr: number[]): number {
    let max = arr[0];
    for (let i of arr) if (max < i) max = i;
    return max;
}
const res: number = maxNum([2, 43, 343, 432, 123, 4123, -134]);
console.log(res);

type legalUser = {
    name: string,
    age: number,
    email?: string,
}
function legalUsers(users: legalUser[]): legalUser[] {
    const res = users.filter((user) => {
        if (user.age < 18) return false;
        return true
    })
    return res;
}
