import { PrismaClient } from '@prisma/client'
import { inferAsyncReturnType } from '@trpc/server'
/** * Creates context for an incoming request * @link https://trpc.io/docs/context */

let prisma: PrismaClient | undefined

export function createContext () {
  if (!prisma) {
    prisma = new PrismaClient()
  }

  return {
    prisma
    // Other context properties can be added here
  }
}
export type Context = inferAsyncReturnType<typeof createContext>;
