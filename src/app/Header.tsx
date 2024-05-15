"use client"

import DeskTopHeader from './components/header/DeskTopHeader';
import MobileHeader from './components/header/MobileHeader';

const Header = () => {
  return (
    <header className='py-5 px-10 flex border-b w-full'>
      <div className='md:hidden w-full'>
        <MobileHeader />
      </div>
      <div className='hidden md:block w-full'>
        <DeskTopHeader />
      </div>
    </header>
  )
}

export default Header