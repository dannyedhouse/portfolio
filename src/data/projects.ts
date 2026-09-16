import type { ImageMetadata } from 'astro'
import birthdayFreebies from '../assets/birthday-freebies.png'
import myGTAGarage from '../assets/mygtagarage.png'
import VHS from '../assets/vhs-tapes.png'
import type { SkillId } from './skills'

export type Project = {
  id: string
  index: string
  kind: string
  rec: 'mg' | 'cy'
  title: string
  blurb: string
  stack: SkillId[]
  href?: string
  code?: string | true
  flip?: boolean
  image?: ImageMetadata
}

export const projects: Project[] = [
  {
    id: 'birthday',
    index: '01',
    kind: 'WEB',
    rec: 'mg',
    title: 'Birthday Freebies',
    blurb:
      'Showcasing UK birthday freebies and discounts, now visited by around 5k users a month through organic growth.',
    stack: ['typescript', 'react', 'nextjs', 'tailwind', 'sanity'],
    href: 'https://birthdayfreebie.co.uk/',
    image: birthdayFreebies,
  },
  {
    id: 'gta-garage',
    index: '02',
    kind: 'WEB',
    rec: 'cy',
    title: 'MyGTAGarage',
    blurb: 'A tool to allow players of GTA Online to organise their vehicles and garages, with drag and drop and export options.',
    stack: ['typescript', 'react', 'tailwind', 'vite', 'playwright'],
    flip: true,
    href: 'https://mygtagarage.com/',
    image: myGTAGarage,
  },
  {
    id: 'portfolio',
    index: '03',
    kind: 'WEB',
    rec: 'cy',
    title: 'Portfolio v1.0',
    blurb: 'My personal portfolio site, developed using Astro and inspired by retro VHS tape designs.',
    stack: ['astro', 'typescript', 'css', 'vite'],
    code: 'https://github.com/dannyedhouse/portfolio',
    image: VHS,
  },
]
