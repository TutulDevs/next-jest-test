import { Greeting } from "components/Max/Greeting";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Test - Jest - Max</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1 id="test-jest">Test Next Jest - From Max&apos;s Course</h1>

        <Greeting />
      </div>
    </>
  );
};

export default Home;
