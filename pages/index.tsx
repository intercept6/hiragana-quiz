import type { NextPage } from "next";
import Head from "next/head";
import HiraganaQuiz from "../components/HiraganaQuiz";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ひらがな学習アプリ</title>
        <meta name="description" content="3歳の子供向けひらがな学習アプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HiraganaQuiz />
      </main>
    </div>
  );
};

export default Home;
