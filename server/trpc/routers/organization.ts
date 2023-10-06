import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const organizationRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }))
    .query(({ input }) => { return { greeting: `hello ${input?.text ?? 'world'}` } }),

  createInviteLink: publicProcedure.input(z.object({ token: z.string(), expiryDate: z.string() })).mutation(
    async ({ ctx, input }) => {
      const existingInviteLink = await ctx.prisma.inviteLink.findFirst()

      if (!existingInviteLink || !existingInviteLink.isActive) {
        const domain = 'http:localhost:3000'
        const inviteLink = `${domain}/invite/${input.token}`

        if (existingInviteLink && !existingInviteLink.isActive) {
        // If an existing inactive invite link is found, delete it.
          await ctx.prisma.inviteLink.delete({
            where: {
              id: existingInviteLink.id
            }
          })
        }

        // Create a new invite link.
        const createdInviteLink = await ctx.prisma.inviteLink.create({
          data: {
            token: input.token,
            expiryDate: input.expiryDate,
            isActive: true
          }
        })

        return { inviteLink, createdInviteLink }
      } else {
      // An active invite link already exists, return an error or a message.
        return { error: 'An active invite link already exists.' }
      }
    }
  ),

  getInviteLink: publicProcedure.query(
    async ({ ctx }) => {
      const inviteLink = await ctx.prisma.inviteLink.findFirst()

      return inviteLink
    }
  ),

  deactivateInviteLink: publicProcedure.mutation(
    async ({ ctx }) => {
      const deactivatedLink = await ctx.prisma.inviteLink.updateMany({
        where: {
          isActive: true
        },
        data: {
          isActive: false
        }
      })
      return deactivatedLink
    }
  )
})
