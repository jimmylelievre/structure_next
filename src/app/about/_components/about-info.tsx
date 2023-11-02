'use client'

import { trpc } from '@/app/_trpc/client'

export default function AboutInfos() {
  const data = trpc.getName.useQuery()
  const greetingData = trpc.greeting.useQuery({ name: 'Yannick' })

  if (greetingData.isLoading) {
    return <p>chargement...</p>
  }

  return (
    <div>
      <h1>hello about infos {data.data}</h1>
      <p>{greetingData.data}</p>
    </div>
  )
}
