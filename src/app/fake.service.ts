import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface ChuckResponse { value : string }

@Injectable()
export class FakeService {

  fakeBlague: ChuckResponse = { value : 'Fake' }

  constructor() { }
  getChuckFact() {
    return Observable.of(this.fakeBlague)
  }
}


