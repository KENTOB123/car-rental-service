'use client'

import Link from 'next/link';
import React, { useRef } from 'react'
import LoginButton from '../components/LoginButton';
import { SessionProvider } from 'next-auth/react';

const Login: React.FC = () => {

  return (
    <SessionProvider>
      <div className='w-full flex justify-center'>
    <div className='flex justify-around items-center w-2/3 mt-20 mb-20'>
        <div>
            <h2 className='font-bold text-4xl mb-6 text-blue-600'>Car Rental</h2>
            <h4 className='text-xl'>Let&apos;s rental Luxualy car</h4>
        </div>
        <div className='flex flex-col justify-evenly items-center bg-white p-8 rounded'>
        <div className='flex flex-col justify-evenly items-center bg-white p-8 rounded w-1/2'>
        <LoginButton />
        </div>
        <div className='flex flex-col justify-evenly items-center gap-6'>
          <Link href="/login/forget">
            <button className='text-blue-700'>Who forget password</button>
          </Link>
            <Link href="/register">
            <button className='bg-green-700 text-white px-12 text-xl rounded pt-1 pb-1'>Registar</button>
            </Link>
        </div>
      </div>
    </div>
</div>
    </SessionProvider>
    
  )
}

export default Login