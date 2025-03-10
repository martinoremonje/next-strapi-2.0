'use client'

import React from 'react'
import {useContext} from 'react'
import { cartContext } from '@/context/CartContext'
import {Table} from "flowbite-react"
import PageHeader from '@/components/PageHeader'


const Cart = () => {

    const {cartProducts, increaseQuantity, decreaseQuantity, totalPriceProduct, totalQuantityProduct} = useContext(cartContext)
    
  return (
    <div className='space-y-8'>
        <pre>{JSON.stringify(cartProducts, null, 2)}</pre>
        <PageHeader title='Book Cart' />
        <Table>
          
          <Table.Head>
            
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>

          <Table.Body>
            {
               cartProducts.map(product =>(
                 
                 <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>

                    <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                      {product.title}
                    </Table.Cell>
                    <Table.Cell className="">
                <div className="flex justify-end items-center space-x-3">
                  <button
                    className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div>
                    <span className="bg-gray-50 w-10 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {product.quantity}
                    </span>
                  </div>
                  <button
                    className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </Table.Cell>
                 </Table.Row>
               ))
            }
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-extrabold">
            <Table.Cell className="whitespace-nowrap font-extrabold text-gray-900 dark:text-white ">
             Products
            </Table.Cell>
            <Table.Cell className="text-right">
            <span className="text-gray-900 dark:text-white">
                {totalQuantityProduct}
              </span>
              
            </Table.Cell>
          </Table.Row>
           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-extrabold">
            <Table.Cell className="whitespace-nowrap font-extrabold text-gray-900 dark:text-white ">
              Total
            </Table.Cell>
            <Table.Cell className="text-right">
              <span className="text-gray-900 dark:text-white">
                ${totalPriceProduct.toLocaleString('es-ES')}
              </span>
              
            </Table.Cell>
          </Table.Row>
          
          
          </Table.Body>
        </Table>
    </div>
        
  )
}

export default Cart