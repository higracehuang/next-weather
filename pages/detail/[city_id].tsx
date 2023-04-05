import Head from "next/head";
import Link from "next/link";

export default function() {
  return (
    <>
      <Head>
        <title>WeatherWise</title>
      </Head>
      <main>
        <div className="container">
          <Link href="/">
            &larr; Home
          </Link>
        </div>
      </main>
    </>  
  )
}