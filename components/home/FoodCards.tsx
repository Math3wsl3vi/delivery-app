import React from 'react'
import { FoodItems } from './../../lib/data'
import { Button } from '../ui/button'

const FoodCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 mb-20">
      {FoodItems.map(({ name, price }, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md items-center flex flex-col">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-500">Price: KES {price}</p>
          <Button className='bg-green-500 mt-5'>Add to cart</Button>
        </div>
      ))}
    </div>
  )
}

export default FoodCards
