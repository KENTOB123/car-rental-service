import React from 'react'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';

const Descri = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 mb-20 w-full'>
        <div className='mt-20 flex flex-col items-center'>
            <span className='font-bold text-xl'>Plan Your trip now</span>
            <span className='font-bold text-4xl'>Quick & easy car rental</span>
        </div>
        <div className='flex items-center w-4/5 gap-20 mt-10'>
            <div className='flex flex-col items-center'>
                <div className='mb-12'><DirectionsCarFilledIcon className='w-16 h-16 text-blue-500' /></div>
                <span className='font-bold text-2xl mb-4'>Select Car</span>
                <span>We offer a big range of vechles for all your driving needss,We have the perfect car to meet your needs</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='mb-12'><SupportAgentIcon className='w-16 h-16 text-blue-500' /></div>
                <span className='font-bold text-2xl mb-4'>Contact Operator</span>
                <span>We offer a big range of vechles for all your driving needss,We have the perfect car to meet your needs</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='mb-12'><EmojiTransportationIcon className='w-16 h-16 text-blue-500' /></div>
                <span className='font-bold text-2xl mb-4'>Lets Drive</span>
                <span>We offer a big range of vechles for all your driving needss,We have the perfect car to meet your needs</span>
            </div>
        </div>
    </div>
  )
}

export default Descri