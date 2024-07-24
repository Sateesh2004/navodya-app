import React from 'react'
import { UserButton } from '@clerk/nextjs'
const page = () => {
  return (
    <div>
      You have joined us
      <UserButton/>
    </div>
  )
}

export default page
