import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '100',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <h2 className={inter.className}>Font features</h2>
    </div>
  );
}

