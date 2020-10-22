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
  combat: string
  durability: string
  intelligence: string
  power: string
  speed: string
  strength: string
}
export interface HeroImage {
  url: string
}
export interface Hero {
  id: string
  name: string
  appearance: object
  biography: object
  connections: object
  image: HeroImage
  powerstats: HeroPowerstats
  work: object
}
