"use client"

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
 } from '@/components/ui/card';
import { 
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
 } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Form, 
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { 
  Select, 
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

function TenantMaintenanceRequests() {

  const formSchema = z.object({
    description:z.string().min(5).max(1000),
  })

  //form description
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:{
      issueType: "",
      description: "",
      uploadFile: "",
    }, 
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <>
    <Helmet>
      <title>Maintenance - Tenant</title>
    </Helmet>
    <Header/>
    <div className='relative h-svh'>
      <h1 className='absolute md:left-32 left-12 font-bold md:text-xl text-[14px]'>Maintenance Requests</h1>
      <div className='absolute right-16'>
        <Button className='bg-green-600 hover:bg-green-500'>Schedule a request</Button>
      </div>
      <div className='text-xl absolute md:left-32 left-12 top-[50px] md:grid grid-cols-2 gap-16'>
        <Card className='md:w-[700px] w-[340px] md:h-[450px] bg-zinc-300 dark:bg-zinc-900'>
          <CardHeader className='p-3'>
            <CardTitle className='md:text-lg text-[15px] '>Recent Requests</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <Link to='#' className=''>
            <Card className=' flex hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-800'>
              <CardContent className='flex items-center space-x-4 text-sm pt-6'>
                <div className='text-sm'>Electrical</div>
                <Separator orientation='vertical'/>
                <div>Sockets stopped working yesterday and have...</div>
                <Separator orientation='vertical'/>
                <div>On: 12/02/2024 - 20:11</div>
                <Separator orientation='vertical'/>
                <Badge className='absolute left-[560px]'>submitted</Badge>
              </CardContent>
            </Card>
            </Link>
            <Link to='#' className=''>
            <Card className=' flex hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-800'>
              <CardContent className='flex items-center space-x-4 text-sm pt-6'>
                <div className='text-sm'>Other</div>
                <Separator orientation='vertical'/>
                <div>Sockets stopped working yesterday and have...</div>
                <Separator orientation='vertical'/>
                <div>On: 12/02/2024 - 20:11</div>
                <Separator orientation='vertical'/>
                <Badge className='absolute left-[560px] dark:text-white bg-red-800 hover:bg-red-900'>Cancelled</Badge>
              </CardContent>
            </Card>
            </Link>
            <Link to='#' className=''>
            <Card className='flex hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-800'>
              <CardContent className='flex items-center space-x-4 text-sm pt-6'>
                <div className='text-sm'>Electrical</div>
                <Separator orientation='vertical'/>
                <div>Sockets stopped working yesterday and have...</div>
                <Separator orientation='vertical'/>
                <div>On: 12/02/2024 - 20:11</div>
                <Separator orientation='vertical'/>
                <Badge className='absolute left-[560px] bg-blue-500 hover:bg-blue-600'>In progress</Badge>
              </CardContent>
            </Card>
            </Link>
            <Link to='#' className=''>
            <Card className=' flex hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-800'>
              <CardContent className='flex items-center space-x-4 text-sm pt-6'>
                <div className='text-sm'>Plumbing</div>
                <Separator orientation='vertical'/>
                <div>Sockets stopped working yesterday and have...</div>
                <Separator orientation='vertical'/>
                <div>On: 12/02/2024 - 20:11</div>
                <Separator orientation='vertical'/>
                <Badge className='absolute left-[560px] bg-green-600 hover:bg-green-700'>completed</Badge>
              </CardContent>
            </Card>
            </Link>
            
          </CardContent>
        </Card>

        <Card className='absolute md:right-[60px] w-[400px] bg-zinc-300 dark:bg-zinc-900'>
          <CardHeader>
            <CardTitle className='text-lg'>Make a request</CardTitle>
            <CardContent>
              <div className='absolute right-4 flex items-center gap-2 p-2 rounded-xl '>
              <Label className='text-sm font-bold opacity-100'>Emergency ?</Label>
                <Switch className='dark:data-[state=unchecked]:bg-white data-[state=unchecked]:bg-zinc-600 data-[state=checked]:bg-green-500'/>
              </div>
              <Form {...form} className=''>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                  <FormField
                  control={form.control}
                  name='type'
                  className=''
                  render={({field}) =>(
                    <FormItem className='mt-8'>
                      <FormLabel>Type *</FormLabel>
                      <Select className=''>
                        <FormControl>
                          <SelectTrigger className=''>
                            <SelectValue placeholder='Select issue type'/>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className=''>
                          <SelectItem value='plumbing'>Plumbing</SelectItem>
                          <SelectItem value='electrical'>Electrical</SelectItem>
                          <SelectItem value='other'>Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <div>
                        <FormLabel>Description *</FormLabel>
                        <Textarea placeholder='Describe the issue here' className='min-h-[100px] text-white'/>
                      </div>
                      <div className=''>
                        <FormLabel>Upload File <span className='text-xs'>(optional)</span></FormLabel>
                        <Input type='file' className='dark:text-white dark:bg-zinc-700'/>
                      </div>
                    </FormItem>
                  )}
                  />
                  <div className='flex justify-center'>
                    <Button type='submit' className='relative top-4 dark:bg-black border dark:hover:bg-zinc-950 dark:hover:scale-105 w-[100px] font-bold  dark:text-white'>Submit</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      <div className='absolute bottom-[0px] flex justify-center'>
        <Card className='border-none h-[400px] w-[800px] mb-8'>
          <CardHeader>
            <CardTitle className='text-center'>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>How do I submit a maintenance request?</AccordionTrigger>
                <AccordionContent>
                To submit a maintenance request, log into your tenant portal and navigate to the "Maintenance" section. 
                From there, fill out the required details, including a description of the issue, photos (if applicable), and your preferred contact method. 
                Once submitted, you will receive a confirmation, and the maintenance team will schedule the repair
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>What qualifies as an emergency maintenance issue?</AccordionTrigger>
                <AccordionContent>
                Emergency maintenance issues are problems that pose immediate risks to health, safety, or the property itself. 
                Common examples include gas leaks, flooding, no electricity, severe plumbing issues, or structural damage. 
                If you are unsure, it's better to report the issue and let the maintenance team assess its urgency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>What happens if a maintenance issue isn't fixed properly the first time?</AccordionTrigger>
                <AccordionContent>
                If the issue persists after the first visit, please reopen the maintenance request through your portal or contact the property manager directly. 
                Maintenance will re-assess the problem and ensure it is fully resolved. 
                Your satisfaction is our priority, and we aim to address all issues promptly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>Am I responsible for any maintenance costs as a tenant?</AccordionTrigger>
                <AccordionContent>
                Tenants are not typically responsible for regular maintenance costs. 
                However, if the issue was caused by tenant negligence or intentional damage, you may be charged for repairs. 
                Review your lease agreement for specific details on tenant responsibilities regarding maintenance costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-5'>
                <AccordionTrigger>Can I schedule a specific time for maintenance to come?</AccordionTrigger>
                <AccordionContent>
                While we try to accommodate tenant schedules, maintenance requests are usually handled during business hours (Monday to Friday). 
                If you need to be present for the repair, you can request a window of time, but availability may depend on the urgency and complexity of the issue.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}
export default TenantMaintenanceRequests;