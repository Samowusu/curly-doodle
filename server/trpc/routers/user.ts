import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const userRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }))
    .query(({ input }) => { return { greeting: `hello ${input?.text ?? 'world'}` } }),

  something: publicProcedure.input(z.object({ text: z.string() })).query(async ({ ctx, input }) => {
    const ourTest = await ctx.prisma.user.findMany()
    // eslint-disable-next-line no-console
    console.log('here', ourTest)
    return input.text
  }),

  createUser: publicProcedure.input(z.object({ name: z.string(), organization: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const newUser = await ctx.prisma.user.create({
        data: {
          name: input.name,
          organizations: {
            create: [
              {
                name: input.organization,
                createdById: input.name
              }
            ]
          }

        }
      })
      return newUser
    }),

  getUser: publicProcedure.input(z.object({ id: z.string() })).query(
    async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.id
        }
      })
      return user
    }
  )
})
