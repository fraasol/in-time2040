import { Task } from '../../types'
import styles from './TaskCard.module.css'

interface TaskCardProps {
  task: Task
}

const priorityLabel: Record<Task['priority'], string> = {
  critical: 'CRITICAL',
  high: 'HIGH',
  normal: 'NORMAL',
  low: 'LOW',
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className={`${styles.card} ${styles[task.priority]}`}>
      <div className={styles.header}>
        <span className={`${styles.priority} ${styles[task.priority]}`}>
          {priorityLabel[task.priority]}
        </span>
        <span className={styles.cfpa}>+{task.cfpa} CFPA</span>
      </div>
      <div className={styles.title}>{task.title}</div>
      <div className={styles.course}>{task.course}</div>
      <div className={styles.description}>{task.description}</div>
      <div className={styles.footer}>
        <span className={styles.deadline}>⏱ {task.deadline}</span>
        {task.aiAssisted && (
          <span className={styles.aiTag}>AI-ASSISTED</span>
        )}
      </div>
    </div>
  )
}