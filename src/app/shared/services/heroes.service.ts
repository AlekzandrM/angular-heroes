import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FetchHeroesResponse, Hero} from '../interfaces';

@Injectable({providedIn: 'root'})
export class HeroesService {

  constructor(private http: HttpClient) {}

  getByName(name: string): Observable<FetchHeroesResponse> {
    return this.http.get<FetchHeroesResponse>(`${environment.heroesUrl}/search/${name}`)
  }

  getById(id: string): Observable<Hero> {
    return  this.http.get<Hero>(`${environment.heroesUrl}/${id}`)
  }
}
