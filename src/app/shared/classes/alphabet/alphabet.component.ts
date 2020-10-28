import {Component, EventEmitter, Output} from '@angular/core';
import {AlphabetService} from '../alphabet.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent {

  @Output() emitLetter: EventEmitter<string> = new EventEmitter<string>()

  currentLetter = 'A'
  isVisible = false
  private letters: string[] = AlphabetService.ALPHABET

  pickLetter(letter: string): void {
    this.currentLetter = letter
    this.isVisible = false
    this.emitLetter.emit(this.currentLetter)
  }
}
