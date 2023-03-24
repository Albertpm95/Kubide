import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { APIROUTES } from '@constants'
import { DataContainer, DataWrapper } from '@models/metadata'

import { environments } from 'environments/environments'
import { map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCharactersList(limit: number, offset: number): Observable<DataContainer> {
    return this.http.get<DataWrapper>(environments.MARVELBASEENDPOINT + APIROUTES.CHARACTERS, { params: { limit: limit, offset: offset } }).pipe(
      map(characterDataWrapper => characterDataWrapper?.data as DataContainer) // Mapped because the server response contained more info than I wanted.
    );
  }

  getCharactersFilteredListByStartsWith(limit: number, offset: number, partialName: string): Observable<DataContainer> {
    return this.http.get<DataWrapper>(environments.MARVELBASEENDPOINT + APIROUTES.CHARACTERS, { params: { limit: limit, offset: offset, nameStartsWith: partialName } }).pipe(
      map(characterDataWrapper => characterDataWrapper?.data as DataContainer) // Mapped because the server response contained more info than I wanted.
    );
  }

  getCharacterById(characterID: number): Observable<DataContainer> {
    return this.http.get<DataWrapper>(environments.MARVELBASEENDPOINT + APIROUTES.CHARACTERS + '/' + characterID).pipe(
      map(characterDataWrapper => characterDataWrapper?.data as DataContainer)
    )
  }

  getCharacterComicsById(characterID: number): Observable<DataContainer> {
    return this.http.get<DataWrapper>(environments.MARVELBASEENDPOINT + APIROUTES.CHARACTERS + '/' + characterID + '/comics').pipe(
      map(characterDataWrapper => characterDataWrapper?.data as DataContainer)
    )
  }
}