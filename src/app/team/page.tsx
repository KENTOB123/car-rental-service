import { STAFFs } from '@/data/STAFF'
import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row items-center justify-around md:w-3/4'>
          <div className='md:w-1/2 flex flex-col justify-center ml-10'>
            <span className='font-bold text-4xl'>Our Team</span>
            <span className='font-bold'>Home / Our Team</span>
          </div>
          <div className='md:w-1/2'>
            <Image src='/assets/Audi_A5.avif' alt='' width={700} height={700} />
          </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='flex flex-wrap gap-2 justify-center  w-5/6 p-10'>
            {STAFFs.map((STAFF, index) => (
                <div key={index} className='shadow-2xl bg-slate-100 p-2 flex flex-col items-center'>
                    <div>
                      <Image src={STAFF.img} alt='' height={600} width={350}  className='aspect-square object-cover' />
                    </div>
                    <div className='flex flex-col items-center p-4 bg-slate-100'>
                        <span className='font-bold'>{STAFF.name}</span>
                        <span>{STAFF.role}</span>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Team