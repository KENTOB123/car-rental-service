import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


type Props = {
  pickupDate?: Date;
  returnDate?: Date;
  handlePickupDateChange: (date: Date) => void;
  handleReturnDateChange: (date: Date) => void;
}

const MyDatePicker = ({ pickupDate, returnDate, handlePickupDateChange, handleReturnDateChange }: Props) => {
  const [startDate, setStartDate] = useState(pickupDate);
  const [endDate, setEndDate] = useState(returnDate);

  const handlePickupDateChangeInternal = (date: Date) => {
    setStartDate(date);
    handlePickupDateChange(date);
  };

  const handleReturnDateChangeInternal = (date: Date) => {
    setEndDate(date);
    handleReturnDateChange(date);
  };

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <CalendarMonthIcon />
          <span className='font-bold'>Pick-up</span>
          </div>
          <DatePicker
            selected={startDate}
            onChange={handlePickupDateChangeInternal}
            showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy HH:mm"
            className='text-xl w-4/5 ml-10 h-10 pl-2 rounded-sm'
          />
        </div>
        <div>
          <span className='font-bold'>→</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <CalendarMonthIcon />
          <span className='font-bold'>Return</span>
          </div>
          <DatePicker
            selected={endDate}
            onChange={handleReturnDateChangeInternal}
            showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy HH:mm"
            className='text-xl w-4/5 ml-10 h-10 pl-2 rounded-sm'
          />
        </div>
      </div>
    </>
  );
};

export default MyDatePicker;
