"use client"

import { cartContext } from '@/context/CartContext'
import { Navbar } from 'flowbite-react'
import { div, span } from 'framer-motion/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'

const navLinks = [
    {href: "/",
        text: "Home"
    },
    {href: "/blog",
        text: "Blog"
    },
    {href: "/store",
        text: "Store"
    },
    {href: "cart",
        text: "Cart"
    },
]



const Header = () => {

    const pathname = usePathname();
    const {totalQuantityProduct} = useContext(cartContext)

  return (
    <Navbar
    fluid rounded>
        <Navbar.Brand>
        <><img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Strapi</span></>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            {
                navLinks.map((navLink)=>(
                    <Navbar.Link
                    key={navLink.href}
                    href={navLink.href}
                    active={pathname === navLink.href}
                    as={Link}
                    className={`${pathname === navLink.href && "md:text-blue-500 bg-gray-950"}`}
                    >
                    <span>
                        {navLink.text}
                        {navLink.text === 'Cart' && (
                            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full ">
                                {totalQuantityProduct}
                            </div>

                        )}
                    </span>
                    </Navbar.Link>
                ))
            }
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header