import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'TDora Portfolio',
  description: 'Web developer portfolio of Dora Tokai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
