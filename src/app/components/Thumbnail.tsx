import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Image from 'next/image';
import Link from 'next/link';

const Thumbnail = () => {
  return (
    <div className='w-full flex'>
        {/* <div className='w-1/2 md:w-full flex flex-col justify-center mt-20 px-20'> */}
        <div className='w-full md:w-1/2 flex flex-col mt-20 px-20 items-center justify-center md:items-start'>
            <span className='font-semibold'>Plan your trip now</span>
            <span className='font-extrabold text-3xl'>Save <span className='text-blue-700'>big</span> with our car rental</span>
            <span className='mt-5'>Rent the car of your dreams. Unbeatable prices, unlimited miles.</span>
            <span>flexible pick-up options and much more.</span>
            <div className='flex mt-8 gap-10'>
              <Link href="/serch">
                <button className='bg-blue-600 text-white w-40 px-8 h-14 rounded mt-4 text-l focus:outline-none focus:shadow-none shadow-xl'>Book Ride  <TaskAltIcon /></button>
              </Link>
                <button className='px-10 bg-black text-white w-40 h-14 rounded mt-4 text-l'>Learn More</button>
            </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Image 
            src="/assets/luxurycar1.jpg"
            width={1200}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
        </div>
    </div>
  )
}

export default Thumbnail