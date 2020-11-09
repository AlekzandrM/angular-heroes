import { Component, Input, OnInit} from '@angular/core';
import {Hero, PowerupInfo} from '../../interfaces';

@Component({
  selector: 'app-hero-in-combat',
  templateUrl: './hero-in-combat.component.html',
  styleUrls: ['./hero-in-combat.component.scss']
})
export class HeroInCombatComponent implements OnInit {

  @Input() hero: Hero
  @Input() powerupInfo: PowerupInfo

  myHero: Hero
  powerupInfoList: PowerupInfo

  ngOnInit(): void {
    if (this.hero.myHero) {
      this.myHero = this.hero
      this.powerupInfoList = this.powerupInfo
    }
    if (this.myHero) {
      this.hero = this.myHero
    }
  }
}
