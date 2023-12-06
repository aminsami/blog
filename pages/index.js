import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>part123!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
    http://propelabu.org/w/index.php?majaleh
        <p className="description">
          part123<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
