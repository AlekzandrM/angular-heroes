import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HeroesService} from '../shared/services/heroes.service';
import {FetchHeroesResponse, Hero} from '../shared/interfaces';

@Component({
  selector: 'app-hero-info-page',
  templateUrl: './hero-info-page.component.html',
  styleUrls: ['./hero-info-page.component.scss']
})
export class HeroInfoPageComponent implements OnInit {

  hero: FetchHeroesResponse

  constructor(private route: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.heroesService.getById(params.id).subscribe(res => {
        this.hero = res
      })
    })
  }

}
