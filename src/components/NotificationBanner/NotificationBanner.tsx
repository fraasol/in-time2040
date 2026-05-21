import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NotificationBanner.module.css'

export default function NotificationBanner() {
  const [dismissed, setDismissed] = useState(false)
  const navigate = useNavigate()

  if (dismissed) return null

  return (
    <div className={styles.banner}>
      <div className={styles.pulse} />
      <div className={styles.content}>
        <span className={styles.from}>MUSEO NAZIONALE DEL CINEMA</span>
        <span className={styles.text}>
          OUTATIME // Raw Human for Videomaking — +3 CFPA —{' '}
          <span className={styles.cta} onClick={() => navigate('/museum')}>
            View details →
          </span>
        </span>
      </div>
      <button className={styles.close} onClick={() => setDismissed(true)} aria-label="Dismiss">✕</button>
    </div>
  )
}