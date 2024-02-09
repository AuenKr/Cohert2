"use strict";
function isLegalObject(user) {
    console.log(user.age < 18);
    if (user.age < 18)
        return false;
    return true;
}
isLegalObject({
    firstName: "ji",
    lastName: "fkjdsa",
    age: 34
});
isLegalObject({
    firstName: "ji",
    lastName: "fkjdsa",
    age: 7,
    email: "fdsjka@dsfj.com"
});
