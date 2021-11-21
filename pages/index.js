import Head from 'next/head'
import Image from 'next/image'
import imgcastelli from '../public/castelli.png'
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

        <Image src={imgcastelli} width={200} height={200}></Image>


      </main>

    </div>



  )
}
