import { useEffect, useState } from 'react'
import styles from './GlitchText.module.css'

interface GlitchTextProps {
  text: string
  className?: string
}

const glitchChars = '!<>-_\\/[]{}—=+*^?#'

export default function GlitchText({ text, className }: GlitchTextProps) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    let iteration = 0
    let frame = 0

    const interval = setInterval(() => {
      frame++
      if (frame % 3 !== 0) return

      setDisplay(
        text
          .split('')
          .map((char, idx) => {
            if (idx < iteration) return text[idx]
            if (char === ' ') return ' '
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setDisplay(text)
      }

      iteration += 0.5
    }, 30)

    return () => clearInterval(interval)
  }, [text])

  return <span className={`${styles.glitch} ${className ?? ''}`}>{display}</span>
}