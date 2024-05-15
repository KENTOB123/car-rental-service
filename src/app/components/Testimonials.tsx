import Image from 'next/image'
import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-20 mb-20'>
            <div className='flex flex-col items-center justify-center w-3/4 md:w-2/5 gap-4 mb-10'>
                <h4 className='font-bold text-xl'>Reviewed by People</h4>
                <h2 className='font-bold text-3xl'>Client&apos;s Testimonials</h2>
                <p>Discover the positive impact we&lsquo;ve made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they&lsquo;re eager to share their
                positive experiences with you.</p>
            </div>
            <div className='flex items-center justify-center w-11/12 md:w-3/5 gap-6 mt-16 bg-slate-200 p-10'>
                <div>
                    <a className='font-bold'>“The luxury cars I rented here exceeded my expectations. Exceptional service and smooth handling made my trip unforgettable.”</a>
                    <div className='flex items-center justify-around w-full mt-4'>
                        <div className='flex items-center gap-3'>
                        <Image 
                        src="/assets/smile1.jpg"
                        width={50}
                        height={50}
                        alt=''
                        className='rounded-full object-cover'
                        />
                        <span className='flex flex-col'>
                            <a>Rich man</a>
                            <a>Gratefull</a>
                        </span>
                        </div>
                        <FormatQuoteIcon className='text-blue-700 text-6xl hidden md:block' />
                    </div>
                </div>
                <div>
                    <a className='font-bold'>“Renting a luxury car from this site was an absolute delight. Impeccable vehicles and seamless booking process. Highly recommended!”</a>
                    <div className='flex items-center justify-around w-full mt-4'>
                        <div className='flex items-center gap-3'>                        <Image 
                        src="/assets/smile2.jpg"
                        width={50}
                        height={50}
                        alt=''
                        className='rounded-full object-cover'
                        />
                        <span className='flex flex-col'>
                            <a>Rich women</a>
                            <a>Awesome</a>
                        </span>
                        </div>
                        <FormatQuoteIcon className='text-blue-700 text-6xl hidden md:block' />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Testimonials