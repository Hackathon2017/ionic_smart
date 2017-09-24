import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpecialityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpecialityServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SpecialityServiceProvider Provider');
  }

  load(id : string) {
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let params: URLSearchParams = new URLSearchParams();
    params.set("domain",id);
    options.search = params; 
    return this.http.get('http://172.16.3.223:8000/specialities/', options).map(res => res.json())

  }
}
