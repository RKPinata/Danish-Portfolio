import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This Page is under construction 🛠️" />
        <p className="description">
          I'm still working on my site.
        </p>
      </main>

      <Footer />
    </div>
  )
}
