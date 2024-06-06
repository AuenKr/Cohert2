import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function clearDB() {
    await prisma.$transaction([
        prisma.request.deleteMany(),
    ])
}