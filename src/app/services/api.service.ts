import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { APIROUTES } from '@constants'
import { Character } from '@models/character'
import { environments } from 'environments/environments'
import { map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCharactersList(limit: number, offset: number): Observable<Character[]> {
    return this.http.get<any>(environments.MARVELBASEENDPOINT + APIROUTES.CHARACTERS, { params: { limit: limit, offset: offset } }).pipe(
      map(response => response?.data) // Mapped because the server response contained more info than I wanted.
    );
  }

  getCharactersFilteredListByStartsWith(limit: number, offset: number, partialName: string): Observable<Character[]> {
    return this.http.get<any>(environments.MARVELBASEENDPOINT + APIROUTES.CHARACTERS, { params: { limit: limit, offset: offset, nameStartsWith: partialName } }).pipe(
      map(response => response?.data) // Mapped because the server response contained more info than I wanted.
    );
  }

  getCharacterById(idCharacter: number): Observable<Character> {
    return this.http.get<any>(environments.MARVELBASEENDPOINT + APIROUTES.CHARACTERS + { idCharacter })
  }
}