import React, {useEffect, useState} from 'react'

function LiveDate() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      //cleanup the timer when the component unmounts
      return () => clearInterval(timer);
    }, []);
  
    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };
  
    
    const formatTime = (date) => {
      return date.toLocaleTimeString('en-US');
    };

  return (
    <div className='flex md:gap-4 gap-2 items-center md:text-sm text-[10px]'>
    <p className=' rounded-lg dark:text-white text-black '>{formatDate(currentTime)}</p>
    <p className='border rounded-lg p-1 bg-zinc-700 font-bold'>{formatTime(currentTime)}</p>
    </div>
  )
}
export default LiveDate;