import { serverClient } from '@/app/_trpc/serverClient'

export default async function ServerAbout() {
  const greeting = await serverClient.greeting({ name: 'Clement' })

  console.log(' coucou test')

  return (
    <div>
      <p>server component: {greeting}</p>
    </div>
  )
}
