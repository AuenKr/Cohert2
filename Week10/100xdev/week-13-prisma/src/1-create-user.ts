import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const user = await prisma.user.create({
        data: {
            email: "abc2@gmail.com",
            name: "abc2"
        },
    })
}

main()
    .then(async () => {
        console.log("Created successfully");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log("Failed")
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })