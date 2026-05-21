import { courses } from '../../data/courses'
import GlitchText from '../../components/GlitchText/GlitchText'
import styles from './CV.module.css'

export default function CV() {
  const allEntries = courses.map((c) => ({
    id: c.id,
    title: c.title,
    institution: c.institution,
    date: c.endDate ?? c.startDate,
    cfpa: c.cfpaEarned,
    status: c.status,
    grade: c.grade,
    skills: c.skills,
  }))

  const totalCfpa = courses.reduce((acc, c) => acc + c.cfpaEarned, 0)

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <GlitchText text="CV BUILDER // CAREER LOG" className={styles.pageTitle} />
        <div className={styles.pageSubtitle}>Auto-generated from IN-TIME history — live sync enabled</div>
      </div>

      <div className={styles.profileCard}>
        <div className={styles.profileTop}>
          <div>
            <div className={styles.profileName}>USR_313686</div>
            <div className={styles.profileSub}>Para-Academic Student // Torino Node</div>
          </div>
          <div className={styles.cfpaTotal}>
            <div className={styles.cfpaTotalValue}>{totalCfpa}</div>
            <div className={styles.cfpaTotalLabel}>TOTAL CFPA</div>
          </div>
        </div>
        <div className={styles.skillCloud}>
          {Array.from(new Set(courses.flatMap((c) => c.skills))).map((skill) => (
            <span key={skill} className={styles.skillTag}>{skill}</span>
          ))}
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>EXPERIENCE LOG</span>
        </div>
        {allEntries.map((entry) => (
          <div key={entry.id} className={styles.entry}>
            <div className={styles.entryDot} />
            <div className={styles.entryContent}>
              <div className={styles.entryHeader}>
                <span className={styles.entryTitle}>{entry.title}</span>
                {entry.grade && <span className={styles.entryGrade}>{entry.grade}</span>}
              </div>
              <div className={styles.entryInstitution}>{entry.institution}</div>
              <div className={styles.entryMeta}>
                <span>{entry.date}</span>
                <span className={styles.entryCfpa}>+{entry.cfpa} CFPA</span>
              </div>
              <div className={styles.entrySkills}>
                {entry.skills.map((s) => (
                  <span key={s} className={styles.entrySkillTag}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}