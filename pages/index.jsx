import styles from "../styles/Home.module.css";
import Tabuleiro from "@/components/Tabuleiro";

export default function Home() {
  return (
    <div clasName={styles.container}>
      <Tabuleiro />
    </div>
  );
}
