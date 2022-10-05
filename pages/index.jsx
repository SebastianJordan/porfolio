import Head from "next/head";

import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Base } from "../components/Base";
import { HeaderMain } from "../components/HeaderMain";

export default function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Base>
        <Navbar showMenu={false} />
        <HeaderMain />
      </Base>
    </>
  );
}
