'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  useEffect(() => {
    setIsPageTransitioning(true);
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gradient-mesh flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className={`flex-grow ${isPageTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="page-transition">
            {children}
          </div>
        </main>
        <Footer />
      </div>
      
      {/* Vertical Navigation Sidebar */}
      <Navbar />
    </div>
  );
} 