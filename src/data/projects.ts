import type { ImageMetadata } from 'astro'
import birthdayDesktop from '../assets/birthday-freebies.png'
import myGTAGarage from '../assets/mygtagarage.png'
import VHS from '../assets/vhs-tapes.png'

export type Project = {
  id: string
  index: string
  kind: string
  rec: 'mg' | 'cy'
  title: string
  blurb: string
  stack: string[]
  href?: string
  flip?: boolean
  desktop?: ImageMetadata
  mobile?: ImageMetadata
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
    stack: ['WEB', 'EDITORIAL', 'UK RETAIL'],
    href: 'https://birthdayfreebie.co.uk/',
    desktop: birthdayDesktop,
  },
  {
    id: 'gta-garage',
    index: '02',
    kind: 'WEB',
    rec: 'cy',
    title: 'MyGTAGarage',
    blurb: 'A tool to allow players of GTA Online to organise their vehicles and garages, with drag and drop and export options.',
    stack: [],
    flip: true,
    href: 'https://mygtagarage.com/',
    desktop: myGTAGarage
  },
  {
    id: 'portfolio',
    index: '03',
    kind: 'WEB',
    rec: 'cy',
    title: 'Portfolio v1.0',
    blurb: 'My personal portfolio site, developed using Astro and inspired by retro VHS tape designs.',
    stack: [],
    desktop: VHS
  },
]
