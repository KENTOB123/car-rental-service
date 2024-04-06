import Image from 'next/image'
import React from 'react'

const about = () => {
  return (
    <div className='flex flex-col mb-20 pb-20'>
     <div className='w-full flex justify-center'>
        <div className='flex items-center justify-center w-4/5'>
            <div className='w-1/2'>
                <h4 className="font-bold text-5xl mb-6">About <span className='text-blue-600'>Us</span></h4>
                <p>Founded in 1994,  We are one of the most popular independently owned car rental companies in California with locations in Beverly Hills, Downtown Los Angeles, LAX, and San Francisco. </p>
            </div>
            <Image 
            src="/assets/aboutus.avif"
            alt=''
            width={700}
            height={500} />
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center gap-6'>
            <div className='flex items-center justify-around w-4/5'>
                <Image
                src="/assets/aboutus2.avif"
                alt=''
                width={500}
                height={500}
                />
                <div className='flex flex-col justify-end w-1/2 bg-white p-3'>
                    <h4 className='font-bold text-5xl mb-4'>History</h4>
                    <p className='pr-3'>Our company was founded with a vision to redefine luxury travel. Established in 1995, we started as a small venture with a big dream. Over the years, we&apos;ve grown into a reputable name in the luxury car rental industry, offering unparalleled service and a fleet of premium vehicles.</p>
                </div>
            </div>
            <div className='flex items-center justify-around w-4/5'>
                <div className='flex flex-col justify-end w-1/2 bg-white p-3'>
                    <h4 className='font-bold text-5xl mb-4'>Policy</h4>
                    <p>At our company, integrity and customer satisfaction are at the core of everything we do. We adhere to strict ethical standards and transparency in all our dealings. Our policy revolves around providing exceptional service, maintaining honesty in pricing, and ensuring the utmost satisfaction of our clients. We believe in building long-term relationships based on trust and reliability.</p>
                </div>
                <Image
                src="/assets/aboutus3.avif"
                alt=''
                width={500}
                height={500}
                />
            </div>
            <div className='flex items-center justify-around w-4/5'>
                <Image
                src="/assets/aboutus4.avif"
                alt=''
                width={500}
                height={500}
                />
                <div className='flex flex-col justify-end w-1/2 bg-white p-3'>
                    <h4 className='font-bold text-5xl mb-4'>Concept</h4>
                    <p className='pr-3'>Our concept is to provide a luxurious and comfortable travel experience. Through the special experience of riding in luxury cars, we offer the best service and luxurious environment. Our goal is to provide customers with a special day and support their memorable journeys.</p>
                </div>
            </div>
            <div className='flex items-center justify-around w-4/5'>
                <div className='flex flex-col justify-end w-1/2 bg-white p-3'>
                    <h4 className='font-bold text-5xl mb-4'>Security</h4>
                    <p>We prioritize the safety and privacy of our customers. We adopt strict security protocols to protect our customers&apos; personal information and valuables. Additionally, we use the latest technology for vehicle maintenance and inspections to provide safe vehicles. We strive to ensure that customers can enjoy a comfortable journey with peace of mind.</p>
                </div>
                <Image
                src="/assets/aboutus5.avif"
                alt=''
                width={500}
                height={500}
                />
            </div>
        </div>
    </div>
    </div>
  )
}

export default about