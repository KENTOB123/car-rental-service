"use client"

import RegsiterButton from '../components/RegisterButton';

const Login: React.FC = () => {
  return (
    <div className='w-full flex justify-center'>
    <div className='flex justify-around items-center w-2/3 mt-20 mb-20'>
        <div>
            <h2 className='font-bold text-4xl mb-6 text-blue-600'>Car Rental</h2>
            <h4 className='text-xl'>Let&apos;s rental Luxualy car</h4>
        </div>
        <div className='flex flex-col justify-evenly items-center bg-white p-8 rounded w-1/2'>
         <RegsiterButton />
        <div className='flex flex-col justify-evenly items-center gap-6'>
        </div>
      </div>
    </div>
</div>
  )
}

export default Login