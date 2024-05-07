import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex gap-4 text-2xl">
      <Link href="https://www.linkedin.com/in/doratokai28/" className="indent">
        <FaLinkedinIn />
      </Link>
      <Link href="https://github.com/tdora28/" className="indent">
        <FaGithub />
      </Link>
    </div>
  );
};

export default Socials;
