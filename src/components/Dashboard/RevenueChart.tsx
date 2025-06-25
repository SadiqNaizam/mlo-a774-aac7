import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const chartData = [
  { name: 'March', won: 65, lost: 68 },
  { name: 'April', won: 22, lost: 45 },
  { name: 'May', won: 64, lost: 38 },
  { name: 'June', won: 85, lost: 8 },
  { name: 'July', won: 70, lost: 42 },
  { name: 'August', won: 30, lost: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-card border rounded-md shadow-lg">
          <p className="label font-bold text-card-foreground">{`${label}`}</p>
          <p className="intro text-[#029494]">{`Closed won : ${payload[0].value}`}</p>
          <p className="intro text-[#D44D56]">{`Closed lost : ${payload[1].value}`}</p>
        </div>
      );
    }
    return null;
};

const RevenueChart: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<'came' | 'converted' | 'size'>('converted' as const);

    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="text-lg font-semibold">Leads tracking</CardTitle>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0 bg-secondary p-1 rounded-lg">
                         <Button variant={activeTab === 'came' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('came')} className={cn(activeTab === 'came' ? 'bg-background text-foreground shadow' : 'text-muted-foreground', 'h-8 px-3')}>Leads came</Button>
                         <Button variant={activeTab === 'converted' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('converted')} className={cn(activeTab === 'converted' ? 'bg-background text-foreground shadow' : 'text-muted-foreground', 'h-8 px-3')}>Leads Converted</Button>
                         <Button variant={activeTab === 'size' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('size')} className={cn(activeTab === 'size' ? 'bg-background text-foreground shadow' : 'text-muted-foreground', 'h-8 px-3')}>Total deals size</Button>
                    </div>
                </div>
                <div className="flex items-baseline gap-6 pt-4">
                    <div>
                        <span className="text-4xl font-bold">680</span>
                        <span className="text-muted-foreground ml-2">total closed</span>
                    </div>
                    <div>
                        <span className="text-4xl font-bold">70</span>
                        <span className="text-muted-foreground ml-2">total lost</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{ top: 5, right: 20, left: -10, bottom: 20 }}
                        >
                            <defs>
                                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#029494" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#029494" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#D44D56" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#D44D56" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                            <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
                            <Legend 
                                verticalAlign="bottom" 
                                iconType="circle"
                                wrapperStyle={{ paddingTop: '20px' }}
                            />
                            <Area type="monotone" dataKey="won" name="Closed won" stroke="#029494" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#029494', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6, strokeWidth: 2, fill: '#029494', stroke: 'hsl(var(--card))' }}/>
                            <Area type="monotone" dataKey="lost" name="Closed lost" stroke="#D44D56" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#D44D56', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6, strokeWidth: 2, fill: '#D44D56', stroke: 'hsl(var(--card))' }}/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default RevenueChart;
