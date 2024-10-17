import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";

const RegistrationSelection = () => {
    return (
      <>
      <Helmet>
        <title>Account Type - MaliCloud</title>
      </Helmet>
      <div className='absolute md:left-10 md:top-0 top-2 flex items-center '>
          <Link to='/' className='flex items-center'>
            <img src="/images/cloud-transparent.png" alt="logo" className="md:w-[100px] w-[60px]"/>
            <h1 className='dark:text-white md:text-xl font-bold'>MaliCloud</h1>
          </Link>
      </div>
      <div className="absolute md:top-8 top-4 md:right-24 right-4 flex gap-x-2 items-center dark:text-white">
        <h1 className="hidden md:block">Already have an account?</h1>
          <Link to='/login'>
            <button className="border dark:bg-zinc-900 bg-black p-2 rounded-lg dark:hover:bg-zinc-800 hover:bg-zinc-800 border-none items-center w-[90px] dark:text-orange-400 text-white">
                Sign in
            </button>
        </Link>
      </div>
      <div className="md:mt-36 mt-24 dark:text-white">
        <h1 className="text-center space-y- text-2xl p-8">Welcome to<span className="text-gray-600 text-4xl font-bold text-orange-400">MaliCloud</span>. 
        <br/>
        <span className="italic dark:text-white text-xl">Sign in to your role here:</span>
        </h1>
        <div className="md:flex grid gap-4  justify-center items-center space-x-4 md:mb-0 mb-8">
          <div className="flex dark:bg-zinc-900 bg-zinc-200 rounded-lg w-[300px] h-[200px] flex gap-y-8 flex-col items-center justify-center">
            <h1 className="text-xl font-bold flex items-center gap-x-4 dark:text-white"><HomeIcon className="w-10 h-10"/> Landlord</h1>
            <Link to="/signup/landlord">
              <button className="bg-zinc-950 p-4 rounded-lg font-bold hover:bg-zinc-800 dark:text-orange-500 text-white border">Create an account</button>
            </Link>
          </div>
 
          <div className="dark:bg-zinc-900 bg-zinc-200 rounded-lg w-[300px] h-[200px] flex flex-col items-center justify-center gap-y-8 ">
            <h1 className="flex items-center gap-x-4 text-xl font-bold dark:text-white"><HomeIcon className="w-10 h-10"/> Property Manager</h1>
            <Link to="/signup/property-manager">
              <button className="bg-zinc-950 p-4 font-bold rounded-lg hover:bg-zinc-800 dark:text-orange-500 text-white border">Create an account</button>
            </Link>
          </div>

          <div className="dark:bg-zinc-900 bg-zinc-200 rounded-lg w-[300px] h-[200px] flex flex-col gap-y-8 items-center justify-center border">
            <h1 className="flex items-center gap-x-4 text-xl font-bold dark:text-white"><PersonIcon className="w-10 h-10"/>Tenant</h1>
            <Link to="/signup/tenant">
              <button className="bg-zinc-950 p-4 rounded-lg hover:bg-zinc-800 font-bold dark:text-orange-500 text-white border">Create an Account</button>
            </Link>
          </div>
        </div>
      </div>
            <div>
                <div className="hidden md:block absolute bottom-24 left-20 w-24 h-24 dark:bg-zinc-900 bg-zinc-500 transform rotate-45"></div>
            </div>
            <div>
                <div className="hidden md:block absolute top-48 right-20 w-24 h-24 dark:bg-zinc-900 bg-zinc-500 transform rotate-45"></div>
            </div>
      </>
    );
  };
  
  export default RegistrationSelection;