import { useNavigate, useParams } from 'react-router-dom'
import { courses } from '../../data/courses'
import { tasks } from '../../data/tasks'
import GlitchText from '../../components/GlitchText/GlitchText'
import TaskCard from '../../components/TaskCard/TaskCard'
import styles from './CourseDetail.module.css'

export default function CourseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const course = courses.find((c) => c.id === id)
  if (!course) {
    return (
      <div style={{ padding: '40px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
        COURSE NOT FOUND — <span style={{ cursor: 'pointer', color: 'var(--accent-cyan)' }} onClick={() => navigate('/courses')}>go back</span>
      </div>
    )
  }

  const courseTasks = tasks.filter((t) => t.course === course.title)
  const progress = Math.round((course.cfpaEarned / course.cfpaRequired) * 100)

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <GlitchText text={course.title.toUpperCase()} className={styles.pageTitle} />
        <div className={styles.pageSubtitle}>{course.institution}</div>
      </div>

      <div className={styles.summaryCard}>
        <div className={styles.summaryRow}>
          <div className={styles.summaryItem}>
            <div className={styles.summaryLabel}>STATUS</div>
            <div className={`${styles.summaryValue} ${styles[course.status]}`}>
              {course.status.toUpperCase()}
            </div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryLabel}>CFPA</div>
            <div className={styles.summaryValue}>{course.cfpaEarned} / {course.cfpaRequired}</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryLabel}>PROGRESS</div>
            <div className={styles.summaryValue}>{progress}%</div>
          </div>
          {course.grade && (
            <div className={styles.summaryItem}>
              <div className={styles.summaryLabel}>GRADE</div>
              <div className={styles.summaryValue} style={{ color: 'var(--accent-green)' }}>{course.grade}</div>
            </div>
          )}
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>

        <div className={styles.dates}>
          <span>START: {course.startDate}</span>
          {course.endDate && <span>END: {course.endDate}</span>}
        </div>
      </div>

      <div className={styles.skillsCard}>
        <div className={styles.sectionTitle}>SKILLS</div>
        <div className={styles.skillList}>
          {course.skills.map((skill) => (
            <span key={skill} className={styles.skillTag}>{skill}</span>
          ))}
        </div>
      </div>

      {courseTasks.length > 0 && (
        <div className={styles.tasksSection}>
          <div className={styles.sectionTitle}>TASKS — {courseTasks.length} total</div>
          <div className={styles.taskList}>
            {courseTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      )}

      {courseTasks.length === 0 && (
        <div className={styles.noTasks}>
          No tasks assigned for this course.
        </div>
      )}

      <button className={styles.backBtn} onClick={() => navigate('/courses')}>
        ← BACK TO COURSES
      </button>
    </div>
  )
}