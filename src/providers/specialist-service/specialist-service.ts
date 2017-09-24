import { Specialist } from './../../models/specialists/specialist';

import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpecialistServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class SpecialistServiceProvider {
  data: Specialist[] = [];
  constructor(public http: Http) {
  }

  load() {
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let params: URLSearchParams = new URLSearchParams();
    params.set("speciality","3" );
    options.search = params; 
    return this.http.get('http://172.16.3.223:8000/specialists/', options).map(res => res.json())

  }

  add(Specialist:Specialist){
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://172.16.3.223:8000/specialists/" + '/users/add', JSON.stringify(Specialist), options)

  }

}
