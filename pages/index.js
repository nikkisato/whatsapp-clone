import Head from 'next/head';
import styles from 'styled-components';
import Sidebar from '../components/Sidebar';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WhatsApp 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Sidebar />
    </div>
  );
}
