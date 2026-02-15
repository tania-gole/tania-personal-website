import SectionLabel from "./SectionLabel";
import styles from "../styles/About.module.css";

/* ─── Types ─── */
interface Experience {
  company: string;
  role: string;
  date: string;
  location?: string;
  description?: string;
  bullets: string[];
  color: string;
}

interface SkillGroup {
  category: string;
  items: string;
}

interface School {
  name: string;
  location: string;
  degree: string;
  minor: string;
  detail?: string;
  date: string;
  score: string;
}

/* ─── Data ─── */
const experience: Experience[] = [
  {
    company: "SHURU Technologies",
    role: "AI Product Engineer",
    date: "Jan 2026 — Present",
    location: "Remote",
    description:
      "Building core UI for Pickup Coffee's in-house promotions & loyalty platform powering scalable mobile growth.",
    bullets: [
      "Shipped production React/TypeScript/Tailwind features for a 400+ store consumer brand",
      "Architected reusable UI components for promotions, campaigns, and loyalty flows",
      "Improved state management and performance across complex rule-based interfaces",
      "Collaborated cross-functionally to translate product requirements into scalable frontend systems",
    ],
    color: "#C76B98",
  },
  {
    company: "Wellington Management",
    role: "Global Risk & Analytics Co-op",
    date: "Jan 2025 — Jun 2025",
    location: "Boston, MA · On-site",
    description:
      "Global Investment Risk team supporting Equities, Alternatives, and Multi-Asset strategies with reporting and scenario analysis.",
    bullets: [
      "Owned BD+5 hedge fund performance reporting for ~15 funds across multiple strategies",
      "Automated VaR and volatility reporting (ex-ante/ex-post) for APAC portfolios",
      "Maintained and enhanced Tableau dashboards used as firm-wide monitoring hubs",
      "Built stress-testing notebooks across derivatives and multi-asset portfolios",
      "Linked macro market movements to portfolio risk in weekly investment commentary",
    ],
    color: "#D4789E",
  },
  {
    company: "Bain Capital",
    role: "Business Systems Analyst Co-op",
    date: "Jan 2024 — Jun 2024",
    location: "Boston, MA · On-site",
    description:
      "Real Estate Finance team improving reporting scalability, data integrity, and operational controls.",
    bullets: [
      "Designed rule-based SQL reporting framework across 300+ investor entities",
      "Standardized inclusion logic and cleaned entity hierarchies with investment teams",
      "Reconciled 5,000+ records during DealStar → Workday system migration",
      "Analyzed vendor compliance data requirements for JV and third-party risk workflows",
      "Reduced reporting friction by eliminating hardcoded lists and manual dependencies",
    ],
    color: "#E8A0BF",
  },
];

const technicalSkills: SkillGroup[] = [
  { category: "Languages", items: "Python, TypeScript, JavaScript, Java, SQL, Go" },
  { category: "Frontend", items: "React, Next.js, HTML/CSS, Tailwind, Zustand" },
  { category: "Backend", items: "Node.js, Express, REST APIs, GraphQL" },
  { category: "AI & ML", items: "PyTorch, TensorFlow, Hugging Face, LLMs, NLP, Computer Vision" },
  { category: "Data", items: "Pandas, NumPy, Scikit-learn, Jupyter, Data Pipelines, Statistical Modeling" },
  { category: "Tools", items: "Git, MongoDB, PostgreSQL, Docker, AWS, Jest, Cypress, Figma" },
];

const businessSkills: SkillGroup[] = [
  { category: "Product", items: "User Research, Wireframing, A/B Testing, Roadmapping, PRDs" },
  { category: "Strategy", items: "Market Analysis, Competitive Research, Business Modeling" },
  { category: "Process", items: "Agile/Scrum, Cross-functional Collaboration, Stakeholder Management" },
  { category: "Communication", items: "Technical Writing, Presentations, Data Storytelling" },
  { category: "Foreign Languages", items: "English, Hindi, Spanish" },
];

