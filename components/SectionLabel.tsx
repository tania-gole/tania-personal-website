import styles from "../styles/SectionLabel.module.css";

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className={styles.label}>
      <div className={styles.line} />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
