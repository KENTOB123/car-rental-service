import LocationOnIcon from '@mui/icons-material/LocationOn';

const PickDropLocation = ({pickUp ,dropOff}: {pickUp: string, dropOff?: string}) => {
  return (
    <>
    <div>
       <p className='font-bold'>
        <LocationOnIcon />Pick-Up Location
        </p>
        <div className='text-gray-500 pl-6'>
        {pickUp}
        </div>
    </div>
    <div>
        <p className='font-bold'>
            <LocationOnIcon />Drop-Off Location
        </p>
        <div className='text-gray-500 pl-6'>
            {dropOff}
        </div>
    </div>
    </>
  )
}

export default PickDropLocation