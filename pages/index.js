import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sebasti&aacute;n Jord&aacute;n</title>
        <meta name="description" content="Personal web page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>My web site is coming soon</h2>
        <iframe src="https://giphy.com/embed/o0vwzuFwCGAFO" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-hacker-webs-o0vwzuFwCGAFO">via GIPHY</a></p>
      </main>
    </div>
  )
}
