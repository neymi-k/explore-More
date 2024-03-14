import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.create({
      data:  {
        name: "Betty",
        email: "betty@yahoo.com",
        password: "abc123",
        role: "USER"
      }
    })


    console.log(users)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })

