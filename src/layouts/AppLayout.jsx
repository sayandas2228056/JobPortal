import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Grid Background */}
      <div className="grid-background"></div>

      {/* Main Content */}
      <main className="relative flex-1 container mx-auto px-4">
        <Header />
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-6 text-center bg-black text-white mt-10">
        Made by Sayan.
      </footer>
    </div>
  );
};

export default AppLayout;
