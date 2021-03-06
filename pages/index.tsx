import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BREADCHAIN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/bread_favicon.png" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-green-700">Hello, World!</h1>
      </main>
    </div>
  );
};

export default Home;
