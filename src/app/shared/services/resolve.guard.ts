import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Hero} from '../interfaces';
import {HeroesService} from './heroes.service';
import {mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<Hero> {

  constructor(private heroesService: HeroesService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> | Hero {
    const id = this.heroesService.opponentId

    return this.heroesService.getById(id).pipe(
      take(1),
      mergeMap<Observable<Hero>, Observable<any>>(hero => {
        if (hero) {
          return of(hero)
        } else {
          this.router.navigate(['/select'])
        }
      })
    )
  }
}
