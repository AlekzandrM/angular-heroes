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
  eyeColor?: string
  gender?: string
  hairColor?: string
  height?: string[]
  race?: string
  weight?: string[]
}
export interface HeroBiography {
  aliases?: string[]
  alignment?: string
  alterEgos?: string
  firstAppearance?: string
  fullName?: string
  placeOfBirth?: string
  publisher?: string
}
export interface HeroConnections {
  groupAffiliation?: string
  relatives?: string
}
export interface HeroWork {
  base?: string
  occupation?: string
}
export interface Hero {
  id: string
  name: string
  appearance: HeroAppearance
  biography: HeroBiography
  connections: HeroConnections
  image: HeroImage
  powerstats: HeroPowerstats
  work: HeroWork
  isVisible?: boolean
}
export interface FetchHeroesResponse {
  response: string
  results: Hero[]
  resultsFor: string
}
