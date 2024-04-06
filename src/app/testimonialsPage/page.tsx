import React from 'react'
import Testimonials from '../components/Testimonials'
import Image from 'next/image'

const testimonialsPage = () => {
  return (
    <div className='pb-20'>
        <div className='flex justify-center items-center m-10'>
            <div className='flex flex-col'>
                <a className='font-bold text-3xl mb-10'>Would you know our Review?</a>
                <a>You don&apos;t need to care about our review, even though you were firt experience</a>
                <a>We can completyle suport to your experience</a>
            </div>
            <Image 
            src="/assets/manycars.avif"
            width={700}
            height={760}
            alt=''
            />
        </div>
        <Testimonials />
    </div>
  )
}

export default testimonialsPage
