import { getName } from '@/app/about/_procedures/getNames'
import { router } from './trpc'
import { greeting } from '@/app/about/_procedures/gretting'

export const appRouter = router({
  getName,
  greeting,
})

export type AppRouter = typeof appRouter
