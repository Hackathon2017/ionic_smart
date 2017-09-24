import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DomainServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DomainServiceProvider {

  constructor(public http: Http) {
    console.log('Hello DomainServiceProvider Provider');
  }  
  
  
  load() {
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://172.16.3.223:8000/domains/', options).map(res => res.json())

  }

}
