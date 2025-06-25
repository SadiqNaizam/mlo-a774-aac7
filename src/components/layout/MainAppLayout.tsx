import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * MainAppLayout defines the primary structure of the application interface,
 * consisting of a fixed sidebar, a header, and a main content area.
 * It uses a CSS Grid layout as specified in the requirements to arrange these elements.
 * The layout is composed of a sidebar with fixed width and a header with fixed height.
 * The main content area is scrollable.
 *
 * @param {MainAppLayoutProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be rendered in the main area.
 * @returns {JSX.Element} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background">
      {/* Sidebar: Spans both rows in the first column */}
      <div className="row-span-2 border-r">
        <Sidebar />
      </div>

      {/* Header: Placed automatically in the first row of the second column */}
      <Header />

      {/* Main Content: Placed automatically in the second row of the second column, with scrolling */}
      <main className="overflow-y-auto">
        <div className="px-4 py-6 md:px-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
