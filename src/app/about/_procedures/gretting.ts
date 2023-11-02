import { publicProcedure } from '@/server/trpc'
import * as z from 'zod'

export const greeting = publicProcedure
  .input(
    z.object({
      name: z.string(),
    })
  )
  .query(async (req) => {
    return `hello ${req.input.name}`
  })
