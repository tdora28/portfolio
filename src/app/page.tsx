'use client';

import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import DecorText from '@/components/DecorText';

export default function Home() {
  return (
    <>
      {/* Height is calculated by subtracting fixed nav - 5rem */}
      <main className="container min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-28">
        {/* Title */}
        <h1 className={`${fontDisplay} text-3xl sm:text-4xl text-center`}>
          Web Dev <span className="block text-6xl sm:text-9xl">Portfolio</span>
        </h1>
        {/* Big nav */}
        <nav className={`${fontDisplay} grid sm:grid-cols-3 gap-10 w-full max-w-[800px] sm:h-[40vh] mt-10 sm:mt-[15vh] mx-auto pb-10 sm:pb-0 text-4xl text-center overflow-hidden`}>
          <Link href="/about" className="py-8 bg-white clr-dark move-up bg-dots">
            About
          </Link>
          <Link href="/projects" className="py-8 bg-white clr-dark move-up bg-dots">
            Projects
          </Link>
          <Link href="/contact" className="py-8 bg-white clr-dark move-up bg-dots">
            Contact
          </Link>
        </nav>
      </main>

      {/* Decorative text in the background */}
      <DecorText text="Portfolio" />
    </>
  );
}
