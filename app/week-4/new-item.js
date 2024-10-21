"use client"

import { useState } from 'react';

export default function NewItem(){
    const [quantity,setQuantity]=useState(1);

    const increment = () => {
        if (quantity <20){
            setQuantity(quantity +1);
        }
    }
                  
    const decrement = ()=>{
        if (quantity >1){
            setQuantity(quantity -1);
        }
    }

    return (
        <div className="flex justify-center items-center space-x-4 mt-10">
        <span className="text-xl font-bold">{quantity}</span>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-gray-300 text-white rounded-full px-4 py-2 disabled:bg-gray-500 focus:outline-none"
        >
          <span className="text-lg">−</span>
        </button>
  
     
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-blue-500 text-white rounded-full px-4 py-2 disabled:bg-blue-300 focus:outline-none"
        >
          <span className="text-lg">+</span>
        </button>
      </div>
    );


}