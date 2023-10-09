import { ToadScheduler, SimpleIntervalJob, AsyncTask } from 'toad-scheduler'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const schedular = new ToadScheduler()

const task = new AsyncTask('expire invite link', () => {
  return prisma.inviteLink.findFirst().then((inviteLink) => {
    const now = new Date()
    if (inviteLink) {
      if (inviteLink?.expiryDate <= now) {
        prisma.inviteLink.update({
          where: {
            id: inviteLink?.id
          },
          data: {
            isActive: false
          }
        })
      }
    }
  }
  ).catch(err => console.error(err))
})

const job = new SimpleIntervalJob({ hours: 1 }, task)

schedular.addSimpleIntervalJob(job)

// when stopping the app
schedular.stop()
