import React from 'react'
import LogInButtonComponent from './LogInButton'

export default function HomeComponent() {
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center space-y-6'>
        <h1>Login To Get Started</h1>
        <LogInButtonComponent />
    </div>
  )
}
