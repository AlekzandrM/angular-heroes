import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MaterialService} from '../material.service';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {

  letter = 'A'
  @ViewChild('content') content: ElementRef
  @Output() onPickLetter: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.pickLetter()
  }

  openList(): void {
    const instance = MaterialService.initDropdown(this.content.nativeElement)
    instance.open()
  }

  pickLetter(): void {
    const allLetters = document.getElementById('dropdown1').children
    const allLettersArr = Array.from(allLetters)
    allLettersArr.forEach(li => li.addEventListener('click', () => {
      this.letter = li.textContent
      this.onPickLetter.emit(this.letter)
    }))
  }

}
