"use client";

import React from "react";
import LogInButtonComponent from "./LogInButton";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function HomeComponent() {
  const { data: session, status } = useSession();

  if(status === "authenticated") {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-6">
            <Image src={session?.user?.image} width={170} height={170} className="rounded-full" />
            <h1 className="font-bold text-4xl">Welcome: {session?.user?.name} </h1>
            <button onClick={() => signOut()} className='px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-blue-900'>Sign Out</button>
        </div>
    )
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-6">
      <h1>Login To Get Started</h1>
      <LogInButtonComponent />
    </div>
  );
}
