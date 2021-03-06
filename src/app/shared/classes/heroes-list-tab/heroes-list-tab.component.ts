import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Hero} from '../../interfaces';

@Component({
  selector: 'app-heroes-list-tab',
  templateUrl: './heroes-list-tab.component.html',
  styleUrls: ['./heroes-list-tab.component.scss']
})
export class HeroesListTabComponent implements OnInit {

  public selectedHeroes: Hero[] = []

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.selectedHeroes = this.userService.selectedHeroes
  }

  deleteHero(heroToDelete: Hero): void {
    this.selectedHeroes = this.selectedHeroes.filter(hero => hero.id !== heroToDelete.id)
    this.userService.deleteHero(heroToDelete)
  }

  trackBySelectedHeroes(index: number, item: Hero): string {
    return item.id
  }
}
