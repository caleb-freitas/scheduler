import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getAllProtected: protectedProcedure.query(async ({ ctx }) => {
    const questions = await ctx.prisma.question.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return questions;
  }),
});
