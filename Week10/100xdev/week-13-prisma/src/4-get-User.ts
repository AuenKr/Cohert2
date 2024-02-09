import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] })

async function main() {
    const users = await prisma.user.findMany({
        where: {
            email: "abc@gmail.com"
        },
        include: {
            posts: true,
        }
    });
    return users;
}

main().then((data) => {
    console.log("Done")
    console.log(data);
    prisma.$disconnect;
}).catch((err) => {
    console.log("Failed")
    console.log(err);
    prisma.$disconnect;
})