const schools: School[] = [
  {
    name: "Northeastern University",
    location: "Boston, Massachusetts, United States",
    degree: "Bachelor of Science in Computer Science (AI Concentration)",
    minor: "Minor: Business Administration",
    detail:
      "Relevant Coursework: Artificial Intelligence, Machine Learning I & II, Software Engineering, NLP, OOD, Algorithms & Data",
    date: "Sep 2021 — Dec 2025",
    score: "GPA: 3.4 / 4.0",
  },
  {
    name: "United World College of South East Asia",
    location: "Singapore",
    degree: "International Baccalaureate Diploma",
    minor: "",
    detail:
      "HL: Computer Science, Economics, Dance | SL: Math AA, Spanish ab initio, English Lang & Lit",
    date: "Aug 2019 — May 2021",
    score: "IB Score: 40 / 45",
  },
];


/* ─── Component ─── */
export default function About() {
  return (
    <div className={styles.page}>
      {/* ── Intro + Education side by side ── */}
      <section className={styles.section}>
        <div className={styles.introEducationRow}>
          {/* Left: About me */}
          <div className={styles.introSide}>
            <SectionLabel text="INTRODUCTION" />
            <div className={styles.introContent}>
              <div className={styles.photoCircle}>Your photo</div>
              <h2 className={styles.heading}>A bit about me</h2>
              <p className={styles.introText}>
                I&apos;m a product-focused engineer who&apos;s excited by how AI and thoughtful design can work together. 
                I care about building systems that are both smart and practical. I&apos;m most energized by turning complex problems into simple, intuitive solutions.
              </p>
            </div>
          </div>

          {/* Right: Mini education timeline */}
          <div className={styles.eduSide}>
            <SectionLabel text="Education" />
            <div className={styles.eduTimeline}>
              <div className={styles.eduTimelineLine} />
              {schools.map((s, i) => (
                <div key={i} className={styles.eduTimelineRow}>
                  <div
                    className={styles.eduDot}
                    style={{
                      background: i === 0 ? "#C76B98" : "#E8A0BF",
                      boxShadow: `0 0 0 3px var(--color-bg), 0 0 0 5px ${i === 0 ? "#C76B9833" : "#E8A0BF33"}`,
                    }}
                  />
                  <div className={styles.eduCard}>
                    <span className={styles.eduDate}>{s.date}</span>
                    <h4 className={styles.schoolName}>{s.name}</h4>
                    <p className={styles.detailText}>{s.location}</p>
                    <p className={styles.degreeText}>{s.degree}</p>
                    {s.minor && <p className={styles.degreeText}>{s.minor}</p>}
                    {s.detail && <p className={styles.detailText}>{s.detail}</p>}
                    <p className={styles.scoreText}>{s.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills — two columns ── */}
      <section className={styles.section}>
        <SectionLabel text="Skills" />
        <div className={styles.twoCol}>
          <div className={`${styles.card} ${styles.cardFirst}`}>
            <h3 className={styles.cardTitle}>Technical Skills</h3>
            <div className={styles.skillsList}>
              {technicalSkills.map((s, i) => (
                <div key={i} className={styles.skillRow}>
                  <span className={styles.skillCategory}>{s.category}</span>
                  <span className={styles.skillItems}>{s.items}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardSecond}`}>
            <h3 className={styles.cardTitle}>Business Skills</h3>
            <div className={styles.skillsList}>
              {businessSkills.map((s, i) => (
                <div key={i} className={styles.skillRow}>
                  <span className={styles.skillCategory}>{s.category}</span>
                  <span className={styles.skillItems}>{s.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience — Staggered Timeline ── */}
      <section className={styles.sectionLast}>
        <SectionLabel text="Experience" />
        <div className={styles.timeline}>
          {/* Center connector line */}
          <div className={styles.timelineLine} />

          {experience.map((exp, i) => (
            <div
              key={i}
              className={`${styles.timelineRow} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
            >
              {/* Dot on center line */}
              <div
                className={styles.timelineDot}
                style={{
                  background: exp.color,
                  boxShadow: `0 0 0 4px var(--color-bg), 0 0 0 6px ${exp.color}33`,
                }}
              />

              {/* Card */}
              <div className={styles.timelineCard}>
                <span className={styles.expDate}>{exp.date}</span>
                <h3 className={styles.companyName}>{exp.company}</h3>
                {exp.location && (
                  <p className={styles.detailText}>{exp.location}</p>
                )}
                <p className={styles.roleName}>{exp.role}</p>
                {exp.description && (
                  <p className={styles.expDescription}>{exp.description}</p>
                )}
                <ul className={styles.expBullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} className={styles.expBullet}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="accentLine" />
    </div>
  );
}
