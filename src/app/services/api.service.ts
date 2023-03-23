import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { APIROUTES } from '@constants'
import { environments } from 'environments/environments'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHeroesList(): Observable<any[]> {
    console.log('list')
    return this.http.get<any[]>(environments.MARVELBASEENDPOINT + APIROUTES.HEROESLIST)
  }
}
