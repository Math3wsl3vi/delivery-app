"use client"
import { useCartStore } from '@/lib/store/cartStore';
import Image from 'next/image'
import React from 'react'

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  return (
    <div className='py-5 h-screen w-full'>
       {cart.length === 0 ? (<div>
       <h1 className='text-center font-poppins text-2xl'>YOUR CART</h1>
        <Image src='/images/emptyCart.png' alt='cart' width={500} height={500}/>
        <p className='font-poppins text-xl text-center'>You have nothing yet! Continue Shopping</p>
       </div>) : 
       (
        <>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-2">
            <span>{item.name} - Ksh {item.price}</span>
            <div className="flex items-center space-x-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))}
        <button onClick={clearCart} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">Clear Cart</button>
      </>
       )}
    </div>
  )
}

export default CartPage