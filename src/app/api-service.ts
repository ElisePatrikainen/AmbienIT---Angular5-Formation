import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface ChuckResponse { value : string }

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getChuckFact() {
    return this.http.get<ChuckResponse>('https://api.chucknorris.io/jokes/random')
  }

}
