import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className='w-full flex flex-row items-center justify-between px-5 py-4 border-b-2 shadow-sm'>
      <div> <Image src='/images/logo.png' alt='logo' width={40} height={40}/></div>
      <h1>Food Deliery App</h1>
      <Button className='bg-green-500'>Order Now</Button>
    </div>
  )
}

export default Navbar