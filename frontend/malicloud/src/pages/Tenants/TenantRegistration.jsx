"use client"

import  {React, useState } from "react";
import { Helmet } from "react-helmet-async";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons";

// form validation schema
const formSchema = z.object({
    email: z.string().email(),
    phoneNumber: z.string().min(2).max(50),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    createPassword: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),

  })



const TenantRegistration = () => {
    const[showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);

//Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      createPassword: "",
      confirmPassword: "",
    },
  })
 
//submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values) // output the values for now
  }
    return (
        <>
        <Helmet>
            <title>Tenant registaration</title>
        </Helmet>
        <div className='absolute left-10 top-0 flex items-center'>
        <a href="#" className='flex items-center'>
            <img src="/images/cloud-transparent.png" alt="logo" width={100}/>
            <h1 className='dark:text-white text-xl font-bold'>MaliCloud</h1>
        </a>
        </div>

        <div className="absolute top-8 right-24 flex gap-x-2 items-center ">
        <h1 className="dark:text-white">Already have an account?</h1>
          <Link to='/login'>
            <button className="border dark:bg-zinc-900 bg-black border-none p-2 rounded-lg hover:bg-zinc-800 items-center w-[90px] dark:text-orange-400 text-white">
                Sign in
            </button>
        </Link>
        </div>

        <div className="text-center">
            <h1 className="font-bold text-2xl mt-24 text-orange-400">Tenant Account</h1>
        </div>

        <div className="relative flex items-center justify-center top-20 gap-y-4">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <p className="dark:text-white mb-8 font-bold">Fill in the form to create your account</p>
                <div className="grid grid-cols-2 gap-4 gap-x-8">
                    <div className="grid gap-2">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='dark:text-white'>Email *</FormLabel>
                        <FormControl className='w-[300px] bg-zinc-800 text-white'>
                            <Input placeholder="Enter your email" {...field}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    </div>

                    <div className="">
                    <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="dark:text-white">Phone Number *</FormLabel>
                        <FormControl className='w-[300px] bg-zinc-800 text-white'>
                            <Input placeholder="Enter you Phone Number" {...field}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    </div>

                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="dark:text-white">First name *</FormLabel>
                        <FormControl className='w-[300px] bg-zinc-800 text-white'>
                            <Input placeholder="First Name" {...field}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='dark:text-white'>Last name *</FormLabel>
                        <FormControl className='w-[300px] bg-zinc-800 text-white'>
                            <Input placeholder="Last name" {...field}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="createPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='dark:text-white'>Create password *</FormLabel>
                        <div className="relative">
                            <FormControl className='w-[300px] bg-zinc-800 text-white'>
                                <Input 
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Create your password" 
                                {...field}
                                />

                            </FormControl>
                            <button 
                            type='button'
                            onClick={()=> setShowPassword(!showPassword)}
                            className="absolute right-2 top-2 text-gray-500"
                            >
                                {showPassword ? <EyeNoneIcon size={20}/> : <EyeOpenIcon size={20}/>}
                            </button>
                        </div>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='dark:text-white'>Confirm password *</FormLabel>
                        <div className="relative">
                        <FormControl className='w-[300px] bg-zinc-800 text-white'>
                            <Input 
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm your password" 
                            {...field}
                            />

                        </FormControl>
                        <button 
                        type='button'
                        onClick={()=> setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2 top-2 text-gray-500"
                        >
                            {showConfirmPassword ? <EyeNoneIcon size={20}/> : <EyeOpenIcon size={20}/>}
                        </button>
                        </div>

                        <FormMessage/>
                        </FormItem>
                    )}
                    />
                </div>
                <div className="flex justify-center mt-12 ">
                    <Button type="submit" className="w-[100px] bg-black hover:bg-zinc-900 font-bold dark:text-orange-400 border">Submit</Button>
                </div>
            </form>
            </Form>
            </div>

        <div>
            <div className="absolute bottom-24 left-20 w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
        </div>
        <div>
            <div className="absolute top-48 right-20 w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
        </div>
        </>
    );
};

export default TenantRegistration;
