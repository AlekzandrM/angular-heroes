import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../interfaces';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero
  activeButton = true

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getImgUrl(): string {
    return `${this.hero.image.url}`
  }

  selectHero(): void {
    this.userService.addHero(this.hero)
    this.activeButton = false
  }
}
