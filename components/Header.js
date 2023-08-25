import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
        <nav className='flex justify-between items-center'>
            <Link href={"/"}>Github Login</Link>
            <button className='px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-blue-900'>Login</button>
        </nav>
    </div>
  )
}
