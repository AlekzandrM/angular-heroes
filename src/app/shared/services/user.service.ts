import {Injectable} from '@angular/core';
import {Hero} from '../interfaces';

@Injectable({providedIn: 'root'})
export class UserService {
  selectedHeroes = []

  addHero(hero: Hero): any {
    this.selectedHeroes = [...this.selectedHeroes, hero]
  }
  checkIsHeroSelected(hero: Hero): boolean {
    if (this.selectedHeroes) {
    // return !this.selectedHeroes.some(el => el === hero)
      return this.selectedHeroes.includes(hero)
    }
    return false
  }
}
