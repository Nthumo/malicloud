import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../../ui/chart';



const requestData = [
    {ID:48828, property: `Murang'a House`, issue_type: 'Electrical', request_date:'10/10/2024', priority_level:'urgent', status:'completed'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
    {ID:11118, property: `Fine House`, issue_type: 'HVAC', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
    {ID:11128, property: `Fine House`, issue_type: 'Safety', request_date:'10/11/2024', priority_level:'normal', status:'completed'},
    {ID:11128, property: `Fine House`, issue_type: 'Pest control', request_date:'10/11/2024', priority_level:'emergency', status:'cancelled'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'new'},
    {ID:11128, property: `Fine House`, issue_type: 'Repairs', request_date:'10/11/2024', priority_level:'normal', status:'completed'},
    {ID:11128, property: `Fine House`, issue_type: 'Repairs', request_date:'10/11/2024', priority_level:'emergency', status:'pending'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
    {ID:11128, property: `Fine House`, issue_type: 'Electrical', request_date:'10/11/2024', priority_level:'normal', status:'completed'},
    {ID:11128, property: `Fine House`, issue_type: 'Security', request_date:'10/11/2024', priority_level:'normal', status:'new'},
    {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/11/2024', priority_level:'emergency', status:'new'},
    {ID:11128, property: `Fine House`, issue_type: 'HVAC', request_date:'10/11/2024', priority_level:'normal', status:'pending'},
    {ID:11128, property: `Fine House`, issue_type: 'Safety', request_date:'10/11/2024', priority_level:'normal', status:'cancelled'},
  ]


  const issueTypeCount = requestData.reduce((acc, item) => {
    const issueType = item.issue_type;
    acc[issueType] = (acc[issueType] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(issueTypeCount).map(issueType => ({
    issue_type : issueType,
    count: issueTypeCount[issueType],
  }));

  const chartConfig = {
    issueType: {
        label: 'issue_type'
    }
  }

  console.log(chartData)
export default function IssueTypes() {
  return (
    <div>
         <Card className='w-[750px] h-[400px] border-none'>
          <CardHeader className='p-2'>
            <CardTitle className='text-lg text-semibold text-center'>Request issue types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
            <ChartContainer config={chartConfig}>
                <BarChart barGap={4} barCategoryGap='5%' data={chartData} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                    <ChartTooltip cursor={false} defaultIndex={1} content={<ChartTooltipContent/>}/>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey='issue_type' className='text-sm' axisLine={true} tickLine={false}/>
                <YAxis/>
                
                <Bar dataKey='count' fill='  #1e8449 ' barSize={40}/>
                </BarChart>
            </ChartContainer>
            </ResponsiveContainer>
          </CardContent>
        </Card>
    </div>
  )
}
