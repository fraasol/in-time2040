import { useNavigate } from 'react-router-dom'
import { student } from '../../data/student'
import GlitchText from '../../components/GlitchText/GlitchText'
import styles from './Student.module.css'

export default function Student() {
  const navigate = useNavigate()

  const items = [
    { label: 'MATRICOLA', value: student.matricola, alert: false },
    { label: 'DATE OF BIRTH', value: student.dob, alert: false },
    { label: 'CITY', value: student.city, alert: false },
    { label: 'NODE', value: student.node, alert: false },
    { label: 'EMAIL', value: student.email, alert: false },
    { label: 'TOTAL CFPA', value: String(student.cfpaTotal), alert: false },
    { label: 'COGNITIVE LOAD', value: student.cognitiveLoad + ' / 100', alert: true },
    { label: 'ACCOUNT STATUS', value: student.status, alert: false },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <GlitchText text="STUDENT PROFILE" className={styles.pageTitle} />
        <div className={styles.pageSubtitle}>Para-academic identity record — IN-TIME v4.1.0</div>
      </div>

      <div className={styles.profileCard}>
        <div className={styles.avatarBlock}>
          <div className={styles.avatar}>
            {student.name[0]}{student.surname[0]}
          </div>
          <div className={styles.statusChip}>
            <span className={styles.statusDot} />
            {student.status}
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.fullName}>{student.name} {student.surname}</div>
          <div className={styles.username}>{student.username}</div>
          <div className={styles.bio}>{student.bio}</div>
        </div>
      </div>

      <div className={styles.dataGrid}>
        {items.map((item) => (
          <div key={item.label} className={styles.dataItem}>
            <div className={styles.dataLabel}>{item.label}</div>
            <div className={item.alert ? styles.dataValueAlert : styles.dataValue}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.socialCard}>
        <div className={styles.socialTitle}>SOCIAL PROFILES</div>
        <div className={styles.socialRow}>
          <div className={styles.socialItem}>
            <span className={styles.socialLabel}>INSTAGRAM</span>
            <a href={student.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              View profile →
            </a>
          </div>
          <div className={styles.socialItem}>
            <span className={styles.socialLabel}>IN-TIME NETWORK</span>
            <span className={styles.socialValue}>{student.email}</span>
          </div>
        </div>
      </div>

      <button className={styles.backBtn} onClick={() => navigate('/dashboard')}>
        BACK TO DASHBOARD
      </button>
    </div>
  )
}