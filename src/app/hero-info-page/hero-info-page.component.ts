import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HeroesService} from '../shared/services/heroes.service';
import {Hero} from '../shared/interfaces';

@Component({
  selector: 'app-hero-info-page',
  templateUrl: './hero-info-page.component.html',
  styleUrls: ['./hero-info-page.component.scss']
})
export class HeroInfoPageComponent implements OnInit {

  hero: Hero

  constructor(private route: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getHeroById(params.id)
    })
  }

  getHeroById(id): void {
    this.heroesService.getById(id).subscribe(hero => {
      this.hero = hero
    })
  }

}
