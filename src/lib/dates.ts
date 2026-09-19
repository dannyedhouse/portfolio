export const CAREER_START = '2021-09-07'

export function yearsSince(iso: string, now = new Date()) {
  const start = new Date(`${iso}T00:00:00`)
  let years = now.getFullYear() - start.getFullYear()
  const month = now.getMonth() - start.getMonth()
  if (month < 0 || (month === 0 && now.getDate() < start.getDate())) years -= 1
  return Math.max(years, 0)
}
