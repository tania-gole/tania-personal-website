"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import styles from "../styles/Projects.module.css";

interface Project {
  title: string;
  tag: string;
  date: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  website: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "NU Circle",
    tag: "FULL STACK DEVELOPMENT ",
    date: "Oct 2025 \u2013 Nov 2025",
    description:
      "Built a production-ready, full-stack Q&A and community platform inspired by Stack Overflow, enhanced with real-time multiplayer trivia, gamification, and live messaging. Designed and deployed a scalable architecture using React, Express, MongoDB, and WebSockets with strong type safety and API validation.",
    highlights: [
      "Designed Controller → Service → Model architecture for clean backend separation of concerns",
      "Implemented real-time multiplayer trivia engine using Socket.IO with room-based state sync",
      "Built JWT-based authentication system with protected routes and bcrypt hashing",
      "Integrated OpenAPI validation middleware to enforce request/response schema correctness",
      "Developed gamified points, badges, streak tracking, and global leaderboard system",
      "Achieved full-stack type safety via shared TypeScript types across client and server",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "OpenAPI",
      "Cypress",
    ],
    github: "https://github.com/tania-gole/nucircle",
    website: "https://nucircle-client.vercel.app/",
    color: "#C76B98",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <SectionLabel text="Projects" />

        <h2 className={styles.heading}>Things I&apos;ve built</h2>
        <p className={styles.subtitle}>
          A mix of academic research, professional products, and passion projects, spanning AI/ML, full-stack development, and data systems.
        </p>

        {/* Accordion list */}
        <div className={styles.list}>
          {projects.map((project, i) => {
            const isOpen = expanded === i;

            return (
              <div
                key={i}
                className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                {/* Collapsed header */}
                <div className={styles.rowHeader}>
                  <div className={styles.rowLeft}>
                    <span className={styles.number}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.rowInfo}>
                      <h4 className={styles.title}>{project.title}</h4>
                      <div className={styles.rowMeta}>
                        <span
                          className={styles.tag}
                          style={{ color: project.color }}
                        >
                          {project.tag}
                        </span>
                        <span className={styles.date}>{project.date}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.expandBtn} ${isOpen ? styles.expandBtnOpen : ""}`}
                  >
                    <span className={styles.expandIcon}>+</span>
                  </div>
                </div>

                {/* Expandable content */}
                <div
                  className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}
                >
                  <div className={styles.contentInner}>
                    <p className={styles.description}>{project.description}</p>

                    {/* Key highlights */}
                    <div className={styles.highlightsSection}>
                      <span className={styles.highlightsLabel}>
                        Key Highlights
                      </span>
                      <ul className={styles.highlightsList}>
                        {project.highlights.map((h, j) => (
                          <li key={j} className={styles.highlightItem}>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech + GitHub row */}
                    <div className={styles.contentFooter}>
                      <div className={styles.techList}>
                        {project.tech.map((t, j) => (
                          <span
                            key={j}
                            className={styles.pill}
                            style={{
                              color: project.color,
                              background: `${project.color}14`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: project.color }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
