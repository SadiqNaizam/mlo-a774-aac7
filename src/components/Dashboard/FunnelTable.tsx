import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  tooltip?: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '2 days', tooltip: 'average time on this stage', color: 'bg-indigo-900' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const FunnelTable: React.FC = () => {
  const totalCount = funnelData.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Funnel count</CardTitle>
        <div className="flex items-baseline pt-2">
            <p className="text-4xl font-bold">600</p>
            <p className="ml-2 text-muted-foreground">active leads</p>
        </div>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
            <div className="w-full mb-6">
                <div className="flex w-full h-2 rounded-full overflow-hidden bg-secondary">
                    {funnelData.map((stage, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <div
                                    className={cn("h-full transition-all duration-300", stage.color)}
                                    style={{ width: `${(stage.count / totalCount) * 100}%` }}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{stage.name}: {stage.count} leads</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </TooltipProvider>

        <div className="space-y-4">
          {funnelData.map((stage) => (
            <TooltipProvider key={stage.name} delayDuration={0}>
                 <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-4 text-sm">
                    <div className="flex items-center gap-3 w-36">
                        <span className={cn("h-2.5 w-2.5 rounded-full flex-shrink-0", stage.color)} />
                        <span className="font-medium text-foreground truncate">{stage.name}</span>
                    </div>
                    <span className="text-muted-foreground justify-self-end">{stage.count}</span>
                    <span className="text-muted-foreground justify-self-end">${stage.value.toLocaleString()}</span>
                    <Tooltip>
                        <TooltipTrigger asChild>
                           <span className="text-muted-foreground justify-self-end cursor-default">{stage.duration}</span>
                        </TooltipTrigger>
                        {stage.tooltip && <TooltipContent><p>{stage.tooltip}</p></TooltipContent>}
                    </Tooltip>
                </div>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelTable;
