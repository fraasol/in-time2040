import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { notifications } from '../../data/notifications'
import styles from './Navbar.module.css'

interface NavbarProps {
  onMenuToggle: () => void
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [time, setTime] = useState('')
  const [showNotifs, setShowNotifs] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const unread = notifications.filter((n) => !n.read).length

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const s = String(now.getSeconds()).padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const museumNotif = notifications.find((n) => n.type === 'museum')

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={onMenuToggle} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <div className={styles.logo} onClick={() => navigate('/dashboard')}>
          <span className={styles.logoText}>IN-TIME</span>
          <span className={styles.logoBadge}>v4.1.0</span>
        </div>
      </div>

      <div className={styles.center}>
        <span className={styles.systemLabel}>PARA-ACADEMIC UNIFIED PORTAL</span>
      </div>

      <div className={styles.right}>
        <div className={styles.clock}>{time} // 2040.06.06</div>

        <div className={styles.notifWrapper}>
          <button
            className={styles.notifBtn}
            onClick={() => setShowNotifs(!showNotifs)}
            aria-label="Notifications"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            {unread > 0 && <span className={styles.badge}>{unread}</span>}
          </button>

          {showNotifs && (
            <div className={styles.notifDropdown}>
              <div className={styles.notifHeader}>
                <span>NOTIFICATIONS</span>
                <span className={styles.notifCount}>{unread} UNREAD</span>
              </div>
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`${styles.notifItem} ${n.special ? styles.notifSpecial : ''} ${n.read ? styles.notifRead : ''}`}
                  onClick={() => {
                    if (n.type === 'museum') {
                      navigate('/museum')
                      setShowNotifs(false)
                    }
                  }}
                >
                  <div className={styles.notifFrom}>{n.from}</div>
                  <div className={styles.notifTitle}>{n.title}</div>
                  <div className={styles.notifTime}>{n.time}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.userChip} onClick={() => navigate('/student')} style={{ cursor: 'pointer' }}>
          <span className={styles.userDot} />
          <span>USR_313686</span>
        </div>
      </div>
    </nav>
  )
}