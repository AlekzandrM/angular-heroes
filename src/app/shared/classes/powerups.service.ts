export interface PowerupsService {
  image?: string
  title: string
  description: string
  active?: boolean
  titleIsVisible?: boolean
  isPicked?: boolean
  usesCount: number
}

export class PowerupsService {
  constructor(title, description, active, image, titleIsVisible, isPicked, usesCount) {
    this.title = title
    this.description = description
    this.active = active
    this.image = image
    this.titleIsVisible = titleIsVisible
    this.isPicked = isPicked
    this.usesCount = usesCount
  }
}
