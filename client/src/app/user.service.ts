import { Injectable } from '@angular/core';

//import httpclient and behaviorsubject (allows components to subscribe to dataservice behaviorsubjects)
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  user: any;

  //give params of httpclient to constructor
  constructor(private _http: HttpClient) { }

  //add user
  addUser(user) {
  console.log('inside user/add service')
  return this._http.post('/user/add', user);
  }

  //update user
  updateUser(userid, newInfo) {
    return this._http.put("/user/update/"+userid, newInfo);
  }

  //delete user
  deleteUser(userid) {
    return this._http.delete('/user/delete/'+userid);
  }

  //fetch single user

  //create listing
  createListing(userid, listing) {
    return this._http.post('/user/'+userid+'/addListing/', listing);
  }

  //update listing
  updateListing(bikeid, newListing) {
    return this._http.post('/bike/update/'+bikeid, newListing);
  }

  logUser(user) {
    return this._http.post('/user/login', user)
  }
}
