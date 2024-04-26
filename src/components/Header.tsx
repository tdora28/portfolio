import React from 'react';
import Image from 'next/image';
import { fontDisplay } from '@/utilities/font';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav>
        <button>
          <Image src="/logo.png" alt="go to homepage" width={50} height={50} />
          <p className={fontDisplay}>Dora Tokai</p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
