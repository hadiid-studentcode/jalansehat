import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>JalanSehat | Home</title>
      </Head>
      <h1 className={`${styles.textcolor} p-2`}>Hello World</h1>


    </>
  );
}
