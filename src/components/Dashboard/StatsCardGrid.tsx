import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

interface StatItem {
    value: string;
    label: string;
    icon?: boolean;
}

const statsData: StatItem[] = [
    { value: '900', label: 'total leads count' },
    { value: '12', label: 'days in average to convert lead' },
    { value: '30', label: 'inactive leads', icon: true },
];

const StatsCardGrid: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Other data</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-4xl font-semibold text-foreground tracking-tight">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1 flex items-center">
                {stat.label}
                {stat.icon && <Info className="h-3.5 w-3.5 ml-1.5 text-muted-foreground" />}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCardGrid;
