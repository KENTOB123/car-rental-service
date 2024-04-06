import Link from 'next/link'
import React, { useState } from 'react'

const HeadMenu = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };
  return (
     <div className="py-6 px-4 flex justify-between items-center">
      <nav
        className={
          isOpen
            ? "z-40 bg-blue-100 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
            : "fixed right-[-100%] md:right-4"
        }
      >
        <ul
          className={
            isOpen
              ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
              : "block md:flex md:gap-8"
          }
        >
          <li>
            <Link onClick={handleMenuClose} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/vehicle">
              Vehicle Models
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/testimonialsPage">
              testimonialsPage
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className="z-50 space-y-2 md:hidden" onClick={handleMenuOpen}>
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
      </button>
    </div>
  )
}

export default HeadMenu