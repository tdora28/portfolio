'use client';

import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import DecorText from '@/components/DecorText';

export default function Home() {
  return (
    <>
      <main className="container">
        {/* Title */}
        <h1 className={`${fontDisplay} text-3xl sm:text-4xl text-center shine-effect`}>
          Web Dev <span className="block text-6xl sm:text-9xl">Portfolio</span>
        </h1>
        {/* Big nav */}
        <nav className={`${fontDisplay} grid sm:grid-cols-3 gap-10 w-full max-w-[800px] sm:h-[40vh] mt-10 sm:mt-[15vh] mx-auto pb-10 sm:pb-0 text-4xl text-center overflow-hidden`}>
          <Link href="/about" className="grow py-8 bg-white clr-dark move-up bg-dots">
            About
          </Link>
          <Link href="/projects" className="grow py-8 bg-white clr-dark move-up bg-dots">
            Projects
          </Link>
          <Link href="/contact" className="grow py-8 bg-white clr-dark move-up bg-dots">
            Contact
          </Link>
        </nav>
      </main>

      {/* Decorative text in the background */}
      <DecorText text="Portfolio" />
    </>
  );
}
