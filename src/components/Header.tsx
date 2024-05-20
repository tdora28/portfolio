'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import Socials from './Socials';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsMobileNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const setMobileNavClass = () => {
    if (isMobileNavOpen) {
      return 'sm:hidden absolute top-[100%] right-[2rem] px-10 py-7 bg-white text-black rounded-md';
    } else {
      return 'hidden';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-between px-10 py-4">
      {/* Left side of Header */}
      <Link href="/" className="flex items-center gap-4 indent">
        <Image src="/logo.png" alt="go to homepage" width={50} height={50} />
        <span className={`${fontDisplay} text-xl sm:text-3xl`}>Dora Tokai</span>
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
              <Link href="/about" className={path === '/about' ? 'nav-link-active' : 'block indent'}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={path === '/projects' ? 'nav-link-active' : 'block indent'}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={path === '/contact' ? 'nav-link-active' : 'block indent'}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Color mode toggle */}
        {/* <VscColorMode className="text-2xl" /> */}
        {/* Mobile menu */}
        <button onClick={toggleMobileNav}>{isMobileNavOpen ? <VscChromeClose className={path === '/' ? 'hidden' : 'sm:hidden text-2xl'} /> : <VscMenu className={path === '/' ? 'hidden' : 'sm:hidden text-2xl'} />}</button>
        <nav ref={navRef} className={path === '/' ? 'hidden' : setMobileNavClass()}>
          <ul className="flex flex-col gap-4 text-center uppercase">
            <li>
              <Link href="/" className={path === '/' ? 'nav-link-active' : ''} onClick={toggleMobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={path === '/about' ? 'nav-link-active' : ''} onClick={toggleMobileNav}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={path === '/projects' ? 'nav-link-active' : ''} onClick={toggleMobileNav}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={path === '/contact' ? 'nav-link-active' : ''} onClick={toggleMobileNav}>
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
