"use client"

import React, { useState } from 'react'
import VehicleModal from './VehicleModal';
import MyDatePicker from './DateSelect';
import { CAR_DATA } from '@/data/CAR_DATA';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Bookcar = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedUp, setSelectedUp] = useState("");
  const [selectedOff, setSelectedOff] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showReturnLocation, setShowReturnLocation] = useState<boolean>(false);

  const carData = CAR_DATA;
  const carNames = carData.flatMap((carGroup) => carGroup.map(car => car.name));

  const pickupPoints = ["Tokyo", "Osaka", "Sapporo", "Yokohama"];
  const dropofPoints = ["Tokyo", "Osaka", "Sapporo", "Yokohama"];

    const carTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setSelectedCar(e?.target.value);  
    }
    const pickUpHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setSelectedUp(e?.target.value);  
    }
    const dropOffHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setSelectedOff(e?.target.value);  
     setShowReturnLocation(true);
    }

    const handlePickupDateChange = (date: Date) => {
    setPickupDate(date);
  };

  const handleReturnDateChange = (date: Date) => {
    setReturnDate(date);
  };

  return (
    <div className='w-full flex justify-center mt-12'>
     <div className='flex flex-col justify-center w-4/5 '>
        <span className='text-xl font-bold mb-5'>Book a car</span>
        <div className='flex flex-wrap justify-center px-12 gap-10 pt-8 pb-8 w-full'>
            <div className='w-2/7'>
                <div className='mb-2'>
                  <DirectionsCarIcon /><span className='font-bold'>Car Type</span>
                </div>
                <select className='flex h-12 text-lg p-2 rounded-sm' onChange={carTypeHandler}>
                <option className=''>Select Your Car Type</option>
                    {carNames.map((carType) => {
          return <option key={carType}>{carType}</option>;
        })}
                </select>
            </div>
            <div>
              <div className='mb-2'>
                <FmdGoodIcon /><span className='font-bold'>Pick-up</span>
              </div>
                <select className='flex h-12 text-lg p-2 rounded-sm' onChange={pickUpHandler}>
                <option>Select Pick-up Point</option>
                    {pickupPoints.map((pickupPoint) => {
          return <option key={pickupPoint}>{pickupPoint}</option>;
        })}
                </select>
            </div>
            <div>
              <div className='mb-2'>
                <FmdGoodIcon /><span className='font-bold'>Drop-off</span>
              </div>
                <select className='flex h-12 text-lg p-2 rounded-sm' onChange={dropOffHandler}>
                <option>Select Drop-off Point</option>
                    {dropofPoints.map((dropofPoint) => {
          return <option key={dropofPoint}>{dropofPoint}</option>;
        })}
                </select>
            </div>
            <div>
              <MyDatePicker
                pickupDate={pickupDate} 
                returnDate={returnDate}
                handlePickupDateChange={handlePickupDateChange}
                handleReturnDateChange={handleReturnDateChange}
              />
            </div>
        </div>
        <div className='flex justify-end mt-10'>
            <VehicleModal 
            carType={selectedCar} 
            pickUp={selectedUp} 
            dropOff={selectedOff} 
            upDay={pickupDate} 
            offDay={returnDate} 
            showReturnLocation={showReturnLocation}
            />
        </div>
      </div>
    </div>

  )
}

export default Bookcar