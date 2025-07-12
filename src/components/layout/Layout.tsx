
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsTicker from '../sections/NewsTicker';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <NewsTicker />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
