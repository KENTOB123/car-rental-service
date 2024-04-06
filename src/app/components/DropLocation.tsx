import LocationOnIcon from '@mui/icons-material/LocationOn';

const DropLocation = ({pickUp}: {pickUp: string}) => {
  return (
    <div>
                <p className='font-bold'>
                    <LocationOnIcon />Pick-Up & Drop-Off Location
                </p>
                <div className='text-gray-500 pl-6'>
                    {pickUp}
                </div>
            </div>
  )
}

export default DropLocation