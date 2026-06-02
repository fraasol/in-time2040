import { useNavigate } from 'react-router-dom'
import { courses } from '../../data/courses'
import CourseCard from '../../components/CourseCard/CourseCard'
import GlitchText from '../../components/GlitchText/GlitchText'
import styles from './Courses.module.css'

export default function Courses() {
  const navigate = useNavigate()
  const active = courses.filter((c) => c.status === 'active')
  const completed = courses.filter((c) => c.status === 'completed')

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <GlitchText text="COURSES // REGISTRY" className={styles.pageTitle} />
        <div className={styles.pageSubtitle}>Para-academic enrollments — current session</div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>ACTIVE ENROLLMENTS</span>
          <span className={styles.count}>{active.length}</span>
        </div>
        <div className={styles.grid}>
          {active.map((course) => (
            <div key={course.id} className={styles.clickable} onClick={() => navigate(`/courses/${course.id}`)}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>COMPLETED</span>
          <span className={styles.count}>{completed.length}</span>
        </div>
        <div className={styles.grid}>
          {completed.map((course) => (
            <div key={course.id} className={styles.clickable} onClick={() => navigate(`/courses/${course.id}`)}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}