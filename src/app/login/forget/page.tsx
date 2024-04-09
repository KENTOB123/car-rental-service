'use client'

import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';

type Inputs = {
    firstname: string;
    familyname: string;
    email: string;
    password: string;
    confirmationPasword: string;
}

const Login: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();


    const ChangeHandler = () => {
            setShow(true);
    }

  return (
      <div className='w-full flex justify-center'>
    <div className='flex justify-around items-center w-2/3 mt-20 mb-20'>
        <div>
            <h2 className='font-bold text-4xl mb-6 text-blue-600'>Car Rental</h2>
            <h4 className='text-xl'>Let&apos;s rental Luxualy car</h4>
        </div>
        <div className='flex flex-col justify-evenly items-center bg-white p-8 rounded'>
        <form className='flex flex-col justify-evenly items-center gap-5 bg-white p-8 rounded'>
        <span className='font-bold text-xl'>Type your E-mail</span>
        <input 
            type="email" 
            placeholder='E-mail' 
            className='p-3 rounded border' 
            {...register('email', { required: true })} 
            />
            <div className='flex flex-col justify-evenly items-center gap-6'>
            <button type='button' onClick={ChangeHandler} className='bg-green-700 text-white px-12 text-xl rounded pt-1 pb-1'>Send a Mail</button>
            { show == true && <span className='text-red-700 font-bold'>Check Your E-Mail Box</span> }
            </div>
        </form>
        </div>
      </div>
    </div>    
  )
}

export default Login