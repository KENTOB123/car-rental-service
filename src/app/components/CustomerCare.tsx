'use client'

import React from 'react';
import {data}  from "../../data/QUARTER_DATA";

type QUARTER_DATA = {
     name: string,
      tell: string,
      mail: string,
      desc: string
    }[];

type Place = {
    name: string,
};

const CustomerCare = ({data, quarterId }:{data: QUARTER_DATA[], quarterId: number}) => {

    const places: Place[] = [
        { name: 'About Product' },
        { name: 'About Shop' },
        { name: 'Anything else' }
    ];
    console.log(data[quarterId]);

  return (
    <div className='flex flex-col items-center'>
        <div>
            <div>
            <p  className='text-3xl font-bold mb-4 text-blue-500'>CUSTOMER CARE</p>
             </div>
        </div>
        <div>
            <p>TELEPHONE NUMBER</p>
              <div>
                {data[quarterId].map((quarter, index) => (
                <option key={index}  className='font-semibold text-xl'>
                        {quarter.tell}
                </option>
                ))}
              </div>
        </div>
        <div className='mt-4'>
            <p >EMAIL</p>
            <div>
                 {data[quarterId].map((quarter, index) => (
                <option key={index}  className='font-semibold text-xl' >
                        {quarter.mail}
                </option>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CustomerCare