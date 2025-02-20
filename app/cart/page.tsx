import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='py-5 h-screen w-full'>
        <h1 className='text-center font-poppins text-2xl'>YOUR CART</h1>
        <Image src='/images/emptyCart.png' alt='cart' width={500} height={500}/>
        <p className='font-poppins text-xl text-center'>You have nothing yet! Continue Shopping</p>
    </div>
  )
}

export default CartPage