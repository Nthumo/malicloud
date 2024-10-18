import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      onClick={() => navigate(-1)} 
      className="flex items-center ml-[152px] bg-transparent hover:bg-transparent dark:text-white text-black border-none dark:bg-zinc-900 bg-zinc-300 mb-4"
    >
      <ArrowLeft className="h-8 w-8 font-bold text-xl" />
    </Button>
  );
};

export default BackButton;
