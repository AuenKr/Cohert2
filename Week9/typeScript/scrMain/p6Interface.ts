interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string,
}


function isLegalObject(user: User): boolean {
    console.log(user.age < 18);
    if (user.age < 18) return false;
    return true;
}

isLegalObject({
    firstName: "ji",
    lastName: "fkjdsa",
    age: 34
})

isLegalObject({
    firstName: "ji",
    lastName: "fkjdsa",
    age: 7,
    email: "fdsjka@dsfj.com"
})
