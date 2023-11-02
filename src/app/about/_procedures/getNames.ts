import { publicProcedure } from '@/server/trpc'

export const getName = publicProcedure.query(async () => {
  return 'hello world'
})
