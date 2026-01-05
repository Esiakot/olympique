import styles from "./page.module.css";
import Stats from "@/components/Stats";
import MainElement from "@/components/MainElement";
import Header from "@/components/Common/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <MainElement />
      <Stats />
    </div>
  );
}
