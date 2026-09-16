export const skillCatalog = {
  typescript: { label: 'TypeScript', icon: 'simple-icons:typescript' },
  react: { label: 'React', icon: 'simple-icons:react' },
  nextjs: { label: 'Next.js', icon: 'simple-icons:nextdotjs' },
  astro: { label: 'Astro', icon: 'simple-icons:astro' },
  node: { label: 'Node.js', icon: 'simple-icons:nodedotjs' },
  tailwind: { label: 'Tailwind', icon: 'simple-icons:tailwindcss' },
  css: { label: 'CSS', icon: 'simple-icons:css' },
  vite: { label: 'Vite', icon: 'simple-icons:vite' },
  playwright: { label: 'Playwright', icon: 'simple-icons:playwright' },
  sanity: { label: 'Sanity', icon: 'simple-icons:sanity' },
  postgres: { label: 'PostgreSQL', icon: 'simple-icons:postgresql' },
  docker: { label: 'Docker', icon: 'simple-icons:docker' },
  aws: { label: 'AWS', icon: 'simple-icons:amazonwebservices' },
} as const

export type SkillId = keyof typeof skillCatalog

export const aboutSkills: SkillId[] = [
  'typescript',
  'react',
  'nextjs',
  'astro',
  'node',
  'tailwind',
  'css',
  'vite',
  'playwright',
  'sanity',
  'postgres',
  'docker',
  'aws',
]
