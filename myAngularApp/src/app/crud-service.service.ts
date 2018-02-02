import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudServiceService {
  apiurl: string = 'http://192.168.5.127/vivek/angular4/services/';	
  constructor( private http: Http ) { }

  getlist(url): Observable<any> {    
     return this.http.get(this.apiurl+url).map(res => res);
    
  }
  sendData(url,userData) {
     
    return this.http.post(this.apiurl+url, userData).map(res => res);
  }
}
