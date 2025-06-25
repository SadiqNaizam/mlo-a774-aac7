import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Tooltip as ShadTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

interface SourceData {
  name: string;
  value: number;
  amount: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 50, amount: 3000, percentage: 50, color: '#F2635F' },
  { name: 'Behance', value: 40, amount: 1000, percentage: 40, color: '#FFB03A' },
  { name: 'Instagram', value: 10, amount: 1000, percentage: 10, color: '#029494' },
  { name: 'Dribbble', value: 10, amount: 1000, percentage: 10, color: '#9CD1B2' },
];

const COLORS = ['#F2635F', '#FFB03A', '#029494', '#9CD1B2'];

const SourcesPieChart: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<'came' | 'converted' | 'size'>('converted' as const);

    return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        stroke="hsl(var(--background))"
                        strokeWidth={2}
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value}%`, name]} cursor={{fill: 'hsl(var(--muted))'}} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="space-y-3">
                {data.map((source) => (
                    <div key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 items-center text-sm">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: source.color }} />
                        <span className="text-foreground font-medium">{source.name}</span>
                        <span className="text-muted-foreground">${source.amount.toLocaleString()}</span>
                        <span className="text-muted-foreground w-10 text-right">{source.percentage}%</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
             <div className="flex items-center gap-1 bg-secondary p-1 rounded-lg">
                 <Button variant={activeTab === 'came' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('came')} className={cn(activeTab === 'came' ? 'bg-background text-foreground shadow' : 'text-muted-foreground', 'h-8 px-3')}>Leads came</Button>
                 <Button variant={activeTab === 'converted' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('converted')} className={cn(activeTab === 'converted' ? 'bg-background text-foreground shadow' : 'text-muted-foreground', 'h-8 px-3')}>Leads Converted</Button>
                 <Button variant={activeTab === 'size' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('size')} className={cn(activeTab === 'size' ? 'bg-background text-foreground shadow' : 'text-muted-foreground', 'h-8 px-3')}>Total deals size</Button>
            </div>
            <TooltipProvider>
                <ShadTooltip>
                    <TooltipTrigger asChild>
                         <Button variant="secondary" className="bg-gray-800 text-white text-xs px-2 py-1 h-auto rounded-full font-mono">
                            from leads total
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>This data is derived from the total leads.</p>
                    </TooltipContent>
                </ShadTooltip>
            </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChart;
