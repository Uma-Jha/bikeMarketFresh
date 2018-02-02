import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BikeService {

  constructor(private _http: HttpClient) { }

  getBikes(){
    return this._http.get('/bikes')
  }

  getBike(listing_id){
    return this._http.get('/bike/'+listing_id)
  }
}
