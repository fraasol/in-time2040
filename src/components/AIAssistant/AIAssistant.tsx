import { useState } from 'react'
import styles from './AIAssistant.module.css'

const suggestions = [
  'I can pre-generate 30 of the 50 required shots using your previous style preferences. Estimated time: 4 min.',
  'Your cognitive load index is 78/100. I recommend deferring task-003 by 24h.',
  'The masterclass at Museo del Cinema offers +3 CFPA. Attendance window: Mar 16, 15:00.',
  'Based on your current trajectory, you will reach the CFPA quorum by Mar 22.',
]

export default function AIAssistant() {
  const [expanded, setExpanded] = useState(true)
  const [msgIndex, setMsgIndex] = useState(0)

  const next = () => setMsgIndex((i) => (i + 1) % suggestions.length)

  return (
    <div className={styles.panel}>
      <div className={styles.header} onClick={() => setExpanded(!expanded)}>
        <div className={styles.headerLeft}>
          <span className={styles.dot} />
          <span className={styles.label}>IN-TIME AI</span>
        </div>
        <span className={styles.toggle}>{expanded ? '▲' : '▼'}</span>
      </div>
      {expanded && (
        <div className={styles.body}>
          <p className={styles.message}>{suggestions[msgIndex]}</p>
          <button className={styles.nextBtn} onClick={next}>Next suggestion →</button>
        </div>
      )}
    </div>
  )
}