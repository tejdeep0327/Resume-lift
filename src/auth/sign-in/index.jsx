import { SignIn, SignInButton } from '@clerk/clerk-react'
import React from 'react'

function SigninPage() {
  return (
    <div className='flex justify-center my-20 items-center'>
      <SignIn/>
    </div>
  )
}

export default SigninPage