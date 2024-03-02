import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserSchema {
    username: string,
    email: string,
    password: string
    firstName?: string
    lastName?: string
}
async function insertUser(User: UserSchema) {
    try {
        await prisma.$connect()
        const result = await prisma.user.create({
            data: {
                username: User.username,
                email: User.email,
                password: User.password,
                firstName: User.firstName,
                lastName: User.lastName
            }
        })
        console.log("User added succesful\n", result)
    } catch (err) {
        console.log("Fail to add Use    r\n", err)
    } finally {
        await prisma.$disconnect()
    }
}

type UserUpdateProps = Partial<Pick<UserSchema, 'password' | 'firstName' | 'lastName'>>
async function updateUser(username: string, UserProps: UserUpdateProps) {
    try {
        await prisma.$connect()
        const result = await prisma.user.update({
            where: {
                username,
            },
            data: UserProps,
        })
        console.log("Updated user");
    } catch (err) {
        console.log("Fail ro update user\n", err);
    } finally {
        await prisma.$disconnect();
    }
}

async function getUser(username: string) {
    try {
        await prisma.$connect();
        const result = await prisma.user.findFirst({
            where: {
                username
            }
        })
        console.log("User data : ", result)
    } catch (err) {
        console.log("Fail to fetch data\n", err)
    } finally {
        await prisma.$disconnect();
    }
}

async function deleteUser(username: string) {
    try {
        await prisma.$connect();
        const result = await prisma.user.delete({
            where: {
                username
            }
        })
        console.log("User deleted succesful\n", result)
    } catch (err) {
        console.log("Fail to delete the user\n", err)
    } finally {
        await prisma.$disconnect();
    }
}

const data: UserSchema = {
    username: "abc",
    password: "test",
    email: "abc",
    firstName: "firstNameTest",
    lastName: "lastNameTest"
}

async function main() {
    await insertUser(data);
    await getUser("abc");
    await updateUser("abc", { firstName: "abc", lastName: "def" });
    await getUser("abc");
    // await deleteUser("abc");
    await getUser('abc');    
}

main();