"use client"

import React, { useRef } from 'react'

const Login: React.FC = () => {
    const email = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const firstname = useRef<HTMLInputElement>(null);
    const lastname = useRef<HTMLInputElement>(null);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email.current?.value, pass.current?.value, firstname.current?.value, lastname.current?.value);
    }

  return (
    <div className='w-full flex justify-center'>
    <div className='flex justify-around items-center w-2/3 mt-20 mb-20'>
        <div>
            <h2 className='font-bold text-4xl mb-6 text-blue-600'>Car Rental</h2>
            <h4 className='text-xl'>Let&apos;s rental Luxualy car</h4>
        </div>
        <div className='flex flex-col justify-evenly items-center bg-white p-8 rounded w-1/2'>
        <form className='flex flex-col justify-evenly items-center gap-5 bg-white p-8 rounded w-2/3' onSubmit={(e) => handleLogin(e)}>
            <span className='font-bold text-xl'>Register Here</span>
            <input type="text" placeholder='FirstName' className='p-3 rounded border' required ref={firstname} />
            <input type="text" placeholder='FamilyName' className='p-3 rounded border' required ref={lastname} />
            <input type="email" placeholder='E-mail' className='p-3 rounded border' required ref={email} />
            <input type="password" placeholder='Password' className='p-3 rounded border' required ref={pass} />
            <input type="password" placeholder='Password Comformation' className='p-3 rounded border' required ref={pass} />
            <button className='bg-green-700 text-white px-12 text-xl rounded pt-1 pb-1'>Registar</button>
        </form>
        <div className='flex flex-col justify-evenly items-center gap-6'>
        </div>
      </div>
    </div>
</div>
  )
}

export default Login