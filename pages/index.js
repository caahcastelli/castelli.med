import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Castelli.med</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Carolina Castelli
        </h1>

        <p className={styles.description}>
          A mais linda do mundo!
        </p>

      </main>

    </div>



  )
}
