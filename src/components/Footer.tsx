'use client';

import React from 'react';
import Socials from './Socials';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const path = usePathname();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={path === '/' ? 'hidden' : 'container flex flex-col items-center gap-2 py-5 text-center'}>
      <Socials />
      <small>&copy; {getCurrentYear()} TDora28. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
