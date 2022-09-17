import Head from "next/head";

import { Header } from "../components/Header";
import { UnderConstruction } from "../components/UnderConstruction";

export default function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <main>
        <UnderConstruction />
      </main>
    </>
  );
}
