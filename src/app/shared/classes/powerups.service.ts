import {Powerups} from '../interfaces';

export class PowerupsService {
  static getShield(): Powerups {
    return {
      title: 'Captain America shield',
      description: 'durability +10',
      active: true,
      image: '../../assets/kashild.png',
      titleIsVisible: false,
      isPicked: false
    }
  }
  static getMjolnir(): Powerups {
    return {
      title: 'Mjolnir',
      description: 'power +10',
      active: true,
      image: '../../assets/mjolnir.png',
      titleIsVisible: false,
      isPicked: false
    }
  }
  static getArmor(): Powerups {
    return {
      title: 'Ironman nano armor',
      description: 'combat +10',
      active: true,
      image: '../../assets/ironman.png',
      titleIsVisible: false,
      isPicked: false
    }
  }
  static getCloak(): Powerups {
    return {
      title: 'Dr. Stranges cloak',
      description: 'intelligence +10',
      active: true,
      image: '../../assets/cloak.png',
      titleIsVisible: false,
      isPicked: false
    }
  }
  static getRing(): Powerups {
    return {
      title: 'Green lanterns ring',
      description: 'strength +10',
      active: true,
      image: '../../assets/ring.png',
      titleIsVisible: false,
      isPicked: false
    }
  }
  static getBoots(): Powerups {
    return {
      title: 'Flash boots',
      description: 'speed +10',
      active: true,
      image: '../../assets/boots.png',
      titleIsVisible: false,
      isPicked: false
    }
  }
}
