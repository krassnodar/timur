import styles from "./page.module.sass";
import MainSection from "@/components/MainSection/MainSection";
import AboutSection from "@/components/About/AboutSection";
import Head from "next/head";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Concultation from "@/components/Concultation/Concultation";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.main}>
        <MainSection />
        <AboutSection />
        <ServicesSection />
        <Concultation />
      </div>
    </>
  );
}
