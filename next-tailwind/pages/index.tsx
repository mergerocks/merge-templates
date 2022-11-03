import Head from 'next/head';
import { Button } from '../components/common';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <h1>Hello</h1>
        <Button>Hello</Button>
      </div>
    </>
  );
}
