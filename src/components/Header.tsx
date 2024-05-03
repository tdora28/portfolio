'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import { VscColorMode } from 'react-icons/vsc';
import Socials from './Socials';
import { usePathname } from 'next/navigation';
import { FaAlignRight } from 'react-icons/fa';

const Header = () => {
  const path = usePathname();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const setMobileNavClass = () => {
    if (isMobileNavOpen) {
      return 'sm:hidden absolute top-[100%] right-0 p-10 bg-white text-black';
    } else {
      return 'hidden';
    }
  };

  return (
    <header className="container container-wide relative flex justify-between py-4">
      {/* Left side of Header */}
      <Link href="/" className="flex items-center gap-4 scale-up">
        <Image src="/logo.png" alt="go to homepage" width={50} height={50} />
        <span className={`${fontDisplay} text-2xl sm:text-3xl`}>Dora Tokai</span>
      </Link>

      {/* Right side of Header */}
      <div className="flex items-center gap-4">
        {/* Socials */}
        <div className={path === '/' ? '' : 'hidden'}>
          <Socials />
        </div>
        {/* Navigation */}
        <nav className={path === '/' ? 'hidden' : 'hidden sm:block'}>
          <ul className="flex gap-4 uppercase">
            <li>
              <Link href="/about" className={path === '/about' ? 'underline underline-offset-4' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={path === '/projects' ? 'underline underline-offset-4' : ''}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className={path === '/contact' ? 'underline underline-offset-4' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Color mode toggle */}
        <VscColorMode className="text-2xl" />
        {/* Mobile menu */}
        <button onClick={toggleMobileNav}>
          <FaAlignRight className={path === '/' ? 'hidden' : 'sm:hidden text-2xl'} />
        </button>
        <nav className={path === '/' ? 'hidden' : setMobileNavClass()}>
          <ul className="flex flex-col gap-4 text-right uppercase">
            <li>
              <Link href="/about" className={path === '/about' ? 'underline underline-offset-4' : ''} onClick={toggleMobileNav}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={path === '/projects' ? 'underline underline-offset-4' : ''} onClick={toggleMobileNav}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className={path === '/contact' ? 'underline underline-offset-4' : ''} onClick={toggleMobileNav}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
