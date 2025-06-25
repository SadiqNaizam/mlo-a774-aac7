import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelTable from '../components/Dashboard/FunnelTable';
import SourcesPieChart from '../components/Dashboard/SourcesPieChart';
import RevenueChart from '../components/Dashboard/RevenueChart';
import ReasonsList from '../components/Dashboard/ReasonsList';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';

/**
 * Renders the main Dashboard Overview page.
 * This page assembles various dashboard components into a cohesive grid layout,
 * all wrapped within the application's main layout structure.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="grid grid-cols-1 lg:grid-cols-5 auto-rows-max gap-6">
        {/* Top Row: Funnel and Sources charts */}
        <div className="lg:col-span-3">
          <FunnelTable />
        </div>
        <div className="lg:col-span-2">
          <SourcesPieChart />
        </div>

        {/* Middle Row: Main revenue tracking chart */}
        <div className="lg:col-span-5">
          <RevenueChart />
        </div>

        {/* Bottom Row: Lost reasons and other stats */}
        <ReasonsList className="lg:col-span-3" />
        <StatsCardGrid className="lg:col-span-2" />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
