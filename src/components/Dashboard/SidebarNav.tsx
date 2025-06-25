import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  FileStack,
  ShoppingBasket,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const navItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
  { href: '#', label: 'Leads', icon: Users },
  { href: '#', label: 'Customers', icon: User },
  { href: '#', label: 'Proposals', icon: FileText },
  { href: '#', label: 'Invoices', icon: FileStack },
  { href: '#', label: 'Items', icon: ShoppingBasket },
  { href: '#', label: 'Mail', icon: Mail },
  { href: '#', label: 'Shoebox', icon: Archive },
  { href: '#', label: 'Calendar', icon: Calendar },
];

const helpItems: NavItem[] = [
  { href: '#', label: 'Help', icon: HelpCircle },
  { href: '#', label: 'Settings', icon: Settings },
];

const SidebarNav: React.FC = () => {
  return (
    <nav className="flex flex-col h-full p-2">
      <div className="flex-1 space-y-1 py-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center px-3 py-2 text-sm font-medium rounded-md',
              item.active
                ? 'bg-secondary text-primary'
                : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
            )}
          >
            <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
            {item.label}
          </a>
        ))}
      </div>
      <div className="mt-auto space-y-1 py-2">
        {helpItems.map((item) => (
           <a
            key={item.label}
            href={item.href}
            className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground rounded-md"
          >
            <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SidebarNav;
