import { tasks } from '../../data/tasks'
import { courses } from '../../data/courses'
import TaskCard from '../../components/TaskCard/TaskCard'
import AIAssistant from '../../components/AIAssistant/AIAssistant'
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner'
import GlitchText from '../../components/GlitchText/GlitchText'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const activeCourses = courses.filter((c) => c.status === 'active')
  const totalCfpaEarned = courses.reduce((acc, c) => acc + c.cfpaEarned, 0)
  const totalCfpaRequired = courses
    .filter((c) => c.status === 'active')
    .reduce((acc, c) => acc + c.cfpaRequired, 0)

  const pendingTasks = tasks.filter((t) => t.status !== 'completed')

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <GlitchText text="IN-TIME // DASHBOARD" className={styles.pageTitle} />
          <div className={styles.pageSubtitle}>Para-Academic Unified Portal — session active</div>
        </div>
        <div className={styles.dateChip}>2040.06.06 // FRIDAY</div>
      </div>

      <NotificationBanner />

      <div className={styles.statRow}>
        {[
          { label: 'ACTIVE COURSES', value: String(activeCourses.length) },
          { label: 'PENDING TASKS', value: String(pendingTasks.length) },
          { label: 'CFPA EARNED', value: `${totalCfpaEarned}` },
          { label: 'COGNITIVE LOAD', value: '78%', alert: true },
        ].map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={`${styles.statValue} ${stat.alert ? styles.alert : ''}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.mainCol}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>TODAY'S TASKS</span>
            <span className={styles.sectionCount}>{pendingTasks.length} pending</span>
          </div>
          <div className={styles.taskList}>
            {pendingTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className={styles.sideCol}>
          <AIAssistant />
          <div className={styles.cfpaPanel}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>CFPA OVERVIEW</span>
            </div>
            {activeCourses.map((course) => {
              const pct = Math.round((course.cfpaEarned / course.cfpaRequired) * 100)
              return (
                <div key={course.id} className={styles.cfpaItem}>
                  <div className={styles.cfpaItemHeader}>
                    <span className={styles.cfpaItemTitle}>{course.title}</span>
                    <span className={styles.cfpaItemValue}>{course.cfpaEarned}/{course.cfpaRequired}</span>
                  </div>
                  <div className={styles.cfpaBar}>
                    <div className={styles.cfpaFill} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}