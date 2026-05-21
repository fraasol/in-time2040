import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Courses from './pages/Courses/Courses'
import CV from './pages/CV/CV'
import Museum from './pages/Museum/Museum'
import styles from './App.module.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={styles.app}>
      <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className={styles.layout}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/museum" element={<Museum />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App