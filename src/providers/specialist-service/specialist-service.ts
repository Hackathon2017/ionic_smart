import { Specialist } from './../../models/specialists/specialist';

import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpecialistServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class SpecialistServiceProvider {
  private  headers = new Headers({ 'content-Type': 'application/json'});
  data : Specialist[] = [];
  constructor(public http: Http) {
    this.http.get('http://172.16.3.223:8000/specialists');
  }

  load() {
   let options = new RequestOptions({ headers: this.headers });

      return this.http.get('http://172.16.3.223:8000/specialists',options).map(res => res.json())
        
  }

}
