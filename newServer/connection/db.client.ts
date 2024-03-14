import { PrismaClient } from '@prisma/client'
import { log } from 'console'
const prisma = new PrismaClient({log: ["query"]})

// async function main() {
//     const users = await prisma.user.create({
//       data:  {
//         name: "Betty",
//         email: "bety@yahoo.com",
//         password: "abc123",
//         role: "USER"
//       }
//     })
//     console.log(users)
// }

async function main() {
    const user = await prisma.user.findMany({
      where: {
      name:  "Betty"
      },
  })
    console.log(user)
}



main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })

