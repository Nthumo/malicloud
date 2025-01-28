import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Bar, BarChart, CartesianGrid, LabelList, Pie,PieChart, XAxis, YAxis, Cell, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';
import { Plus, TrendingUp } from 'lucide-react';
import Rent from '@/components/managers/piecharts/Rent';
import OustandingPerProperty from '@/components/managers/piecharts/OustandingPerProperty';
import { Badge } from '@/components/ui/badge';

const chartData = [
  {house: "Fine House", occupants: 130 , units: 200, month: 'Jan', collected: 5000, outstanding: 1000 },
  {house: "Murang'a House", occupants: 106, units: 150, month: 'Feb', collected: 5500, outstanding: 300 },
  {house: "UpperHill House", occupants: 66, units: 100, month: 'Mar', collected: 5000, outstanding: 100},
  {house: "Embu House", occupants: 126, units: 200, month: 'Apr', collected: 3000, outstanding: 2500},
]

const truncateLabel = (label, maxLength = 10) => {
  return label.length > maxLength ? `${label.substring(0, maxLength)}...` : label;
}

const calculateOccupanyRates = (data) => {
  let totalOccupants = 0;
  let totalUnits = 0;
  let occupancyRates = [];

  data.forEach(property => {
    const { occupants, units} = property;
    totalOccupants += occupants;
    totalUnits += units;

    const occupancyRate = (occupants / units) * 100;
    occupancyRates.push(occupancyRate);
  });

  const averageOccupany = (totalOccupants / totalUnits) * 100;
  const highestOccupancy = Math.max(...occupancyRates);
  const lowestOccupancy = Math.min(...occupancyRates);

  return {
    averageOccupany: averageOccupany.toFixed(2),
    highestOccupancy: highestOccupancy.toFixed(2),
    lowestOccupancy: lowestOccupancy.toFixed(2),
  }
}

