export const skillCatalog = {
  typescript: { label: 'TypeScript', icon: 'simple-icons:typescript' },
  react: { label: 'React', icon: 'simple-icons:react' },
  nextjs: { label: 'Next.js', icon: 'simple-icons:nextdotjs' },
  claude: { label: 'Claude', icon: 'simple-icons:claude' },
  astro: { label: 'Astro', icon: 'simple-icons:astro' },
  node: { label: 'Node.js', icon: 'simple-icons:nodedotjs' },
  python: { label: 'Python', icon: 'simple-icons:python' },
  angular: { label: 'Angular', icon: 'simple-icons:angular' },
  tailwind: { label: 'Tailwind', icon: 'simple-icons:tailwindcss' },
  css: { label: 'CSS', icon: 'simple-icons:css' },
  scss: { label: 'SCSS', icon: 'simple-icons:sass' },
  vite: { label: 'Vite', icon: 'simple-icons:vite' },
  vitest: { label: 'Vitest', icon: 'simple-icons:vitest' },
  jest: { label: 'Jest', icon: 'simple-icons:jest' },
  playwright: { label: 'Playwright', icon: 'simple-icons:playwright' },
  figma: { label: 'Figma', icon: 'simple-icons:figma' },
  sanity: { label: 'Sanity', icon: 'simple-icons:sanity' },
  postgres: { label: 'PostgreSQL', icon: 'simple-icons:postgresql' },
  docker: { label: 'Docker', icon: 'simple-icons:docker' },
  azure: { label: 'Azure', icon: 'simple-icons:microsoftazure' },
} as const

export type SkillId = keyof typeof skillCatalog

export const aboutSkills: SkillId[] = [
  'typescript',
  'react',
  'node',
  'nextjs',
  'claude',
  'astro',
  'python',
  'angular',
  'scss',
  'vite',
  'vitest',
  'jest',
  'playwright',
  'figma',
  'sanity',
  'postgres',
  'docker',
  'azure',
]

export const aboutProficient: SkillId[] = ['typescript', 'react', 'node']
