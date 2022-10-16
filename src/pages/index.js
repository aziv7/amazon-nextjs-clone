import Head from 'next/head';
import { Banner, Header } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        {/**Banner */}
        <Banner />
        {/**Products */}
      </main>
    </div>
  );
}
