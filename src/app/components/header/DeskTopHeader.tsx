import Link from 'next/link'
import BluetoothDriveIcon from '@mui/icons-material/BluetoothDrive';

const DeskTopHeader = () => {
  
  return (
    <>
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
        <div className='mt-5'>
            <nav className='flex justify-between gap-x-4'>
           <Link href="/" className='font-bold'>Home</Link>
           <Link href="/about" className='font-bold'>About</Link>
           <Link href="/vehicle" className='font-bold'>Vehicle Models</Link>
           <Link href="/testimonialsPage" className='font-bold'>Testimonials</Link>
           <Link href="/team" className='font-bold'>Our Team</Link>
           <Link href="/contact" className='font-bold'>Contact</Link>
            </nav>
        </div>
        <div>
            <nav className='flex justify-between font-medium text-xl mt-3'>
                <Link href="/login">Sign in</Link>
                <span className='px-2'></span>
                <Link href="/register" className='bg-blue-600 text-white px-5 h-8 rounded-lg'>Register</Link>
            </nav>
        </div>
    </>
  )
}

export default DeskTopHeader;