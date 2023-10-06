import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const organizationRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }))
    .query(({ input }) => { return { greeting: `hello ${input?.text ?? 'world'}` } }),

  createInviteLink: publicProcedure.input(z.object({ token: z.string(), expiryDate: z.string() })).mutation(
    async ({ ctx, input }) => {
      const domain = 'http:localhost:3000'
      const inviteLink = `${domain}/invite/${input.token}`
      const createdInviteLink = await ctx.prisma.inviteLink.create({
        data: {
          token: input.token,
          expiryDate: input.expiryDate
        }
      })

      return { inviteLink, createdInviteLink }
    }
  ),

  getInviteLink: publicProcedure.input(z.object({ token: z.string() })).query(
    async ({ ctx, input }) => {
      const inviteLink = await ctx.prisma.inviteLink.findUnique({
        where: {
          token: input.token
        }
      })

      return inviteLink
    }
  ),

  deactivateInviteLink: publicProcedure.input(z.object({ token: z.string() })).mutation(
    async ({ ctx, input }) => {
      const deactivatedLink = await ctx.prisma.inviteLink.update({
        where: {
          token: input.token
        },
        data: {
          isActive: false
        }
      })
      return deactivatedLink
    }
  )
})
