"use client"

import {React, useState} from "react";
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

const formSchema = z.object({
    email: z.string().email(),
    phoneNumber: z.string().min(2).max(50),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    companyName: z.string().min(2).max(50),
    noOfUnits: z.string().min(2).max(50),
    createPassword: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
  })

const PropertyManagerRegistration = () => {
    const[showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          phoneNumber: "",
          firstName: "",
          lastName: "",
          companyName: "",
          noOfUnits: "",
          createPassword: "",
          confirmPassword: "",
        },
      })

      function onSubmit(values) {
        // do something with the form values
        console.log(values)
      }
    return (
        <>
        <Helmet>
            <title>Manager registration - MaliCloud</title>
        </Helmet>
        <div className='absolute md:left-10 left-2 top-0 flex items-center'>
        <a href="#" className='flex items-center'>
            <img src="/images/cloud-transparent.png" alt="logo" className="md:w-[90px] w-[50px]"/>
            <h1 className='dark:text-white md:text-xl font-bold'>MaliCloud</h1>
        </a>
        </div>

        <div className="absolute md:top-8 top-2 md:right-24 right-4 flex gap-x-2 items-center ">
        <h1 className="dark:text-white md:text-lg text-sm">Already have an account?</h1>
          <Link to='/login'>
            <Button className="border bg-zinc-900 p-2 rounded-lg hover:bg-zinc-800 items-center md:w-[90px] dark:text-orange-400 text-white border-none md:text-lg">
                Sign in
            </Button>
        </Link>
        </div>

        <div className="text-white text-center md:mt-12 mt-24">
            <h1 className="md:text-xl font-bold text-orange-400">Property Manager</h1>
        </div>

        <div className="relative top-14 flex justify-center text-sm pb-8">
            <Form {...form}>
                <form  onSubmit={form.handleSubmit(onSubmit)} action="submit">
                    <p className="dark:text-white mb-8 md:text-xl">Enter your details to continue:</p>
                    <div className="grid gap-2">
                        <FormField
                        control ={form.control}
                        name = "email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="dark:text-white">Email *</FormLabel>
                            <FormControl className="md:w-[420px] w-[300px] bg-zinc-800 text-white">
                                <Input placeholder="Enter your Email" {...field} className='border-none' />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                            control ={form.control}
                            name = "firstName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="dark:text-white">First name *</FormLabel>
                                <FormControl className="w-[200px] bg-zinc-800 text-white">
                                    <Input placeholder="First name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />

                            <FormField
                            control ={form.control}
                            name = "lastName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="dark:text-white">Last name *</FormLabel>
                                <FormControl className="w-[200px] bg-zinc-800 text-white">
                                    <Input placeholder="Last name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>

                        <FormField
                        control ={form.control}
                        name = "licenseNumber"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="dark:text-white">License number *</FormLabel>
                            <FormControl className="w-[420px] bg-zinc-800 text-white">
                                <Input placeholder="Enter your license number here" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                            control ={form.control}
                            name = "phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="dark:text-white">Phone number *</FormLabel>
                                <FormControl className="w-[200px] bg-zinc-800 text-white">
                                    <Input placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control ={form.control}
                            name = "experienceYears"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="dark:text-white">Experience Years *</FormLabel>
                                <FormControl className="w-[200px] bg-zinc-800 text-white">
                                    <Input placeholder="Years of experience" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control ={form.control}
                            name = "createPassword"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="dark:text-white">Create Password *</FormLabel>
                                <div className="relative">
                                    <FormControl className="w-[200px] bg-zinc-800 text-white">
                                        <Input 
                                        type={showPassword ? 'text': 'password'}
                                        placeholder="Create your password" {...field} 
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
                            control ={form.control}
                            name = "confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-white">Confirm Password *</FormLabel>
                                <div className="relative">
                                    <FormControl className="w-[200px] bg-zinc-800 text-white">
                                        <Input 
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Confirm your password" {...field} 
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

                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center ">
                        <Button className="hover:bg-zinc-800 md:p-4 md:w-[200px] bg-black dark:text-orange-400 border-none ">Create Account</Button>
                    </div>
                </form>
            </Form>
        </div>

        <div>
            <div className="absolute md:block hidden bottom-24 left-20 w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
        </div>
        <div>
            <div className="absolute md:block hidden top-48 right-20 w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
        </div>
        </>
    );
};

export default PropertyManagerRegistration;