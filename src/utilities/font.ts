import { Staatliches } from 'next/font/google';

// Define the font display class name (Staatliches Google font)
const staatliches = Staatliches({ subsets: ['latin'], weight: ['400'] });
const fontDisplay = staatliches.className;

export { fontDisplay };
