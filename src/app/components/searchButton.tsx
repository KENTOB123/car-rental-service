import Link from 'next/link'
import React from 'react'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { CAR_DATA } from '../../data/CAR_DATA';
import { useRouter } from 'next/router';
// import { Link } from 'react-router-dom';

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
};

const SearchButton = ({ car, id }: {car: CAR_DATA, id: number }) => {
    

    const handleClick = () => {
      window.location.href = `/serch?car=${JSON.stringify(car)}`;
  };

  return (
    <div className='mt-10'>
      <button
        className='text-white bg-blue-700 font-semibold text-l p-4 shadow-xl'
        onClick={handleClick}
        >
       RESERVE NOW <BookmarkAddedIcon />
       </button>
    </div>
  )
};

export default SearchButton