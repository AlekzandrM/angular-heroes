import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  forbiddenSybols = '^(?=.*[!@#$%^&(),.+=/\\]\\[{}?><":;1234567890|])'
  heroes$: Subscription
  heroesList = []
  heroesResults = []
  showResultsBlock = false
  @ViewChild('chips') chipsRef: ElementRef
  @ViewChild('inpElement') inpElement: ElementRef

  constructor(private heroes: HeroesService) { }

  ngOnInit(): void {
  }

  @HostListener('keyup', ['$event']) onkeyup(event: any): any {
    const invalidInput = new RegExp(this.forbiddenSybols).test(this.name)
    const validEnter = !invalidInput && event.key === 'Enter'

    if (!validEnter) {
      event.preventDefault()
      return
    }
    this.getByName()
    this.addChip()
  }

  addChip(): void {
    const instance = MaterialService.initChips(this.chipsRef)
    this.heroesList.forEach(el => {
      instance.addChip({tag: el})
    })

    const chips = document.querySelectorAll('.chip')
    const arrChips = Array.from(chips)

    arrChips.map(el => {
      el.querySelector('.close').innerHTML = '&#10008;'
      this.getByChip(el)
    })
  }
  getByChip(el: any): void {
    el.addEventListener('click', () => {
      this.name = el.textContent.slice(0, -1)
      this.getByName()
      this.name = el.textContent.slice(0, -1)
    })
  }

  getByName(): void {
    this.name.trim()
    this.heroesList = [...this.heroesList, this.name]
    this.heroes$ = this.heroes.getByName(this.name).subscribe(res => {
      if (res.response === 'error') {
        this.showResultsBlock = false
      }
      this.showResultsBlock = true
      this.heroesResults = res.results
    })
    this.name = ''
  }

  ngOnDestroy(): void {
    if (this.heroes$) {
      this.heroes$.unsubscribe()
    }
  }

  getByLetter(letter: string): void{
    this.name = letter
    this.getByName()
    this.name = letter
  }
}
