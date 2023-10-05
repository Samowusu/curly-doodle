import { router } from '../trpc'
import { organizationRouter } from './organization'
import { userRouter } from './user'

export const appRouter = router({
  organization: organizationRouter,
  user: userRouter
})
// export type definition of API
export type AppRouter = typeof appRouter
