import { PrismaClient } from "@prisma/client";
import { findSourceMap } from "module";

const prisma = new PrismaClient();

async function getAllData(TABLE: string = "User") {
    await prisma.$connect();
    if (TABLE === "User") {
        const res = await prisma.user.findMany({});
        console.log(res);

    } else {
        const res = await prisma.todo.findMany({});
        console.log(res);
    }
    prisma.$disconnect();
}

async function createUser(email: string, password: string, firstName: string, lastName: string) {
    await prisma.$connect();
    try {
        await prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName
            }
        })
        console.log("User created success")
    } catch (err) {
        console.log("User not created(Failed) \n", err)
    } finally {
        prisma.$disconnect();
    }
}

interface updateParamType {
    firstName: string,
    lastName: string
}
async function updateParam(email: string, { firstName, lastName }: updateParamType) {
    prisma.$connect();
    try {
        await prisma.user.update({
            where: {
                email,
            },
            data: {
                firstName,
                lastName,
            }
        })
        console.log("Update successful")
    } catch (error) {
        console.log("Fail to update")
    } finally {
        prisma.$disconnect();
    }
}

async function deleteUser(email: string) {
    await prisma.$connect();
    try {
        await prisma.user.delete({
            where: {
                email,
            }
        })
        console.log(`${email} user delete`);
    } catch (err) {
        console.log(`Fail to delete`)
    }
    finally {
        prisma.$disconnect();
    }
}

async function getUserData(email: string) {
    await prisma.$connect();
    try {
        const res = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        console.log(res);
    } catch (err) {
        console.log("Search fail");
    } finally {
        prisma.$disconnect();
    }
}
// const data = ["abc@abc.com", "123423", "abc", "cde"];
// createUser("abc21@abc.com", "123423", "abc", "cde");


// updateParam("abc@abc.com", {
//     firstName: "hemang",
//     lastName: "pathak"
// });

// deleteUser("abc232@abc.com");
// getAllData();
getUserData("abc@abc.com");