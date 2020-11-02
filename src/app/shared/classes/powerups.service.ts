import {Injectable} from '@angular/core';

export interface PowerupsConstructor {
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
  LIST_OF_POWERUPS: PowerupsConstructor[] = [
    new PowerupsConstructor('Captain America shield', 'durability +10', true, '../../assets/kashild.png', true, false, 3),
    new PowerupsConstructor('Mjolnir', 'power +10', true, '../../assets/mjolnir.png', true, false, 3),
    new PowerupsConstructor('Ironman nano armor', 'combat +10', true, '../../assets/ironman.png', true, false, 3),
    new PowerupsConstructor('Dr. Stranges cloak', 'intelligence +10', true, '../../assets/cloak.png', true, false, 3),
    new PowerupsConstructor('Green lanterns ring', 'strength +10', true, '../../assets/ring.png', true, false, 3),
    new PowerupsConstructor('Flash boots', 'speed +10', true, '../../assets/boots.png', true, false, 3)
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
    const sortedList = this.LIST_OF_POWERUPS.sort((a: PowerupsConstructor, b: PowerupsConstructor) => a.usesCount < b.usesCount ? 1 : -1)

    this.LIST_OF_POWERUPS = [...sortedList]
  }
}

export class PowerupsConstructor {
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
