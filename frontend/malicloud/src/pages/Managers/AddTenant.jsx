"use client"

import {React, useState} from 'react';
import { Form, FormControl, FormItem, FormField, FormMessage, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';
import { Helmet } from 'react-helmet-async';

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    phoneNumber: z.string().min(2).max(50),
    property: z.string().min(2).max(50),
})

export default function AddTenant() {


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            property: "",
        }
    })

    function onSubmit(values){
        console.log(values)
    }

  return (
    <>
    <Helmet>
        <title>Add tenant - MaliCloud</title>
    </Helmet>
    <div className='flex justify-center'>
        <div className='shadow-sm dark:shadow-white shadow-black w-[550px] h-[500px] p-4 mt-12 rounded-lg'>
            <div className='text-center'>
                <h1 className='mt-8 text-4xl'>Add Tenant</h1>
            </div>
            <div className='flex justify-center'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} action="submit"
                    className=''
                    >

                        <FormField
                        control = {form.control}
                        name = "firstName"
                        render = {({field }) => (
                            <FormItem className='mt-8'>
                                <FormLabel>First name *</FormLabel>
                                <FormControl className='w-[400px] mt-8'>
                                    <Input placeholder='Enter first name'{...field} className='dark:border-white border-black'/>
                                </FormControl>
                            </FormItem>
                        ) 
                        }
                        />

                        <FormField
                        control = {form.control}
                        name = "lastName"
                        className=''
                        render = {({field }) => (
                            <FormItem className='mt-8'>
                                <FormLabel>Last name *</FormLabel>
                                <FormControl className='w-[400px]'>
                                    <Input placeholder='Enter last name'{...field} className='dark:border-white  border-black'/>
                                </FormControl>
                            </FormItem>
                        ) 
                        }
                        />
                        
                        <FormField
                        control = {form.control}
                        name = "firstName"
                        render = {({field }) => (
                            <FormItem className='mt-8'>
                                <FormLabel>Choose Property *</FormLabel>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger className='dark:border-white  border-black'>
                                            <SelectValue placeholder='Property'/>
                                        </SelectTrigger>
                                        <SelectContent className='overflow-hidden'>
                                            <SelectGroup>
                                                <SelectItem value='embu-house'>Embu House</SelectItem>
                                                <SelectItem value='muranga-house'>Murang'a House</SelectItem>
                                                <SelectItem value='upperhill-house'>UpperHill House</SelectItem>
                                                <SelectItem value='fine-house'>Fine House</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </FormItem>
                        ) 
                        }
                        />
                        <div className='flex justify-center mt-16'>
                            <Button className='bg-black text-white font-bold text-lg hover:bg-zinc-800 border-none rounded-none w-[100px]'>Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    </div>
    
        
    </>
  )
}
