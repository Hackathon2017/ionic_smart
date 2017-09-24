import { Specialist } from './../../models/specialists/specialist';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpecialistDetailServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpecialistDetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SpecialistDetailServiceProvider Provider');
  }

  load(Specialist:Specialist) {
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let params: URLSearchParams = new URLSearchParams();
    params.set("specialist","1" );
    options.search = params; 
    return this.http.get('http://172.16.3.223:8000/posts/', options).map(res => res.json())

  //  let headers = new Headers({ 'content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
   // return this.http.post("http://172.16.3.223:8000/posts/", JSON.stringify(Specialist), options)
    
  }

}
