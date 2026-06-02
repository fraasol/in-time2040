export interface Task {
  id: string
  title: string
  course: string
  deadline: string
  cfpa: number
  priority: 'critical' | 'high' | 'normal' | 'low'
  status: 'pending' | 'in-progress' | 'completed'
  aiAssisted: boolean
  description: string
}

export interface Course {
  id: string
  title: string
  institution: string
  cfpaTotal: number
  cfpaEarned: number
  cfpaRequired: number
  status: 'active' | 'completed' | 'pending'
  type: 'para-academic' | 'internship' | 'completed'
  startDate: string
  endDate?: string
  skills: string[]
  grade?: string
}

export interface Notification {
  id: string
  from: string
  title: string
  body: string
  time: string
  read: boolean
  type: 'task' | 'museum' | 'ai' | 'system' | 'institution'
  special?: boolean
}

export interface CVEntry {
  id: string
  title: string
  institution: string
  date: string
  cfpa: number
  type: 'course' | 'workshop' | 'internship' | 'certification'
}

export interface Student {
  id: string
  name: string
  surname: string
  username: string
  matricola: string
  dob: string
  city: string
  node: string
  email: string
  instagram: string
  bio: string
  cfpaTotal: number
  cognitiveLoad: number
  status: string
}