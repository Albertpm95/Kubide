import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { APIROUTES } from '@constants'
import { Character } from '@models/character'
import { environments } from 'environments/environments'
import { Observable, of, tap, map } from 'rxjs'


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHeroesList(): Observable<Character[]> {
    return this.http.get<any>(environments.MARVELBASEENDPOINT + APIROUTES.HEROESLIST).pipe(
      map(response => response?.data?.results as Character[]) // Mapped because the server response contained more info than I wanted.
    );
  }
}
