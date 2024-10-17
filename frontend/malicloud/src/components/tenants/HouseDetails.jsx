import React ,{useEffect} from 'react';

export default function HouseDetails({isOpen, onClose}) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;
  return (
    <>
    <button onClick={onClose}>&times;</button>
    <div className='text-center text-xl'>HouseDetails</div>
    </>
    
  )
}
