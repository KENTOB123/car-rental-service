"use client"

import React, { useRef, useState } from 'react'
import VehicleModal from '../components/VehicleModal';
import MyDatePicker from '../components/DateSelect';
import Image from 'next/image';
import { CAR_DATA } from '../../data/CAR_DATA';
import { useRouter, useSearchParams } from 'next/navigation';


type Props = {
  carType?: string;
  pickUp: string;
  dropOff: string;
  upDay: Date;
  offDay: Date;
}

interface CAR_DATA {
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
};

  const ages = [
  "18","19","20","21","22",'23+',
];

const listItems = ages.map((age) => <option key={age.length}>{age}</option>)

const NewSerch = ({ car, id }: {car: CAR_DATA, id: number }) => {  
  const [showReturnLocation, setShowReturnLocation] = useState<boolean>(false);

  const ShowHideDiv = () => {
    setShowReturnLocation(prevState => !prevState);
  };


  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [selectedUp, setSelectedUp] = useState('');
  const [selectedOff, setSelectedOff] = useState('');

  const locationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectedUp(e?.target.value);
  }

  const returnLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectedOff(e?.target.value);
  }

    const handlePickupDateChange = (date: Date) => {
    setPickupDate(date);
  };

  const handleReturnDateChange = (date: Date) => {
    setReturnDate(date);
  };

  return (
    <div className='flex flex-col mt-20 items-center'>
        <div className='flex flex-col justify-end w-3/5 gap-2'>
            <h2 className='font-bold text-5xl mb-4'>Reserve a Rental Car</h2>
            {car !== undefined && 
            <div key={id}>
              <Image 
                src={car.img}
                width={1000}
                height={760}
                alt="car_img"
                /> 
            </div>
            }              
            <div className='flex justify-between'>
              <h4>Pick-up {!showReturnLocation && '& Return'} Location</h4>
              <h4 className='text-gray-600'>* Required Field</h4>
            </div>
            <form>
              <input 
              type="text" 
              onChange={locationHandler} 
              placeholder={showReturnLocation ? "Provide a Pick up Location" : "Provide a Pick up & Return Location" } 
              className='text-xl h-12 w-full hover:shadow-black shadow-sm focus:outline-none focus:shadow-outline' 
              required
              />
            </form>
            <form>
              <input type="checkbox" checked={showReturnLocation} onClick={ShowHideDiv} required />
              <span>Return to a different location</span>
            </form>
            {showReturnLocation && 
            <div className='flex justify-between'>
              <h4>Return Location</h4>
              <h4 className='text-gray-600'>* Required Field</h4>
            </div>
            }
            {showReturnLocation && <input type="text" onChange={returnLocationHandler} placeholder="Provide a Return Location" className='text-xl h-12 hover:shadow-black shadow-sm focus:outline-none focus:shadow-outline' />}
        </div>
        <div className='flex gap-4 mb-10 mt-10 w-3/5'>
          <div className='w-3/4'>
            <MyDatePicker 
                handlePickupDateChange={handlePickupDateChange}
                handleReturnDateChange={handleReturnDateChange} />
          </div>
          <div className='flex flex-col w-1/4'>
            <span>Renter Age</span>
            <select className='h-8 text-2xl'>
              {listItems}
            </select>
          </div>
        </div>
        <div className='flex w-2/3 justify-around'>
          <div className='flex flex-col'>
            <span>Corporate Account Number</span>
            <input type="text" />
          </div>
          <div className='flex flex-col w-1/4 gap-2'>
            <span>Vehicle Class</span>
            <VehicleModal 
                pickUp={selectedUp}
                dropOff={selectedOff}
                upDay={pickupDate}
                offDay={returnDate}
                showReturnLocation={showReturnLocation}
                 />
          </div>
        </div>
        <button>Browse Vehicles</button>
    </div>
  )
}

export default NewSerch