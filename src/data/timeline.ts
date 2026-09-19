import type { SkillId } from './skills'

export type Chapter = {
  year: string
  span: string
  title: string
  company?: string
  current?: boolean
  lines: string[]
  stack: SkillId[]
}

export const timeline: Chapter[] = [
  {
    year: '2022',
    span: '— PRESENT',
    title: 'Senior Software Engineer',
    company: 'CGI / BJSS',
    current: true,
    lines: [
      'Working on greenfield projects for globally recognised clients, predominantly with React, TypeScript and Node.JS',
      'Included working on the Mastercard Card Design Studio - utilising generative AI to enable custom, compliant card designs with fluid motion animations.',
    ],
    stack: ['typescript', 'react', 'nextjs', 'azure'],
  },
  {
    year: '2021',
    span: '— 2022',
    title: 'Technical Graduate',
    company: 'CGI',
    lines: [
      'Built a Node.js application to view trends in public sector procurement opportunities.',
      'Worked on a graduate project building a carbon emissions map with personalised recommendations - built using Angular and Leaflet.js.',
    ],
    stack: ['typescript', 'react', 'node'],
  },
  {
    year: '2019',
    span: '— 2020',
    title: 'Software Engineer Intern',
    company: 'Amadeus IT Services',
    lines: [
      'A year-in-industry building a tool to process and explore aviation ground-handling data.',
      'Worked with C++ and a Python Flask API querying MongoDB, with results on an Angular frontend.',
    ],
    stack: ['typescript', 'python', 'angular'],
  },
]
