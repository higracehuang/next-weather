import SearchBox from "@/components/SearchBox";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>WeatherWise</title>
    </Head>
    <main>
      <h1>Weatherwise</h1>
      <form>
        <h2>Search for local weather</h2>
        <SearchBox />
      </form>
    </main>
    </>
  )
}