"use client"

import Link from 'next/link'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Header() {
    const {data:session, status} = useSession();
    if(status === "authenticated") {
        return (
            <div className='flex justify-between items-center'>
                <Image src={session?.user?.image} width={40} height={40} className='rounded-full' />
                <button onClick={() => signOut()} className='px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-blue-900'>Sign Out</button>
            </div>
        )
    }
  return (
    <div>
        <nav className='flex justify-between items-center'>
            <Link href={"/"}>Github Login</Link>
            <button onClick={() => signIn('github')} className='px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-blue-900'>Login</button>
        </nav>
    </div>
  )
}
