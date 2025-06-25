import React from 'react';
import { CircleDot } from 'lucide-react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Renders the main sidebar for the application.
 * It includes a header with a logo and the main navigation links.
 * The sidebar has a fixed width of w-56 (224px) as per the layout requirements.
 */
const Sidebar: React.FC = () => {
  return (
    // The parent grid layout relies on this component's fixed width.
    <aside className={cn("w-56 flex h-full flex-col bg-card text-card-foreground")}>
      <div className="flex h-16 shrink-0 items-center border-b px-4">
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="bg-foreground text-background p-1.5 rounded-md">
            <CircleDot className="h-5 w-5" />
          </div>
          <span>Sales Dash</span>
        </a>
      </div>
      <div className="flex-1 overflow-y-auto">
        <SidebarNav />
      </div>
    </aside>
  );
};

export default Sidebar;
