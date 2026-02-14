import FloatingBlobs from "../components/FloatingBlobs";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import styles from "./Page.module.css";

export default function Home() {
  return (
    <>
      <FloatingBlobs />
      <div className={styles.main}>
        <Navbar />
        <Hero />
        <div className="accentLine" />
      </div>
    </>
  );
}
