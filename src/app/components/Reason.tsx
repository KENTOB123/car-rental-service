import Image from 'next/image'
import React from 'react'
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import Link from 'next/link';

const Reason = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full pb-20'>
        <Image
            src="/assets/Audi2.avif"
            width={1000}
            height={760}
            className='w-2/3'
            alt=''
        />
        <div className='flex flex-col md:flex-row justify-center items-center w-2/3 gap-20'>
            <div className='flex flex-col item-center w-11/12 md:w-1/2'>
                <span className='font-bold text-xl'>Why Choose Us</span>
                <span className='font-bold text-3xl pb-6'>Best valued deals you will ever find</span>
                <span className='pb-12'>
Experience luxury like never before with our premium car rental service. We pride ourselves on delivering unparalleled quality, reliability, and sophistication to every journey you undertake. With an extensive fleet of meticulously maintained vehicles, personalized service tailored to your needs, and seamless booking process, we redefine the art of travel.
                </span>
                <Link href="/team">
                  <button className='w-40 h-12 text-white font-bold bg-blue-700 shadow-lg active:shadow-none'>Find Details &gt;</button>
                </Link>
            </div>
            <div className='flex flex-col item-center w-3/4 md:w-1/2 gap-6'>
                <div className='flex flex-col md:flex-row gap-6 items-center'>
                  <EmojiTransportationIcon className='w-16 h-16 text-blue-700' />
                  <div className='flex flex-col gap-2'>
                    <span className='font-bold text-xl'>Cross Country Drive</span>
                    <span>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</span>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-6 items-center'>
                  <CurrencyExchangeIcon className='w-16 h-16 text-blue-700' />
                  <div className='flex flex-col gap-2'>
                    <span className='font-bold text-xl'>All Inclusive Pricing</span>
                    <span>Get everything you need in one convenient. transparent price with our all-inclusive pricing policy.</span>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-6 items-center'>
                  <MoneyOffIcon className='w-16 h-16 text-blue-700' />
                  <div className='flex flex-col gap-2'>
                    <span className='font-bold text-xl'>No Hidden Charges</span>
                    <span>Enjoy peace of mind with our no hidden charges policy. We belive in transparent and honest pricing.</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reason