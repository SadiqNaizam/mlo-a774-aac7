import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Calendar as CalendarIcon, Sun, Moon } from 'lucide-react';

const TopHeader: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="flex items-center justify-between h-16 px-6 border-b bg-background">
      <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <div className="ml-8 flex items-center gap-x-1 border-b-2 border-primary pb-1">
            <a href="#" className="px-3 py-1 text-sm font-semibold text-primary">Sales</a>
            <a href="#" className="px-3 py-1 text-sm font-semibold text-primary">Leads</a>
          </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span className="text-sm font-medium">last 6 months</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            <DropdownMenuItem>Last 3 months</DropdownMenuItem>
            <DropdownMenuItem>Last 6 months</DropdownMenuItem>
            <DropdownMenuItem>Last 12 months</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Create
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Customer</DropdownMenuItem>
            <DropdownMenuItem>New Proposal</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;