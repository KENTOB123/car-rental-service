import Link from 'next/link'
import React from 'react'
import BluetoothDriveIcon from '@mui/icons-material/BluetoothDrive';
import HeadMenu from './HeadMenu';

const MobileHeader = () => {
  return (
    <div className='flex justify-between w-full'>
        <div>
            <h1>
             <Link href="/" className='flex gap-4'>
                <BluetoothDriveIcon className='w-12 h-12 text-blue-700' />
                <div className='flex flex-col'>
                <span className='text-3xl font-extrabold'>CAR</span>
                <span className='text-xl'>Rental</span>
                </div>
            </Link>
            </h1>
        </div>
        <div>
            <nav className='flex justify-between font-medium text-xl mt-3'>
                <HeadMenu />
            </nav>
        </div>
    </div>
  )
}

export default MobileHeader