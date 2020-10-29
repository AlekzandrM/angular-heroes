export interface User {
  email: string
  password: string
  name?: string
}
export interface Token {
  token: string
  expiresIn: string
}
export interface Environment {
  production: boolean
  heroesUrl: string
}

export interface HeroPowerstats {
  combat?: string
  durability?: string
  intelligence?: string
  power?: string
  speed?: string
  strength?: string
}
export interface HeroImage {
  url?: string
}

export interface HeroAppearance {
  gender?: string
  height?: string[]
  race?: string
  weight?: string[]
  'eye-color'?: string
  'hair-color'?: string
}
export interface HeroBiography {
  aliases?: string[]
  alignment?: string
  'alter-egos'?: string
  'first-appearance'?: string
  'full-name'?: string
  'place-of-birth'?: string
  publisher?: string
}
export interface HeroConnections {
  'group-affiliation'?: string
  relatives?: string
}
export interface HeroWork {
  base?: string
  occupation?: string
}
export interface Hero {
  id: string
  name: string
  appearance?: HeroAppearance
  biography?: HeroBiography
  connections?: HeroConnections
  image?: HeroImage
  powerstats?: HeroPowerstats
  work?: HeroWork
  isVisible?: boolean
}
export interface FetchHeroesResponse {
  response: string
  results: Hero[] | Hero
  resultsFor: string
}

export interface HistoryTab {
  battleDate: Date
  heroName: string
  opponentName: string
  result: boolean
}
