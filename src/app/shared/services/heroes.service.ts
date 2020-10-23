import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {

  constructor(private http: HttpClient) {
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${environment.heroesUrl}/search/${name}`)
  }
}
