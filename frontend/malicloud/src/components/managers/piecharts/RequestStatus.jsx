import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pie, PieChart, Cell, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../../ui/chart';



const requestData = [
  {ID:48828, property: `Murang'a House`, issue_type: 'Electrical', request_date:'10/10/2024', priority_level:'urgent', status:'completed'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
  {ID:11118, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'completed'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'cancelled'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'new'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'completed'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'completed'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'new'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'new'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'cancelled'},
]


const COLORS = [' #424949 ', ' #388e3c',  '#b71c1c' , '#3f51b5']


export default function RequestStatus() {

    //process the data to count occurences of each status
    const statusCount = requestData.reduce((acc, item) => {
      const status = item.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    // convert the Counts into an array suitable for the piechart
    const chartData = Object.keys(statusCount).map(key => ({
      status: key,
      value: statusCount[key],
    }));

    const chartConfig = {
      status: {
        label : 'status'
      }
    }

  return (
    <div>
        <Card className='w-[420px] h-[300px] border-none'>
          <CardHeader className='p-2'>
            <CardTitle className='text-lg text-semibold text-center'>Proportion of requests by status</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={250}>
              <ChartContainer
              config={chartConfig}
              >
              <PieChart>
                <ChartTooltip
                content={<ChartTooltipContent/>}
                />
                <Pie
                data={chartData}
                cx='50%'
                cy='50%'
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey='value'
                nameKey='status'
                >
                  <LabelList
                  dataKey='status'
                  angle={-15}
                  stroke='none'
                  className='fill-background dark:text-white'
                  fontSize={9}
                  color='white'
                  fill='#ff7300'
                  />
                  {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
                </Pie>
                
                <Legend/>
              </PieChart>
              </ChartContainer>
              
            </ResponsiveContainer>
          </CardContent>
        </Card>
    </div>
  )
}
