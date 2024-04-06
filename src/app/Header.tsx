"use client"

import React, { useEffect, useState } from 'react'
import DeskTopHeader from './components/header/DeskTopHeader';
import MobileHeader from './components/header/MobileHeader';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='py-5 px-10 flex border-b justify-between'>
       {isMobile ? <MobileHeader /> : <DeskTopHeader />}
    </header>
  )
}

export default Header