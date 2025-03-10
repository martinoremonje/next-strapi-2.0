'use client'

import { cartContext } from '@/context/CartContext'
import { getStrapiURL } from '@/helpers/api-helper'
import { Book } from '@/interfaces/book'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

interface Props{
    book: Book
}



const classPrevious = "inline-flex item-center px-3 py-2 text-sm font-medium"



const PageCardStore = ({book}: Props) => {

  const {addCartProducts} = useContext(cartContext)
  const router = useRouter()
  

    const {id} = book;
    const {title, description, price, image, stock} = book;
    const { url, width, height } = image[0].formats.medium;

    const handleClickAddToCart = () =>{
      addCartProducts({id,title,price});
      router.push('/cart')
  }

  return (
    <div className='container mx-auto max-w-3xl space-y-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <Image
            className='rounded-t-lg w-full'
            src={url}
            alt={`imagen de ${title}`}
            width={width}
            height={height}
        >
        </Image>
        <h5>
          {title}
        </h5>
        <p>Precio: ${price}</p>
        <p>Stock: ${stock}</p>
        <p>
          {description}
        </p>
        <button onClick={handleClickAddToCart} className={`inline-flex item-center px-3 py-2 text-sm font-medium ${stock === 0 && "pointer-events-none opacity-50"}`}>
        {stock === 0 ? 'Sin stock' : 'Comprar'}
        </button>
    </div>
  )
}

export default PageCardStore