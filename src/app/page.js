'use client'
import { useState } from 'react'

import { randCrumbo } from '@/utils/helpers'
export default function Home() {
  const [currCrumbo, setCurrCrumbo] = useState('')

  const handleClick = () => {
    const newCrumbo = randCrumbo()
    setCurrCrumbo(newCrumbo)
  }
  return (
    <main>
      <div className='flex flex-col items-center mt-10'>
        
        <button className='mb-4 rounded-md bg-indigo-500 px-2.5 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400' onClick={handleClick}>Gimme a sweet sweet Crumbo!</button>
        <h1 className='text-3xl'>{currCrumbo}</h1>

      </div>
    </main>
  )
}
