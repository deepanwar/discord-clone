import { db } from '@/lib/db'
import { intitalProfile } from '@/lib/initial-profile'
import React from 'react'

const Setup = async () => {

  const profile = await intitalProfile()
  // const server = await db.sever
  return (
    <div>Connect to a Sever!!</div>
  )
}

export default Setup