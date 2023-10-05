import { z } from 'zod'
import { publicProcedure, router, protectedProcedure } from '../trpc'

export const organizationRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }))
    .query(({ input }) => { return { greeting: `hello ${input?.text ?? 'world'}` } }),

  private: protectedProcedure
    .input(z.object({ text: z.string().nullish() }))
    .query(({ input }) => { return { response: `it does ${input?.text ?? 'work'}` } })

})
