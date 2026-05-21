import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: '⬡' },
  { path: '/courses', label: 'Courses', icon: '◈' },
  { path: '/cv', label: 'CV Builder', icon: '◎' },
  { path: '/museum', label: 'Outatime Event', icon: '◆' },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.section}>
          <div className={styles.sectionLabel}>NAVIGATION</div>
          <nav>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ''}`
                }
                onClick={onClose}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>INSTITUTIONS</div>
          <div className={styles.institutionList}>
            {['PoliMedia Institute', 'SynthLearn Academy', 'NetWork Para-Academy', 'Open Academic Network'].map((inst) => (
              <div key={inst} className={styles.institution}>{inst}</div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerRow}>
            <span className={styles.footerLabel}>COGNITIVE LOAD</span>
            <span className={styles.footerValue} style={{ color: 'var(--stress-high)' }}>78 / 100</span>
          </div>
          <div className={styles.loadBar}>
            <div className={styles.loadFill} style={{ width: '78%' }} />
          </div>
          <div className={styles.footerNote}>IN-TIME AI recommends a low-stimulation block</div>
        </div>
      </aside>
    </>
  )
}