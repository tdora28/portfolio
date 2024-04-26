'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const path = usePathname();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={path === '/' ? 'hidden' : 'container py-5 text-center'}>
      <small>&copy; {getCurrentYear()} TDora28. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
