import Link from 'next/link'
import React from 'react'

export function Navbar() {
  return (
    <div className='justify-between flex w-full p-4 bg-gray-900 text-gray-100 text-center'>
        <div>
            <span>P4C-Academy</span>
        </div>
        <div>
            <Link href="/leaderboard">Leaderboard</Link>
        </div>
        <div>
            <div className='rounded-full h-8 w-8 bg-gray-400'></div>
        </div>
    </div>
  )
}
