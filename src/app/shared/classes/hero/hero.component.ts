import {
  Component, ElementRef,
  Input, OnInit, ViewChild
} from '@angular/core';
import {Hero} from '../../interfaces';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero
  @ViewChild('selectBtn') selectBtn: ElementRef
  activeButton: boolean

  constructor(private userService: UserService) { }

  ngOnInit(): any {
    return this.activeButton = this.userService.checkIsHeroSelected(this.hero)
  }

  getImgUrl(): string {
    return `${this.hero.image.url}`
  }

  selectHero(): void {
    this.userService.addHero(this.hero)
    this.activeButton = this.userService.checkIsHeroSelected(this.hero)
  }
}
