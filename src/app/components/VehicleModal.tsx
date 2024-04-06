import { useState } from "react";
import Modal from "react-modal";
import ModalDetail from "./ModalDetail";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  carType?: string;
  pickUp: string;
  dropOff?: string;
  upDay: Date;
  offDay: Date;
  selectedCar?: CAR_DATA;
  showReturnLocation?: boolean;
}

interface CAR_DATA  {
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
}[];

const VehicleModal = ({carType, pickUp, dropOff, upDay, offDay, selectedCar, showReturnLocation}: Props) => {
const [modal, setModal] = useState(false);

const openModal = () => {
    setModal(true);
};
const closeModal = () => {
    setModal(false);
};

return (
    <>
    <button
    onClick={openModal}
    className='text-white bg-blue-700 text-xl rounded px-24 pt-2 pb-2 focus:outline-none focus:shadow-none shadow-xl'
    >
        Serch
    </button>
    <Modal isOpen={modal}>
        <button onClick={closeModal} className="mb-4"><CloseIcon /></button>
        <ModalDetail carType={carType} pickUp={pickUp} dropOff={dropOff} upDay={upDay} offDay={offDay} selectedCar={selectedCar} showReturnLocation={showReturnLocation} />
    </Modal>
    </>
);
};

export default VehicleModal