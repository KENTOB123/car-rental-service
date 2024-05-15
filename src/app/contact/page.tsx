'use client'

import Image from 'next/image'
import React, { ChangeEvent, useRef, useState } from 'react'
import CustomerCare from '../components/CustomerCare';
import { data } from '../../data/QUARTER_DATA';

type Option = {
    value: string;
};

type Place = {
    name: string;
    id: number;
};

const Contact: React.FC = () => {
    const [selectedPlace, setSelectedPlace] = useState<string>('');
    const [subjextInput, setSubjextInput] = useState<string>('');

    const name = useRef<HTMLInputElement>(null);

    const Faminame = useRef<HTMLInputElement>(null);

    const mail = useRef<HTMLInputElement>(null);

    const detail = useRef<HTMLTextAreaElement>(null);

    const handoleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name.current?.value);
        console.log(Faminame.current?.value);
        console.log(mail.current?.value);
        console.log(detail.current?.value);
    }

    const options: Option[] = [
        { value: 'About Product' },
        { value: 'About Shop' },
        { value: 'Anything else' }
    ];

    const places: Place[] = [
        { name: 'Tokyo' ,id: 0},
        { name: 'Osaka' ,id: 1},
        { name: 'New York' ,id: 2},
        { name: 'Paris' ,id: 3},
        { name: 'Italy' ,id: 4},
    ];

  const handleSelectPlace = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlace(e.target.value);
    };

  const handleSubjectPlace = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSubjextInput(e.target.value);
    };

  return (
    <div>
        <div className='flex flex-col md:flex-row items-center justify-around'>
            <div>
                <h2 className='font-bold text-3xl mb-4'>Contact Us</h2>
                <h4>お問い合わせは、受付時間内に順次対応いたします。</h4>
            </div>
            <Image src="/assets/Infiniti_QX80.avif" alt='' width={700} height={700} />
        </div>
        <div  className='flex flex-col items-center justify-around'>
            <div className='m-10 md:w-1/3'>
                <select 
                onChange={handleSelectPlace}
                value={selectedPlace}
                className='p-2 text-xl flex w-full'
                >
                <option value="" className='w-full'>select Country</option>
                    {places.map((place) => (
                        <option value={place.name} key={place.name} className='w-full'>
                            {place.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='m-10'>
            {selectedPlace === 'Tokyo' && <CustomerCare data={data} quarterId={0} />}
            {selectedPlace === 'Osaka' && <CustomerCare data={data} quarterId={1} />}
            {selectedPlace === 'New York' && <CustomerCare data={data} quarterId={2} />}
            {selectedPlace === 'Paris' && <CustomerCare data={data} quarterId={3} />}
            {selectedPlace === 'Italy' && <CustomerCare data={data} quarterId={4} />}            
            </div>
        </div>
        <form className='flex flex-col items-center' onSubmit={(e) => handoleSubmit(e)}>
            <h4 className='text-3xl font-bold mb-4 text-blue-500 mt-4'>Contact detail</h4>
            <div className='flex gap-4'>
                <span>
                    <p>Subject</p>
                    <p>※required</p>
                </span>
                <select onChange={handleSubjectPlace}>
                    <option value="">select subject</option>
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.value}
                    </option>
                    ))}
                </select>
            </div>
            <div className='flex mt-10 gap-4'>
                <span>
                    <p>Name</p>
                    <p>※required</p>
                </span>
                <span className='flex flex-col md:flex-row justify-around gap-3'>
                <input placeholder='First Name' className='h-12' ref={name} required />
                <input placeholder='Family Name' className='h-12' ref={Faminame} required />
                </span>
            </div>
            <div className='flex mt-10 gap-4'>
                <span>
                    <p>Email</p>
                    <p>※required</p>
                </span>
                <span>
                <input placeholder='sample@xxx.co.jp' className='h-12' type='mail' ref={mail} required />
                </span>
            </div>
            <div className='flex mt-10 gap-4'>
                <span>
                    <p>Detail</p>
                    <p>※required</p>
                </span>
                <span>
                <textarea placeholder='Please write detail here' className='h-40 w-64' ref={detail} required />
                </span>
            </div>
            <button
            className='mt-20 font-bold bg-slate-500 text-white p-2 px-10 rounded shadow-xl active:shadow-none'
            >
                Submmit</button>
        </form>
    </div>
  )
}

export default Contact