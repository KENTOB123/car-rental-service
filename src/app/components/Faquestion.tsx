"use client"

import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Image from 'next/image';

const Faquestion = () => {
    const [activeQ, setActiveQ] = useState("q1");

  const toggleAnswer = (id: string) => {
        setActiveQ(activeQ === id ? '' : id );
    };

  return (

    <div className='w-full flex mb-20 pt-20 pb-20'>
        <div className='w-1/5 flex items-center relative'>
            <div className='absolute inset-0 overflow-hidden'>
            <Image 
            src="/assets/BMW_7-Series.avif"
            alt=''
            width={400}
            height={400}
            className='w-full h-full object-cover transform -translate-x-1/5'
            />
            </div>
        </div>
        <div className='flex flex-col justify-center w-3/5'>
            <div className='flex flex-col mb-20 text-center'>
                <h4 className='font-bold text-4xl mb-4'>FAQ</h4>
                <span className='font-bold text-5xl mb-10'>Frequently Asked Questions</span>
                <p>Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.</p>
            </div>
            <div className='bg-slate-200 shadow-2xl px-10 py-5'>
                <div>
                <div
                id='q1'
                  onClick={() => toggleAnswer("q1")}
                  className={`flex mb-2 hover:bg-blue-600 hover:text-white ${activeQ === 'q1' ? 'bg-blue-600 text-white shadow-2xl' : '' }`}
                >
                  <p className={`w-full font-bold p-2 text-xl `}>1. What is special about comparing rental car deals?</p>
                  <div className='flex items-center'>
                    {activeQ === 'q1' ? <IconChevronDown /> : <IconChevronUp /> }
                </div>
                </div>
                <div
                  className={`overflow-hidden transition-all ${
          activeQ === "q1" ? "max-h-screen opacity-100 transition-duration-400 ease-in" : "max-h-0 opacity-0 transition-duration-400 ease-out"
        }`}
                >
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </div>
              </div>
                <div>
                <div
                  onClick={() => toggleAnswer("q2")}
                  className={`flex mb-2 hover:bg-blue-600 hover:text-white ${activeQ === 'q2' ? 'bg-blue-600 text-white shadow-2xl' : '' }`}
                >
                  <p className={`w-full font-bold p-2 text-xl `}>2. Can I Rent a Car at 18?</p>
                  <div className='flex items-center'>
                    {activeQ === 'q2' ? <IconChevronDown /> : <IconChevronUp /> }
                </div>
                </div>
                <div
                  className={`overflow-hidden transition-all ${
          activeQ === "q2" ? "max-h-screen opacity-1000" : "max-h-0 opacity-0"
        }`}
                >
                  In some states, you can rent a car at the age of 18; however, the legal age to rent a car in most states is 25 years old. You may rent a car at some locations between the ages of 21-24 for an additional young renter surcharge. Check the policies at the car rental location you&apos;re interested in renting from for that state&apos;s renter requirements. 
                </div>
              </div>
                <div>
                <div
                  onClick={() => toggleAnswer("q3")}
                  className={`flex mb-2 hover:bg-blue-600 hover:text-white ${activeQ === 'q3' ? 'bg-blue-600 text-white shadow-2xl' : '' }`}
                >
                  <p className={`w-full font-bold p-2 text-xl `}>3. Does Enterprise Accept Gift Cards?</p>
                  <div className='flex items-center'>
                    {activeQ === 'q3' ? <IconChevronDown /> : <IconChevronUp /> }
                </div>
                </div>
                <div
                  className={`overflow-hidden transition-all ${
          activeQ === "q3" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
                >
                  Enterprise accepts pre-paid gift cards with a Visa, Mastercard® or Amex symbol as a form of payment at the end of a rental. We do not accept gift cards to secure a rental*. Payment is never required when making a reservation.
*Enterprise does not issue gift cards and will never ask you for credit card or other payment information over the phone. For more information, visit our pre-paid gift card alert page. 
                </div>
              </div>
                <div>
                <div
                  onClick={() => toggleAnswer("q4")}
                  className={`flex mb-2 hover:bg-blue-600 hover:text-white ${activeQ === 'q4' ? 'bg-blue-600 text-white shadow-2xl' : '' }`}
                >
                  <p className={`w-full font-bold p-2 text-xl `}>4. Can I Add an Additional Driver to My Rental Car?</p>
                  <div className='flex items-center'>
                    {activeQ === 'q4' ? <IconChevronDown /> : <IconChevronUp /> }
                </div>
                </div>
                <div
                  className={`overflow-hidden transition-all ${
          activeQ === "q4" ? "max-h-0screen opacity-100" : "max-h-0 opacity-1"
        }`}
                >
                  Any additional driver (excluding a spouse or domestic partner) will pay a daily fee. Renter&apos;s spouse or domestic partner who meet the same age and driver&apos;s license requirements of the renter are authorized drivers at no additional charge. Any additional authorized drivers must appear at time of rental and meet age and driver&apos;s license requirements. 

An additional charge of $15.00 per day for each additional authorized driver will be added to the cost of the rental, unless other contractual conditions apply.  In New York state, the additional authorized driver charge is $5 per day.
                </div>
              </div>
               
            </div>
        </div>
        <div className='w-1/5'></div>
    </div>
  )
}

export default Faquestion