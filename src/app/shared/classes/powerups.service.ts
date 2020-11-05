import {Injectable} from '@angular/core';

export interface IPowerup {
  image?: string
  title: string
  description: string
  active?: boolean
  titleIsVisible?: boolean
  isPicked?: boolean
  usesCount: number
}

@Injectable({providedIn: 'root'})
export class PowerupsService {
  LIST_OF_POWERUPS: IPowerup[] = [
    new IPowerup({title: 'Captain America shield',
      description: 'durability +10', active: true, image: '../../assets/kashild.png', titleIsVisible: true, isPicked: false, usesCount: 3}),
    new IPowerup({title: 'Mjolnir',
      description: 'power +10', active: true, image: '../../assets/mjolnir.png', titleIsVisible: true, isPicked: false, usesCount: 3}),
    new IPowerup({title: 'Ironman nano armor',
      description: 'combat +10', active: true, image: '../../assets/ironman.png', titleIsVisible: true, isPicked: false, usesCount: 3}),
    new IPowerup({title: 'Dr. Stranges cloak',
      description: 'intelligence +10', active: true, image: '../../assets/cloak.png', titleIsVisible: true, isPicked: false, usesCount: 3}),
    new IPowerup({title: 'Green lanterns ring',
      description: 'strength +10', active: true, image: '../../assets/ring.png', titleIsVisible: true, isPicked: false, usesCount: 3}),
    new IPowerup({title: 'Flash boots',
      description: 'speed +10', active: true, image: '../../assets/boots.png', titleIsVisible: true, isPicked: false, usesCount: 3})
  ]

  pickPowerup(selectedPowerup): void {
      this.LIST_OF_POWERUPS.forEach(powerup => {
        const powerupToUse = powerup.title === selectedPowerup.title && powerup.usesCount > 0

        if (powerupToUse) {
          powerup.usesCount--
          powerup.isPicked = true
        } else {
          return
        }
      })
      this.sortPickedPowerups()
  }

  sortPickedPowerups(): void {
    const sortedList = this.LIST_OF_POWERUPS.sort((a: IPowerup, b: IPowerup) => a.usesCount < b.usesCount ? 1 : -1)

    this.LIST_OF_POWERUPS = [...sortedList]
  }
}

export class IPowerup {
  constructor(powerupData: IPowerup) {
    Object.assign(this, powerupData)
  }
}

// ************** I вариант *******************
// export class IPowerup {
//   constructor(title, description, active, image, titleIsVisible, isPicked, usesCount) {
//     this.title = title
//     this.description = description
//     this.active = active
//     this.image = image
//     this.titleIsVisible = titleIsVisible
//     this.isPicked = isPicked
//     this.usesCount = usesCount
//   }
// }
// ************** II вариант *******************
// export class IPowerup {
//   constructor(powerupData: IPowerup) {
//     Object.assign(this, powerupData)
//   }
// }
// ************** III вариант *******************
// export class IPowerup {
//   constructor(public title: string,
//   public description: string,
//   public active: boolean,
//   public image: string,
//   public titleIsVisible,
//   public isPicked,
//   public usesCount) { }
// }
