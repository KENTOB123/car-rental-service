import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className='w-full flex justify-center gap-10 mt-10 mb-20'>
        <div className='w-1/5 flex flex-col'>
            <div className='font-bold text-2xl'>
                <span className='font-extrabold'>CAR</span><span> Rental</span>
            </div>
            <span className='mt-3'>we offers a big rounge of vechicles for all your driving needs. We have the perfect car to meet your needs.</span>
            <span className='mt-3 font-bold'><CallIcon />000-000-0000</span>
            <span className='font-bold'><EmailIcon />000-000@gmail.com</span>
        </div>
        <div className='w-1/5 flex flex-col'>
            <h1 className='font-bold text-2xl'>COMPANY</h1>
            <div className='gap-3 flex flex-col'>
            <span className='mt-3 hover:text-blue-600 hover:font-bold cursor-pointer'>Tokyo</span>
            <span className='hover:text-blue-600 hover:font-bold cursor-pointer'>Careers</span>
            <span className='hover:text-blue-600 hover:font-bold cursor-pointer'>Blog</span>
            <span className='hover:text-blue-600 hover:font-bold cursor-pointer'>How we work</span>
            </div>
        </div>
        <div className='w-1/5 flex flex-col'>
            <h1 className='font-bold text-2xl'>WORKING HOURS</h1>
            <div className='gap-3 flex flex-col'>
            <span className='mt-3'>Mon - Fri 9:00AM-9:00PM</span>
            <span>Sat 9:00AM-10:00PM</span>
            <span>Sun Closed</span>
            </div>
        </div>
        <div className='w-1/5 flex flex-col'>
            <h1 className='font-bold text-2xl'>SUBSCRIPTION</h1>
            <span className='mt-3'>Subscribe your email adress for latest news & updates</span>
            <div className='flex flex-col items-center mt-8'>
            <span className='text-sm'>Enter Email Adress</span>
            <form className='flex flex-col items-center w-full'>
            <input type="email" placeholder='Enter your email' className='h-10 rounded-sm w-full' required />
            <button className='bg-blue-600 text-white px-8 h-10 shadow-sm rounded-lg mt-4 text-xl w-full hover:bg-blue-800'>Submit</button>
            </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer