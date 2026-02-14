import styles from "../styles/FloatingBlobs.module.css";

export default function FloatingBlobs() {
  return (
    <div className={styles.container}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
    </div>
  );
}
