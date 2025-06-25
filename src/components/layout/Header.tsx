import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Renders the main application header.
 * This component acts as a structural wrapper around the TopHeader component,
 * which contains the page title, navigation tabs, and action buttons.
 * The height is defined within the TopHeader component (h-16).
 */
const Header: React.FC = () => {
  return (
    <header>
      <TopHeader />
    </header>
  );
};

export default Header;
