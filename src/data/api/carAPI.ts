import { CAR_DATA } from "../../../types";

export const getAllCars = async (): Promise<CAR_DATA[]> => {
    const res = await fetch('http://localhost:3000/vehicle', { cache: 'no-store' }); //SSR

    const cars = await res.json();
    return cars;
};