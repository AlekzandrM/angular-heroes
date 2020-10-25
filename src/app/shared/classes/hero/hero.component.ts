import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {Hero} from '../../interfaces';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewChecked, OnChanges, AfterViewInit, AfterContentInit {

  @Input() hero: Hero
  @ViewChild('selectBtn') selectBtn: ElementRef
  activeButton: boolean

  constructor(private userService: UserService) { }

  ngOnInit(): any {
    this.activeButton = !this.userService.checkIsHeroSelected(this.hero)
  }
  ngAfterViewChecked(): any {
  }
  ngOnChanges(changes: SimpleChanges): any {
    this.checkHero()
  }
  ngAfterViewInit(): any {
    // this.checkHero()
  }
  ngAfterContentInit(): any {
    // this.checkHero()
  }
  getImgUrl(): string {
    return `${this.hero.image.url}`
  }

  selectHero(): void {
    this.userService.addHero(this.hero)
    this.activeButton = !this.userService.checkIsHeroSelected(this.hero)
  }
  checkHero(): any {
    return this.activeButton = !this.userService.checkIsHeroSelected(this.hero)
  }

}
