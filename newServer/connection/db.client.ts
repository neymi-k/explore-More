import { PrismaClient } from '@prisma/client'
import { log } from 'console'
//export const prisma = new PrismaClient({log: ["query"]})
export const prisma = new PrismaClient()

// async function main() {
//     const trip = await prisma.trips.create({
//       data:  {
//         trip_name: "San Sebastion",
//         trip_description: "Beach walk",
//         price: 140,
//         places: 12,
//         img: "url",
//         date_trip: new Date(),
//         category: "easy"
        
//       }
//     })
//     console.log(trip)
// }

async function main() {
    const user = await prisma.users.findMany({
      where: {
      name:  "Betty"
     },
  })
  //  console.log(user)
}



main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })

