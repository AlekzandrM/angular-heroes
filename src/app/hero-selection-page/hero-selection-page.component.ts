import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HeroesService} from '../shared/services/heroes.service';
import { Subscription } from 'rxjs';
import {MaterialService} from '../shared/classes/material.service';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent implements OnInit, OnDestroy {

  name = ''
  heroes$: Subscription
  heroesList = []
  heroesResults = []
  @ViewChild('chips') instanceRef: ElementRef

  constructor(private heroes: HeroesService) { }

  ngOnInit(): void {
  }

  add(): void {
    const instance = MaterialService.initChips(this.instanceRef)
    this.heroesList.forEach(el => {
      instance.addChip({tag: el})
    })
    const elems = document.querySelectorAll('.close')
    const arr = Array.from(elems)
    arr.map(el => el.innerHTML = '&#10008;')
  }

  getByName(): void {
    this.heroesList = [...this.heroesList, this.name]
    this.heroes$ = this.heroes.getByName(this.name).subscribe(res => {
      this.heroesResults = res.results
      console.log(this.heroesResults)
    })
    this.add()
    this.name = ''
  }

  ngOnDestroy(): void {
    if (this.heroes$) {
      this.heroes$.unsubscribe()
    }
  }
}
