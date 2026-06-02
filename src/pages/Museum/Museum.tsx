import { useNavigate } from 'react-router-dom'
import GlitchText from '../../components/GlitchText/GlitchText'
import styles from './Museum.module.css'

export default function Museum() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <GlitchText text="OUTATIME // EVENT DETAILS" className={styles.pageTitle} />
        <div className={styles.pageSubtitle}>External institution event — physical attendance required</div>
      </div>

      <div className={styles.manifestoWrapper}>
        <img
          src="/manifesto.png"
          alt="Outatime manifesto"
          className={styles.manifesto}
        />
      </div>

      <div className={styles.heroCard}>
        <div className={styles.heroTag}>MUSEO NAZIONALE DEL CINEMA // TORINO</div>
        <div className={styles.heroTitle}>Raw Human for Videomaking</div>
        <div className={styles.heroSlogan}>"Vivere davvero la vita dal vero"</div>

        <div className={styles.metaGrid}>
          {[
            { label: 'DATE', value: '2040.06.06 // FRIDAY' },
            { label: 'TIME', value: '15:00 — 18:00' },
            { label: 'LOCATION', value: 'Sala del Tempio, Mole Antonelliana' },
            { label: 'CFPA VALUE', value: '+3 CFPA (internship track)' },
            { label: 'AI ASSISTANCE', value: 'Not required — human-first approach encouraged' },
            { label: 'FORMAT', value: 'In-person masterclass // limited seats' },
          ].map((item) => (
            <div key={item.label} className={styles.metaItem}>
              <div className={styles.metaLabel}>{item.label}</div>
              <div className={styles.metaValue}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.descCard}>
        <div className={styles.descTitle}>ABOUT THIS MASTERCLASS</div>
        <p className={styles.descText}>
          A practical session on human-first creative vision in videomaking. Participants will engage in three hands-on activities inside the museum's exhibition spaces. AI assistance is not required — the goal is to re-train attention, rediscover the power of intentional observation, and build connections with peers outside the optimised task-loop.
        </p>
        <p className={styles.descText}>
          The session is hosted by Museo Nazionale del Cinema staff and accredited as an internship activity within the para-academic framework. Verified physical attendance required for CFPA credit.
        </p>
      </div>

      <div className={styles.aiWarning}>
        <span className={styles.aiWarningIcon}>⚠</span>
        <div>
          <div className={styles.aiWarningTitle}>IN-TIME AI ADVISORY</div>
          <div className={styles.aiWarningText}>
            Attending this event will delay task-001 by approximately 3 hours. However, the +3 CFPA gained offsets projected deficit by 30%. Net recommendation: attend if cognitive load permits.
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.btnPrimary}>
          REGISTER ATTENDANCE
        </button>
        <button className={styles.btnSecondary} onClick={() => navigate('/dashboard')}>
          ← BACK TO DASHBOARD
        </button>
      </div>
    </div>
  )
}