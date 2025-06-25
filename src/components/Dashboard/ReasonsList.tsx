import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Reason {
  percentage: number;
  description: string;
}

const reasonsData: Reason[] = [
  { percentage: 40, description: 'The proposal is unclear' },
  { percentage: 20, description: 'However venture pursuit' },
  { percentage: 10, description: 'Other' },
  { percentage: 30, description: 'The proposal is unclear' },
];

const ReasonsList: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Reasons of leads lost</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-6">
          {reasonsData.map((reason, index) => (
            <div key={index}>
              <p className="text-4xl font-semibold text-foreground tracking-tight">{reason.percentage}%</p>
              <p className="text-sm text-muted-foreground mt-1">{reason.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReasonsList;
