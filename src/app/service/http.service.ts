import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {DataService} from "./data.service";
import {forEach} from "@angular/router/src/utils/collection";
// import {UserService} from "./user.service";

@Injectable()
export class HttpService {

  private headers;

  constructor(private _http: Http, private _dataService: DataService
    // , private _usersService: UserService

  ) {
    // this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    this.headers = new Headers();

    // this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json')
    // this.headers.append('Authorization', 'Bearer' + ' ' + this._usersService.getToken())

    this.headers.append("Authorization", "Basic c21hcnRodWI6dGVzdA==");

  }

  call(TYPE, URL, DATA, headers = null) {

    switch (TYPE) {
      case 'GET':
        return this.get(URL, headers);
      case 'POST':
        return this.post(URL, DATA, headers);
      case 'PUT':
        return this.put(URL, DATA, headers);
      case 'DELETE':
        return this.delete(URL, headers);
    }
  }

  get(URL, HEADERS = null) {
    return this._http.get(URL, {headers: this.mergeHeaders(HEADERS)});
  }

  post(URL, body, HEADERS = null) {
    // return this._http.post(URL, 'data=' + JSON.stringify(body), { headers: this.headers })
    return this._http.post(URL, body, {headers: this.mergeHeaders(HEADERS)})
  }

  put(URL, body, HEADERS = null) {
    return this._http.put(URL, body, {headers: this.mergeHeaders(HEADERS)})
  }

  delete(URL, HEADERS = null) {
    // this.joinHeaders(headers);
    return this._http.delete(URL, {headers: this.mergeHeaders(HEADERS)})
  }

  mergeHeaders(headers){

    let returnHeaders = this.headers;

    if(headers != null){

      for(let i = 0; i< headers.length; i++) {

        if(this.headers.get(headers[i].name) != null){
          returnHeaders.delete(headers[i].name);
        }
        returnHeaders.append(headers[i].name, headers[i].value);
      }
      // console.log('this.headers in merge', this.headers['_headers'])
    }

    // console.log('headers in merge', returnHeaders)
    return returnHeaders;
  }

}

