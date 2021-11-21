import Head from 'next/head'
import Image from 'next/image'
import imgcastelli from '../public/castelli.png'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Castelli.med</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Carolina Castelli
        </h1>

        <Image src={imgcastelli} width={200} height={200}></Image>

        <Link href="http://eepurl.com/hGbpf9">
          <a className={styles.button}> Inscreva-se e receba novos materiais </a>
        </Link>

      </main>

    </div>



  )
}
