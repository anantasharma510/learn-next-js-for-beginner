import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '100',
  subsets: ['latin'],
});

export default function Home() {
  console.log(process.env.DB_Password)
  return (
    <div>
      {
        process.env.NODE_ENV === 'development' ? 
        <h1>Dev mode</h1>
        :
        <h1>Prod mode</h1>


      }
      <h1>Hello</h1>
      <h2 className={inter.className}>Font features</h2>

    </div>
  );
}

