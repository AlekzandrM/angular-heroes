import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FetchHeroesResponse} from '../interfaces';

@Injectable({providedIn: 'root'})
export class HeroesService {

  constructor(private http: HttpClient) {
  }

  getByName(name: string): Observable<FetchHeroesResponse> {
    return this.http.get<FetchHeroesResponse>(`${environment.heroesUrl}/search/${name}`)
  }
}
