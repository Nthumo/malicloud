import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../../ui/chart';



const requestData = [
    {ID:48828, property: `Murang'a House`, issue_type: 'Electrical', request_date:'10/10/2024', priority_level:'urgent', status:'completed'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/01/2024', priority_level:'normal', status:'pending'},
    {ID:11118, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/01/2024', priority_level:'normal', status:'pending'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/06/2024', priority_level:'normal', status:'completed'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/08/2024', priority_level:'emergency', status:'cancelled'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/09/2024', priority_level:'normal', status:'new'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'11/10/2024', priority_level:'normal', status:'completed'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'14/11/2024', priority_level:'emergency', status:'pending'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'16/12/2024', priority_level:'normal', status:'pending'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'20/05/2024', priority_level:'normal', status:'completed'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'21/10/2024', priority_level:'normal', status:'new'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'11/06/2024', priority_level:'emergency', status:'new'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'16/08/2024', priority_level:'normal', status:'pending'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'18/03/2024', priority_level:'normal', status:'cancelled'},
  ]

// Function to group the data by day, week, or month
const groupRequestsBy = (data, period) => {
    const groupedData = {};

    data.forEach((item) => {
      const date =dayjs(item.request_date, 'DD/MM/YY');
      let key;

      if (period === 'day') {
        key = date.format('YYYY-MM-DD');
      } else if (period === 'week') {
        key = `${date.year()}-W${date.week()}`;
      } else if (period === 'month') {
        key = date.format('YYYY-MM');
      }

      if (!groupedData[key]) {
        groupedData[key] = 0;
      }
      groupedData[key] += 1;
    });

    //Convert grouped data into an array for rechart
    return Object.keys(groupedData).map((key) => ({
      date:key,
      count: groupedData[key],
    }));
};

const chartConfig = {
  requestData : {
    label: 'request date'
  }
}

export default function RequestsTrendAnalysis() {
  const [timeFrame, setTimeFrame] = useState('day');

  const groupedData = groupRequestsBy(requestData, timeFrame);

  return (
    <div>
      <Card className=' w-[800px] h-[400px] relative border-none'>
        <CardHeader className='p-2'>
          <CardTitle className='text-lg text-center text-semibold'>Trend analysis</CardTitle>
          <div className='flex gap-4 ml-[530px]'>
            <Button onClick={() => setTimeFrame('day')} className='text-[11px] dark:text-white text-black dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-300 dark:border'>By Day</Button>
            <Button onClick={() => setTimeFrame('week')} className='text-[11px] dark:text-white text-black dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-300 dark:border'>By Week</Button>
            <Button onClick={() => setTimeFrame('month')} className='text-[11px] dark:text-white text-black dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-300 dark:border'>By Month</Button>
          </div>
        </CardHeader>
        <CardContent className='mt-4'>
          <ResponsiveContainer width='100%' height={300}>
            <ChartContainer config = {chartConfig}>
              <LineChart data={groupedData}>
                <ChartTooltip cursor={false} content={<ChartTooltipContent/>}/>
                <XAxis dataKey='date'/>
                <YAxis/>
                <Tooltip/>
                <Line type='monotone' dataKey='count' stroke="#8884d8"/>
              </LineChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
};
