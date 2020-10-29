import {Injectable} from '@angular/core';
import {Hero} from '../interfaces';

@Injectable({providedIn: 'root'})
export class UserService {

  selectedHeroes: Hero[] = []

  addHero(hero: Hero): void {
    this.selectedHeroes = [...this.selectedHeroes, hero]
  }

  checkIsHeroSelected(hero: Hero): boolean {
    return !this.selectedHeroes.some(({id}) => id === hero.id)
  }

  deleteHero(heroToDelete: Hero): void {
    this.selectedHeroes = this.selectedHeroes.filter(hero => hero.id !== heroToDelete.id )
  }
}
