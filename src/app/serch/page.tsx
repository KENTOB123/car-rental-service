"use client"

import { CAR_DATA } from '../../data/CAR_DATA';
import { useSearchParams } from 'next/navigation';
import ParamsSerch from '../components/ParamsSerch';
import NewSerch from '../components/NewSerch';
import { NextPage } from 'next';
import { Suspense } from 'react';

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

type NewProps = {
  car: CAR_DATA,
  id: number,
};

const Serch: React.FC<NewProps> = ({ car, id }: NewProps) => {
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

const SerchPage: NextPage = () => {
  const carData: CAR_DATA = {
    name: 'Car Name',
    price: 'Car Price',
    img: 'Car Image URL',
    model: 'Car Model',
    mark: 'Car Mark',
    year: 'Car Year',
    doors: 'Car Doors',
    air: 'Car Air',
    transmission: 'Car Transmission',
    fuel: 'Car Fuel',
  };
  const id: number = 1;

  return (
  <Suspense fallback={<div>Loading...</div>}>
  <Serch car={carData} id={id} />
  </Suspense>
  );
};

export default SerchPage;