import React from 'react'
import { CAR_DATA } from '../../data/CAR_DATA';
import Image from 'next/image';
import SearchButton from './searchButton';

type CAR_DATA = {
     name: string,
      price: string,
      img: string,
      model: string,
      mark: string,
      year: string,
      doors: string,
      air: string,
      transmission: string,
      fuel: string,
}[];

const CarBox = ({data, carID}: { data: CAR_DATA[], carID: number }) => {

  return (
    <>
    {data[carID].map((car, id) => (
        <div key={id} className='flex flex-col md:flex-row items-center mr-4 gap-4'>
            <div className='w-3/5'>
                <Image 
                src={car.img}
                width={1000}
                height={760}
                alt="car_img"
                />
            </div>
            <div className='w-2/5 flex flex-col items-center'>
                <div className='mb-6 flex justify-center'>
                    <span className='bg-blue-700 text-white p-4'><span className='font-bold text-xl'>${car.price}</span> / rent per day</span>
                </div>
                <div className='flex flex-col items-center gap-2 bg-white p-5 font-bold text-sm w-72'>
                <div className='flex justify-center w-full'>
                    <span className='w-1/2 flex justify-center'>Mark</span>
                    <span>|</span>
                    <span className='w-1/2 flex justify-center'>{car.mark}</span>
                </div>
                <div className='flex justify-around w-full'>
                    <span className='w-1/2 flex justify-center'>Year</span>
                    <span>|</span>
                    <span className='w-1/2 flex justify-center'>{car.year}</span>
                </div>
                <div className='flex justify-around w-full'>
                    <span className='w-1/2 flex justify-center'>Doors</span>
                    <span>|</span>
                    <span className='w-1/2 flex justify-center'>{car.doors}</span>
                </div>
                <div className='flex justify-around w-full'>
                    <span className='w-1/2 flex justify-center'>AC</span>
                    <span>|</span>
                    <span className='w-1/2 flex justify-center'>{car.air}</span>
                </div>
                <div className='flex justify-around w-full'>
                    <span className='w-1/2 flex justify-center'>Transmission</span>
                    <span>|</span>
                    <span className='w-1/2 flex justify-center'>{car.transmission}</span>
                </div>
                <div className='flex justify-around w-full'>
                    <span className='w-1/2 flex justify-center'>Fuel</span>
                    <span>|</span>
                    <span className='w-1/2 flex justify-center'>{car.fuel}</span>
                </div>
                </div>
                <SearchButton car={car} id={id} />
            </div>
        </div>
    ))}
    </>
  )
}

export default CarBox