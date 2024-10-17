import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../ui/card';
import { Pie, PieChart, Cell, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';


const chartData = [
    {house: "Fine", occupants: 130 , units: 200, month: 'Jan', collected: 5000, outstanding: 1000 },
    {house: "Murang'a", occupants: 106, units: 150, month: 'Feb', collected: 5500, outstanding: 2300 },
    {house: "UpperHill", occupants: 66, units: 100, month: 'Mar', collected: 5000, outstanding: 1700},
    {house: "Embu", occupants: 126, units: 200, month: 'Apr', collected: 3000, outstanding: 2500},
]

const COLORS = ['#413c3c', ' #2471a3 ', '#c0392b', '  #229954']

export default function OustandingPerProperty() {

  return (
    <>
    <Card className='w-[280px] h-[300px] flex flex-col gap-4 shadow-sm dark:shadow-white shadow-black'>
        <CardHeader className='p-2'>
            <CardTitle className='text-sm text-center'>Oustanding rent by Property</CardTitle>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer
            width='100%'
            height={200}
            className=''
            >
            <PieChart>
                <Pie 
                data={chartData} 
                cx='50%'
                cy='50%'
                dataKey='outstanding'
                nameKey='house'
                outerRadius={80}
                fill="#8884d8"
                className='font-bold dark:text-white text-black'
                >
                    <LabelList
                    dataKey='house'
                    fill='#333'
                    angle={15}
                    className='fill-background'
                    stroke='none'
                    fontSize={10}
                    />

                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                ))}
                </Pie>
                <Legend wrapperStyle={{fontSize: '10px', marginTop: '10px'}}/>
                <Tooltip/>
            </PieChart>
            </ResponsiveContainer>
        </CardContent>
       
    </Card>    
    </>
  )
}
