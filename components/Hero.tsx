"use client";

import { useTyping } from "../hooks/useTyping";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import ResumeIcon from "./icons/ResumeIcon";
import EmailIcon from "./icons/EmailIcon";
import styles from "../styles/Hero.module.css";

const currentlyItems = [
  { icon: "< />", label: "Building", value: "full-stack AI applications at SHURU Technologies" },
  { icon: "🎓", label: "Graduating", value: "CS + AI at Northeastern" },
  { icon: "✦", label: "Exploring", value: "LLMs & transformers" },
];

export default function Hero() {
  const hello = useTyping("Hello, I'm", 90, 400);
  const name = useTyping("Tania", 120, 1600);

  return (
    <section className={styles.hero} id="hero">
      <p className={styles.subtitle}>
        {hello.displayed}
        {!hello.done && <span className="cursor" />}
      </p>

      <h1 className={styles.name}>
        {name.displayed}
        {hello.done && !name.done && <span className="cursor" />}
      </h1>

      {/* Social icons — GitHub, LinkedIn, Resume, Email */}
      <div
        className={`${styles.socials} ${name.done ? styles.socialsVisible : ""}`}
      >
        <a href="#" className={styles.socialBtn} aria-label="GitHub">
          <GitHubIcon size={18} />
        </a>
        <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
          <LinkedInIcon size={18} />
        </a>
        <a href="#" className={styles.socialBtn} aria-label="Resume">
          <ResumeIcon size={18} />
        </a>
        <a href="#contact" className={styles.socialBtn} aria-label="Email">
          <EmailIcon size={18} />
        </a>
      </div>

      {/* Blurb */}
      <p
        className={`${styles.tagline} ${name.done ? styles.taglineVisible : ""}`}
      >
        I love building things — but I love the &ldquo;why&rdquo; just as much
        as the &ldquo;how.&rdquo; I&apos;m the person who wants to understand
        the full picture before writing a single line of code. Give me a
        whiteboard, a team, and a problem worth solving, and I&apos;m in my
        element.
      </p>

      {/* Learn more */}
      <div
        className={`${styles.cta} ${name.done ? styles.ctaVisible : ""}`}
      >
        <a href="#about" className={styles.learnMore}>
          Learn more <span className={styles.arrow}>&rarr;</span>
        </a>
      </div>

      {/* Currently */}
      <div
        className={`${styles.currently} ${name.done ? styles.currentlyVisible : ""}`}
      >
        <div className={styles.currentlyHeader}>
          <span className={styles.currentlyLabel}>Currently I am</span>
        </div>
        <div className={styles.currentlyItems}>
          {currentlyItems.map((item, i) => (
            <div key={i} className={styles.currentlyItem}>
              <div className={styles.currentlyItemIcon}>{item.icon}</div>
              <span className={styles.currentlyItemLabel}>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
