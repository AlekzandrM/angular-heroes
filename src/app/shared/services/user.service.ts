import {Injectable} from '@angular/core';
import {Hero} from '../interfaces';

@Injectable({providedIn: 'root'})
export class UserService {
  selectedHeroes = []

  addHero(hero: Hero): any {
    this.selectedHeroes = [...this.selectedHeroes, hero]
    return console.log(this.selectedHeroes)
  }
}
