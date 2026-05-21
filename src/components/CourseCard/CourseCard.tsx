import { Course } from '../../types'
import styles from './CourseCard.module.css'

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const progress = Math.round((course.cfpaEarned / course.cfpaRequired) * 100)

  return (
    <div className={`${styles.card} ${course.status === 'completed' ? styles.completed : ''}`}>
      <div className={styles.header}>
        <span className={`${styles.statusBadge} ${styles[course.status]}`}>
          {course.status.toUpperCase()}
        </span>
        {course.grade && <span className={styles.grade}>{course.grade}</span>}
      </div>

      <div className={styles.title}>{course.title}</div>
      <div className={styles.institution}>{course.institution}</div>

      <div className={styles.cfpaRow}>
        <span className={styles.cfpaLabel}>CFPA</span>
        <span className={styles.cfpaValue}>{course.cfpaEarned} / {course.cfpaRequired}</span>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.skills}>
        {course.skills.map((skill) => (
          <span key={skill} className={styles.skill}>{skill}</span>
        ))}
      </div>

      {course.endDate && (
        <div className={styles.dates}>
          {course.startDate} → {course.endDate}
        </div>
      )}
    </div>
  )
}