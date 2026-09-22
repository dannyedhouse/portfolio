import type { ImageMetadata } from 'astro'
import birthdayFreebies from '../assets/birthday-freebies.png'
import myGTAGarage from '../assets/mygtagarage.png'
import vhsTapes from '../assets/vhs-tapes.png'
import type { SkillId } from './skills'

export type Project = {
  index: string
  kind: string
  title: string
  blurb: string
  stack: SkillId[]
  href?: string
  code?: string
  flip?: boolean
  image: ImageMetadata
}

export const projects: Project[] = [
  {
    index: '01',
    kind: 'WEB',
    title: 'Birthday Freebies',
    blurb:
      'Showcasing UK birthday freebies and discounts, now visited by around 5k users a month through organic growth.',
    stack: ['typescript', 'react', 'nextjs', 'tailwind', 'sanity'],
    href: 'https://birthdayfreebie.co.uk/',
    image: birthdayFreebies,
  },
  {
    index: '02',
    kind: 'WEB',
    title: 'MyGTAGarage',
    blurb:
      'A tool for GTA Online players to organise vehicles and garages, with drag and drop and export.',
    stack: ['typescript', 'react', 'tailwind', 'vite', 'playwright'],
    flip: true,
    href: 'https://mygtagarage.com/',
    image: myGTAGarage,
  },
  {
    index: '03',
    kind: 'WEB',
    title: 'Portfolio v1.0',
    blurb:
      'My personal portfolio site, developed using Astro and inspired by retro VHS tape designs.',
    stack: ['astro', 'typescript', 'css', 'vite'],
    code: 'https://github.com/dannyedhouse/portfolio',
    image: vhsTapes,
  },
]
