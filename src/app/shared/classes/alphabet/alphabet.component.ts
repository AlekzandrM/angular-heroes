import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {

  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
  letter = 'A'
  isVisible = false
  @Output() emitLetter: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  pickLetter(letter: string): void {
    this.letter = letter
    this.isVisible = false
    this.emitLetter.emit(this.letter)
  }
}
