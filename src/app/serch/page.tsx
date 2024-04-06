"use client"

import { CAR_DATA } from '../../data/CAR_DATA';
import { useSearchParams } from 'next/navigation';
import ParamsSerch from '../components/ParamsSerch';
import NewSerch from '../components/NewSerch';

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

const Serch = ({ car, id }: {car: CAR_DATA, id: number }) => {
  const searchParams = useSearchParams();
  return (
    <>
      {searchParams && searchParams.has('car') ? (
        <ParamsSerch car={car} id={id} />
      ) : (
        <NewSerch car={car} id={id} />
      )}
    </>
  )
}

export default Serch