import {React, useState} from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { EyeOpenIcon, EyeClosedIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";


const SignIn = () => {
    return (
        <>
        <Helmet>
            <title>Sign in - Malicloud</title>
        </Helmet>
        <div className='absolute md:left-10 left-4 top-4 flex items-center text-white'>
            <Link to='/' className="flex items-center">
                <img src="/images/cloud-transparent.png" alt="logo" className="md:w-[90px] w-[50px]" />
                <h1 className='md:text-xl font-bold text-black dark:text-white'>MaliCloud</h1>
            </Link>
        </div>
        <div className="dark:text-white text-black">
            <div className="absolute md:top-8 top-3 md:right-24 right-4  flex gap-x-2 items-center">
                <h1 className="md:text-[14px] text-[11px]">Don't have an account?</h1>
                <Link to='/signup'>
                    <Button className="md:dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-black p-2 md:w-[90px] rounded-lg hover:bg-zinc-900 items-center dark:text-orange-400 text-white md:text-lg">
                        Sign up
                    </Button>
                </Link>
            </div>
            <div className="">
                <div className="flex flex-col  justify-center relative top-44">
                    <form className="flex flex-col items-center justify center gap-y-4 " action="submit">
                        <label htmlFor="email" className="flex flex-col"><span className="font-bold relative text-xl ">Sign in</span> Sign in to your Propery Management Sytem</label>
                        <input 
                        type="text"
                        placeholder="Enter your email"
                        id="email"
                        name="email"
                        className="w-[300px] h-[40px] rounded-lg p-2 dark:bg-zinc-900 bg-zinc-300 border-black text-black border"
                        required
                        />
                        <button
                        type="submit"
                        className="dark:bg-zinc-800 bg-black dark:border text-white rounded-lg dark:hover:bg-zinc-700 hover:bg-zinc-900 w-[300px] h-[40px]"
                        >
                            Continue with Email
                        </button>
                        Or
                        <button
                        type="submit"
                        className="flex gap-x-4 p-2 justify-center items-center text-white dark:bg-zinc-800 bg-black rounded-lg dark:hover:bg-zinc-700 hover:bg-zinc-900 w-[300px] h-[40px]"
                        >
                            <img src="/images/google.png" width={18} alt="google-logo" />
                            Continue with Google
                        </button>
                        <button
                        type="submit"
                        className="dark:bg-zinc-800 bg-black text-white rounded-lg flex gap-x-4 p-2 justify-center items-center dark:hover:bg-zinc-700 hover:bg-zinc-900 w-[300px] h-[40px]"
                        >
                            <img src="/images/facebook.png" width={18} alt="facebook-logo" />
                            Continue with Facebook
                        </button>

                    </form>
                </div>
            </div>

            

        </div>
        <div>
            <div className="absolute md:block hidden bottom-24 left-20 w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
        </div>
        <div>
            <div className="absolute md:block hidden top-48 right-20 w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
        </div>
        </>
    )
}

export default SignIn;