'use client';

import React, { useEffect, useState } from 'react'
import CarBox from '../components/CarBox';
import { CAR_DATA } from '../../data/CAR_DATA';

const Vehicle = () => {
    const [active, setActive] = useState("FirstCar");
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='mb-80 mt-40'>
        <div className='flex flex-col items-center mb-16 gap-4 mt-20'>
           <span className='font-bold text-xl'>Vehicle Models</span>
           <span className='font-bold text-4xl'>Our rental fleet</span>
           <span>Choose from avariety of our amazing vehicle to rent for your next adventure or business trip</span>
        </div>
        <div className={`flex items-center justify-center gap-10 ${isMobile ? 'flex-col' : ''}`}>
            <div className='flex flex-col items-center ml-10 gap-6 text-xl font-bold w-full'>
                <button 
                onClick={() => {
                    setActive('FirstCar');
                }}
                className={`px-6 py-4 w-full  ${active === 'FirstCar' ? 'bg-blue-700 text-white' : "bg-gray-400"} cursor-pointer hover:bg-blue-600 hover:text-white`}
                >
                    BMW 228i</button>
                <button 
                onClick={() => {
                    setActive('SecondCar');
                }}
                className={`px-6 py-4 w-full ${active === 'SecondCar' ? 'bg-blue-700 text-white' : 'bg-gray-400'} cursor-pointer hover:bg-blue-600 hover:text-white`}
                >
                    Nissan Maxima</button>
                <button 
                onClick={() => {
                    setActive('ThirdCar');
                }}
                className={`px-6 py-4 w-full ${active === 'ThirdCar' ? 'bg-blue-700 text-white' : 'bg-gray-400'} cursor-pointer hover:bg-blue-600 hover:text-white`}
                >
                    Audi A5</button>
                <button 
                onClick={() => {
                    setActive('ForthCar');
                }}
                className={`px-6 py-4 w-full ${active === 'ForthCar' ? 'bg-blue-700 text-white' : 'bg-gray-400'} cursor-pointer hover:bg-blue-600 hover:text-white`}
                >
                    BMW 7-Series</button>
                <button 
                onClick={() => {
                    setActive('FifthCar');
                }}
                className={`px-6 py-4 w-full ${active === 'FifthCar' ? 'bg-blue-700 text-white' : 'bg-gray-400'} cursor-pointer hover:bg-blue-600 hover:text-white`}
                >
                    Infiniti QX80</button>
                <button 
                onClick={() => {
                    setActive('SixthCar');
                }}
                className={`px-6 py-4 w-full ${active === 'SixthCar' ? 'bg-blue-700 text-white' : 'bg-gray-400'} cursor-pointer hover:bg-blue-600 hover:text-white`}
                >
                    Volkswagen Atlas</button>
            </div>
            <div className="w-full flex-none md:w-5/6">
             {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
             {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
             {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
             {active === "ForthCar" && <CarBox data={CAR_DATA} carID={3} />}
             {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
             {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
             </div>
        </div>
    </div>
  )
}

export default Vehicle;