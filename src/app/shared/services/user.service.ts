import {Injectable} from '@angular/core';
import {Hero} from '../interfaces';

@Injectable({providedIn: 'root'})
export class UserService {

  selectedHeroes = []

  addHero(hero: Hero): any {
    this.selectedHeroes = [...this.selectedHeroes, hero]
  }

  checkIsHeroSelected(hero: Hero): boolean {
    return !this.selectedHeroes.some(({id}) => id === hero.id)
  }
}
