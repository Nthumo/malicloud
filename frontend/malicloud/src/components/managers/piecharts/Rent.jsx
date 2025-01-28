import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../../ui/chart';
import { Bar, BarChart, CartesianGrid, LabelList, Pie,PieChart, XAxis, YAxis, Cell, Legend, Tooltip } from 'recharts';

    const chartData = [
        {house: "Fine House", occupants: 130 , units: 200, month: 'Jan', collected: 5000, outstanding: 1000 },
        {house: "Murang'a House", occupants: 106, units: 150, month: 'Feb', collected: 5500, outstanding: 300 },
        {house: "UpperHill House", occupants: 66, units: 100, month: 'Mar', collected: 5000, outstanding: 100},
        {house: "Embu House", occupants: 126, units: 200, month: 'Apr', collected: 3000, outstanding: 2500},
    ]

  const calculateTotalRent = (data) => {
    let totalCollected = 0;
    let totalOustanding = 0;

    data.forEach(item => {
      totalCollected += item.collected;
      totalOustanding += item.outstanding;
    });

    return {totalCollected, totalOustanding};
  };

function Rent() {

    const { totalCollected, totalOustanding } = calculateTotalRent(chartData);

    const totalRentData = [
        {name: 'Collected', value: totalCollected},
        {name: 'Outstanding', value: totalOustanding},
      ];

      const COLORS = [' #229954', ' #c0392b'];

      const percentageCollected = ((totalCollected / (totalCollected + totalOustanding)) * 100).toFixed(2);

      const chartConfig = {
        occupants: {
          label: "Occupants",
          color: "hsl(var(--chart-1))"
        },
        units: {
          label: "Total Units",
          color: "hsl(var(--chart-2))"
        },
        collected: {
          label: 'Total Collected'
        },
        outstanding: {
          label: 'Outstanding'
        }
      }
  return (
    <>
    <div className='flex justify-center md:mt-0 mt-4'>
      <Card className='w-[230px] md:w-[280px] md:h-[340px] h-[300px] md:p-4 border md:shadow-sm md:dark:shadow-white md:shadow-black'>
        <CardHeader className='p-2'>
          <CardTitle className='md:text-sm text-[11px] text-center'>Collected vs outstanding rent</CardTitle>
        </CardHeader>
        <CardContent className='p-0'>
          <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square '
          >
            <PieChart className='' width={100} height={100}>
              <ChartTooltip
              content={<ChartTooltipContent/>}
              />
              <Pie 
              data={totalRentData} 
              dataKey='value'
              cx='50%'
              cy='50%'
              fill="#8884d8"
              innerRadius={50}
              outerRadius={80}
              className='text-lg font-bold'
              >
                {totalRentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                ))}
                
              </Pie>
              <Tooltip/>
              <Legend/>                
            </PieChart>
            <div className='md:mt-2 text-center'>
              <p className='flex justify-center items-center gap-2'>
                Percentage Collected: <span className='text-green-700 font-bold text-lg'>{percentageCollected}%</span>
              </p>
            </div>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
    </>
  )
};
export default Rent;