export default function HomePage() {

  const { averageOccupany, highestOccupancy, lowestOccupancy} = calculateOccupanyRates(chartData);

  const chartConfig = {
    occupants: {
      label: "Occupants",
      color: "hsl(var(--chart-1))"
    },
    units: {
      label: "Total Units",
      color: "hsl(var(--chart-2))"
    },
  }

  return (
    <>
    <Helmet>
        <title>Property manager - MaliCloud</title>
        <link rel="icon" type="image/svg+xml" href="/cloud2.png"/>
    </Helmet>
    <Header/>
    <div className='md:ml-24 ml-14 md:mr-6 mr-4'>
      <div className='flex justify-between md:mt-8 mt-4'>
        <h1 className=' md:text-lg text-[13px] font-bold'>Dashboard</h1>
        <Link to='/manager/add-tenant'>
          <Button className='font-bold bg-green-600 hover:bg-green-500 dark:text-white text-black md:p-4 p-2 md:h-10 h-7'>
            <Plus className='w-5'/>
          <p className='md:text-[12px] text-[10px]'>Add Tenant</p>
          </Button>
        </Link>
      </div>
      <div className='md:flex md:gap-8 '>
        <Card className='relative z-10 mt-4   md:w-[650px] w-[350px] md:h-[550px] h-[430px] md:p-2 p-3'>
          <CardHeader className='p-0'>
            <CardTitle className='dark:text-white md:text-[15px] text-[13px] md:text-center'>Occupancy rates</CardTitle>
          </CardHeader>
          <div className='flex justify-center md:gap-4 gap-2 mt-4'>
            <Card className='md:w-[160px] w-[105px] md:h-[65px] h-[54px] bg-blue-400 bg-opacity-30 border-none'>
              <CardHeader className='p-2'>
                <CardTitle className='md:text-sm text-[10px] text-center text-blue-500'>Average Occupancy</CardTitle>
                <CardContent>
                  <h1 className='text-center md:text-xl font-bold text-blue-400'>{averageOccupany}%</h1>
                </CardContent>
              </CardHeader>
            </Card>
            <Card className='md:w-[160px] w-[105px] md:h-[65px] h-[54px] bg-green-400 bg-opacity-30 border-none '>
              <CardHeader className='p-2'>
                <CardTitle className='md:text-sm text-[10px] text-center text-green-500'>Highest Occupancy</CardTitle>
              </CardHeader>
              <CardContent>
                <h1 className='text-center md:text-xl text-green-400 font-bold'>{highestOccupancy}%</h1>
              </CardContent>
            </Card>
            <Card className='md:w-[160px] w-[105px] md:h-[65px] h-[54px] bg-red-400 bg-opacity-30 border-none '>
              <CardHeader className='p-2'>
                <CardTitle className='md:text-sm text-[10px] text-center text-red-500'>Lowest Occupancy</CardTitle>
              </CardHeader>
              <CardContent>
                <h1 className='text-center font-bold md:text-xl text-red-400'>{lowestOccupancy}%</h1>
              </CardContent>
            </Card>
          </div>
          <div className='flex justify-center'>
            <Card className='mt-4 md:w-[600px] md:left-6 md:h-[400px] border-none'>
              <CardContent className=''>
                <ChartContainer config={chartConfig} className=' md:w-[500px] w-[290px] md:h-[300px] h-[200px] p-0'>
                  <BarChart
                  accessibilityLayer
                  data={chartData}
                  margin={{top:20,}}
                  barGap={0}
                  className='mt-6'
                  >
                    <CartesianGrid vertical={false}/>
                    <XAxis
                    dataKey='house'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => truncateLabel(value, 10)}
                    className='font-bold md:text-[12px] text-[9px] w-[20px]'
                    />
                    <YAxis/>
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator='line'/>}
                    defaultIndex={1}
                    />
                    <Bar dataKey='occupants' fill='#8884d8' stackId='a' barSize={30} shape={3}>
                      
                    </Bar>
                    <Bar dataKey='units' fill='hsl(var(--chart-1))' stackId='ab'  barSize={4}
                    >
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          <CardFooter className='md:text-sm text-[12px] md:mt-0 mt-12 text-muted-foreground'>
            Showing occupants per Property
          </CardFooter>
        </Card>

        <Card className='md:ml-0  md:flex items-center gap-3 border-none'>
          <Rent/>
          <OustandingPerProperty/>
        </Card>
      </div>

      <Card className=' mt-8 mb-8'>
        <CardHeader className='p-2'>
          <CardTitle className='md:text-lg text-[13px]'>Recent maintenance requests</CardTitle>
        </CardHeader>
          <Table className='md:text-sm text-[10px] p-2'>
            <TableHeader className='dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-900'>
              <TableRow className='md:text-sm text-[11px]'>
                <TableHead className=''>ID</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className='hover:bg-transparent md:text-sm text-[11px]'>
                <TableCell>23454</TableCell>
                <TableCell>Fine House</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Electrical</TableCell>
                <TableCell className='md:p-4 p-2'> 
                  <Badge className='flex justify-center md:w-[75px] dark:bg-green-700 dark:hover:bg-green-600 bg-green-800 hover:bg-green-700 md:p-0.5 p-0 md:text-[11px] text-[9px]'>
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow className='hover:bg-transparent'>
                <TableCell>23454</TableCell>
                <TableCell>Fine House</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Electrical</TableCell>
                <TableCell className='md:p-4 p-2'>
                  <Badge className='flex justify-center dark:bg-yellow-700 dark:hover:bg-yellow-600 bg-yellow-600 hover:bg-yellow-500 md:w-[75px] md:p-0.5 p-0 md:text-[11px] text-[9px]'>
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow className='hover:bg-transparent'>
                <TableCell>23454</TableCell>
                <TableCell>Fine House</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Electrical</TableCell>
                <TableCell className='md:p-4 p-2'>
                  <Badge className='md:w-[75px] flex justify-center dark:bg-yellow-700 dark:hover:bg-yellow-600 bg-yellow-600 hover:bg-yellow-500 md:p-0.5 p-0 md:text-[11px] text-[9px]'>
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow className='hover:bg-transparent'>
                <TableCell>23454</TableCell>
                <TableCell>Fine House</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Electrical</TableCell>
                <TableCell className='md:p-4 p-2'>
                  <Badge className='md:w-[75px] flex justify-center dark:bg-red-700 dark:hover:bg-red-600 bg-red-600 hover:bg-red-500 md:p-0.5 p-0 md:text-[11px] text-[9px]'>
                    Cancelled
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow className='hover:bg-transparent'>
                <TableCell>23454</TableCell>
                <TableCell>Fine House</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Electrical</TableCell>
                <TableCell className='md:p-4 p-2'>
                  <Badge className='md:w-[75px] flex justify-center dark:bg-blue-700 dark:hover:bg-blue-600 bg-blue-600 hover:bg-blue-500 md:p-0.5 p-0 md:text-[11px] text-[9px]'>
                    In progress
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow className='hover:bg-transparent'>
                <TableCell>23454</TableCell>
                <TableCell>Fine House</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Electrical</TableCell>
                <TableCell className='md:p-4 p-2'>
                  <Badge className='md:w-[75px] flex justify-center dark:bg-green-700 dark:hover:bg-green-600 bg-green-700 hover:bg-green-800 md:p-0.5 p-0 md:text-[11px] text-[9px]'>
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </Card>
    </div>
    </>
  )
}
