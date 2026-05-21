import { Task } from '../types'

export const tasks: Task[] = [
  {
    id: 'task-001',
    title: 'Generate 50 AI-assisted shot compositions',
    course: 'Graphics Art for Videomaking',
    deadline: '2040-03-15 // 23:59',
    cfpa: 2,
    priority: 'critical',
    status: 'in-progress',
    aiAssisted: true,
    description:
      'Produce at least 50 unique shot framings within a digital environment using AI generative tools. Each shot must include associated audio track mapping.',
  },
  {
    id: 'task-002',
    title: 'Submit Prompt Engineering final module',
    course: 'Prompt Engineer for IA',
    deadline: '2040-03-17 // 18:00',
    cfpa: 3,
    priority: 'high',
    status: 'pending',
    aiAssisted: true,
    description:
      'Complete the final assessment for module 4: Advanced Chain-of-Thought prompting with multi-agent orchestration.',
  },
  {
    id: 'task-003',
    title: 'UI interaction prototype — responsive grid',
    course: 'Graphic Interface',
    deadline: '2040-03-18 // 12:00',
    cfpa: 1,
    priority: 'high',
    status: 'pending',
    aiAssisted: false,
    description:
      'Design a responsive adaptive grid interface prototype. No AI scaffolding permitted for this task per institution policy.',
  },
  {
    id: 'task-004',
    title: 'Web accessibility audit report',
    course: 'Web Interaction for the Work',
    deadline: '2040-03-20 // 09:00',
    cfpa: 1,
    priority: 'normal',
    status: 'pending',
    aiAssisted: true,
    description:
      'Run a full WCAG 3.0 compliance audit on the assigned prototype. Generate the report using the certified AI audit tool.',
  },
  {
    id: 'task-005',
    title: 'Masterclass attendance — Raw Human for Videomaking',
    course: 'Graphics Art for Videomaking',
    deadline: '2040-03-16 // 15:00',
    cfpa: 3,
    priority: 'normal',
    status: 'pending',
    aiAssisted: false,
    description:
      'Attend the in-person masterclass at Museo Nazionale del Cinema. +3 CFPA credited upon verified physical attendance. No AI assistance during session.',
  },
]