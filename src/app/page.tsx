'use client';

import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="container">
        {/* Title */}
        <h1 className={`${fontDisplay} text-4xl text-center shine-effect`}>
          Web Dev <span className="block text-9xl">Portfolio</span>
        </h1>
        {/* Big nav */}
        <nav className={`${fontDisplay} grid grid-cols-3 gap-10 w-full max-w-[800px] h-[40vh] mt-[15vh] mx-auto text-4xl text-center overflow-hidden`}>
          <Link href="/about" className="grow py-8 bg-white clr-dark move-up">
            About
          </Link>
          <Link href="/work" className="grow py-8 bg-white clr-dark move-up">
            Work
          </Link>
          <Link href="/contact" className="grow py-8 bg-white clr-dark move-up">
            Contact
          </Link>
        </nav>
      </main>

      {/* Decorative text in the background */}
      <div className={`${fontDisplay} fixed top-[10vh] left-[50%] translate-x-[-50%] z-[-1] text-[30vw] opacity-10`}>Portfolio</div>
    </>
  );
}
