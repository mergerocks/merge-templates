import Head from 'next/head';
import { Button } from '../components/common';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <h1>Home Page</h1>
        <Button>Button</Button>
      </div>
    </>
  );
}
