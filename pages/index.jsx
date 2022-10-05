import Head from "next/head";

import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Base } from "../components/Base";
import { UnderConstruction } from "../components/UnderConstruction";

export default function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Base>
        <Navbar showMenu={false} />
        <UnderConstruction />
      </Base>
    </>
  );
}
