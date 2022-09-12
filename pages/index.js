import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Danish Teuku</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner />
    </div>
  )
}
