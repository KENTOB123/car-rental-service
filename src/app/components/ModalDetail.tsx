import React, { useRef } from 'react'
import { formatDate } from './FormatDate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CAR_DATA } from '@/data/CAR_DATA';
import Image from 'next/image';
import DropLocation from './DropLocation';
import PickDropLocation from './PickDropLocation';

interface Props {
  carType?: string;
  pickUp: string;
  dropOff?: string;
  upDay: Date;
  offDay: Date;
  selectedCar?: CAR_DATA;
  showReturnLocation?: boolean;
}

interface CAR_DATA  {
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

const ModalDetail = ({carType, pickUp, dropOff, upDay, offDay, selectedCar, showReturnLocation}:Props) => {

    const NewselectedCar = CAR_DATA.filter(carGroup => {
        return carGroup.some(car => car.name === carType);
    });

    const selectedCarPic = NewselectedCar.filter((carGroup) => carGroup.map(car => car.img));

    const firstName = useRef<HTMLInputElement>(null);
    const lastName = useRef<HTMLInputElement>(null);
    const phoneNumber = useRef<HTMLInputElement>(null);
    const age = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const address = useRef<HTMLInputElement>(null);
    const city = useRef<HTMLInputElement>(null);
    const zipCode = useRef<HTMLInputElement>(null);

    const valueHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(firstName.current?.value, lastName.current?.value, phoneNumber.current?.value,age.current?.value,  email.current?.value, address.current?.value,city.current?.value, zipCode.current?.value);
    };

  return (
    <div className='w-full'>
        <div className='w-full bg-blue-800 text-white p-3 font-bold text-2xl'>
            <p>COMPLETE RESERVATION</p>
        </div>
        <div className='bg-blue-300 p-4'>
            <div className='text-blue-800 font-bold text-lg'>Upon completing this reservation enquiry, you will receive:</div>
            <div className='text-grey-800 font-bold text-l pt-2'>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</div>
        </div>
        <div className='flex pt-6'>
            <div className='flex flex-col w-1/2 pl-8 gap-6'>
                <p className='font-bold text-blue-800 text-xl mb-4'>Location & Date</p>
            <div>
                <p className='font-bold'>
                    <LocationOnIcon />Pick-Up Date & Time
                </p>
                <div className='text-gray-500 pl-6'>
                    {formatDate(upDay)}
                </div>
            </div>
            <div>
                <p className='font-bold'>
                    <LocationOnIcon />Drop-Off Date & Time
                </p>
                <div className='text-gray-500 pl-6'>
                    {formatDate(offDay)}
                </div>
            </div>

            <div>
            {showReturnLocation && <PickDropLocation pickUp={pickUp} dropOff={dropOff} />}
            {!showReturnLocation && <DropLocation pickUp={pickUp} /> }
            </div>         
        </div>
            <div className='flex flex-col w-1/2'>
                <p  className='font-bold text-xl mb-4'>
                    Car - <span className='text-blue-800'>{carType}</span>
                </p>
                <div>
                    {selectedCar 
                    ? <Image src={selectedCar.img} alt="" width={700} height={700} /> 
                    :  selectedCarPic.length > 0 && <Image src={`${selectedCarPic[0][0].img}`} alt="" width={700} height={700} />
                 }
                </div>
            </div>
        </div>
        <div className='mt-20  p-6 w-full flex flex-col items-center'>
            <span className='font-bold text-blue-800 text-xl'>
                <p>PERSONAL INFORMATION</p>
            </span>
            <form className='w-3/5' onSubmit={valueHandler} >
                <div className='flex w-full'>
                <div className='w-1/2 flex flex-col'>
                  <p className='font-bold text-gray-500'>First Name<span className="text-red-500 text-lg">*</span></p>
                  <input type="text" placeholder="Enter your first name" ref={firstName} className='bg-gray-300 w-4/5 h-10 p-2' required />
                  <p className="text-xs">This field is required.</p>
               </div>
                <div className='w-1/2 flex flex-col'>
                  <p className='font-bold text-gray-500'>Last Name<span className="text-red-500 text-lg">*</span></p>
                  <div className='flex'>
                  <input type="text" placeholder="Enter your last name" ref={lastName} className='bg-gray-300 w-4/5 h-10 p-2' required />
                  </div>
                  <p className="text-xs">This field is required.</p>
               </div>
                </div>
                <div className='flex justify-around w-full'>
                    <div className='w-1/2'>
                  <p className='font-bold text-gray-500'>Phone Number<span className="text-red-500 text-lg">*</span></p>
                  <input  type="number" placeholder="Enter your phone number" ref={phoneNumber} className='bg-gray-300 w-4/5 h-10 p-2' required/>
                  <p className="text-xs">This field is required.</p>
               </div>
                <div className='w-1/2'>
                  <p className='font-bold text-gray-500'>Age<span className="text-red-500 text-lg">*</span></p>
                  <input  type="number" placeholder="Enter your age" ref={age} className='bg-gray-300 w-4/5 h-10 p-2' required />
                  <p className="text-xs">This field is required.</p>
               </div>
                </div>
                <div className='w-full'>
                  <p className='font-bold text-gray-500'>Email<span className="text-red-500 text-lg">*</span></p>
                  <input type="email" placeholder="Enter your email address" ref={email} className='bg-gray-300 h-10 p-2 w-11/12' required />
                  <p className="text-xs">This field is required.</p>
               </div>
                <div className='w-full'>
                  <p className='font-bold text-gray-500'>Address<span className="text-red-500 text-lg">*</span></p>
                  <input type="text" placeholder="Enter your street address" ref={address} className='bg-gray-300 w-11/12 h-10 p-2' required />
                  <p className="text-xs">This field is required.</p>
               </div>
               <div className='flex justify-around w-full'>
                <div className='w-1/2'>
                  <p className='font-bold text-gray-500'>City<span className="text-red-500 text-lg">*</span></p>
                  <input type="text" placeholder="Enter your city" ref={city} className='bg-gray-300 w-4/5 h-10 p-2' required />
                  <p className="text-xs">This field is required.</p>
               </div>
                <div className='w-1/2'>
                  <p className='font-bold text-gray-500'>Zip Code<span className="text-red-500 text-lg">*</span></p>
                  <input type="number" placeholder="Enter your zip code" ref={zipCode} className='bg-gray-300 w-4/5 h-10 p-2' required />
                  <p className="text-xs">This field is required.</p>
               </div>
               </div>
                
            <div className='flex justify-end mt-10 mb-8'>
              <button className='font-bold text-white bg-blue-700 p-3 text-xl hover:bg-blue-800'>Reserve Now</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default ModalDetail