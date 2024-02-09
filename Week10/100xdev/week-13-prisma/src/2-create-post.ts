
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ["info", "query"], })

async function main() {
  await prisma.post.create({
    data: {
      title: "title 324of post",
      content: "jfdskaf",
      published: true,
      author: {
        connect: {
          id: 1
        }
      }
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })