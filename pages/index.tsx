import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HiraganaQuiz from '../components/HiraganaQuiz';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ひらがな学習アプリ</title>
        <meta name="description" content="3歳の子供向けひらがな学習アプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ひらがなをおぼえよう！
        </h1>
        <HiraganaQuiz />
      </main>
    </div>
  );
};

export default Home;