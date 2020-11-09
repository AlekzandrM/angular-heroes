import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HeroesService} from '../shared/services/heroes.service';
import {Hero, HeroInformationForm, HeroInformationFormDescription} from '../shared/interfaces';

@Component({
  selector: 'app-hero-info-page',
  templateUrl: './hero-info-page.component.html',
  styleUrls: ['./hero-info-page.component.scss']
})
export class HeroInfoPageComponent implements OnInit {

  hero: Hero
  heroInformation: HeroInformationForm[]

  constructor(private route: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getHeroById(params.id)
    })
  }

  getHeroInformation(): HeroInformationForm[] {
    const {gender, race, weight, height, 'eye-color': eye, 'hair-color': hair} = this.hero.appearance
    const {
      aliases,
      alignment,
      'alter-egos': alterEgos,
      'first-appearance': firstAppearance,
      'full-name': fullName,
      'place-of-birth': pob,
      publisher
    } = this.hero.biography
    const {'group-affiliation': gaff, relatives, } = this.hero.connections
    const {intelligence, durability, strength, speed, combat, power} = this.hero.powerstats
    const {occupation, base} = this.hero.work

    return [{
      sectionClass: 'appearance',
      header: 'Appearance',
      description: [{title: 'gender', value: gender}, {title: 'race', value: race}, {title: 'weight', value: weight[1]},
        {title: 'height', value: height[1]}, {title: 'eye-color', value: eye}, {title: 'hair-color', value: hair}]
    }, {
      sectionClass: 'biography',
      header: 'Biography',
      description: [
        {title: 'aliases', value: aliases},
        {title: 'alignment', value: alignment},
        {title: 'alter egos', value: alterEgos},
        {title: 'first appearance', value: firstAppearance},
        {title: 'full name', value: fullName},
        {title: 'place of birth', value: pob},
        {title: 'publisher', value: publisher}
        ]
    }, {
      sectionClass: 'connections',
      header: 'Connections',
      description: [{title: 'group affiliation', value: gaff}, {title: 'relatives', value: relatives}]
    }, {
      sectionClass: 'powerstats',
      header: 'Powerstats',
      description: [
        {title: 'intelligence', value: intelligence},
        {title: 'durability', value: durability},
        {title: 'strength', value: strength},
        {title: 'speed', value: speed},
        {title: 'combat', value: combat},
        {title: 'power', value: power}
        ]
    }, {
      sectionClass: 'work',
      header: 'Work',
      description: [{title: 'occupation', value: occupation}, {title: 'base', value: base}]
    }]
  }

  getHeroById(id): void {
    this.heroesService.getById(id).subscribe(hero => {
      this.hero = hero
      this.heroInformation = this.getHeroInformation()
    })
  }

  trackByHeroInformation(index: number, item: HeroInformationForm): string {
    return item.header
  }
  trackByHeroInformationDescription(index: number, item: HeroInformationFormDescription): string {
    return item.title
  }
}
