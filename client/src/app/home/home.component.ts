import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggeduser: any;
  user: any;
  message: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bikeservice: BikeService,
    private userservice: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log("in home component init")
    //get random bike from db
    this.user = {
      name: {
        f_name: "",
        l_name: "",
      },
      email: "",
      password: "",
      conf_password: ""
    }
    this.loggeduser = {
      email: "",
      password: ""
    }
  }

  //get random bike function

  //register function
  register(){
    let obs = this.userservice.addUser(this.user)
    obs.subscribe(data => {
      if (!data['message']){
        this.userservice.user = data
        this._router.navigateByUrl('/browse');
      } else {
        this.message = data['message'];
        console.log(this.message);
        this._router.navigateByUrl('/');
      }
    })
    
  }
  
  login(){
    let obs = this.userservice.logUser(this.loggeduser)
    obs.subscribe(data => {
      if (!data['data']){
        this.userservice.user = data['data']
        console.log(this.userservice.user);
        this._router.navigateByUrl('/browse');
      } else {
        this.message = data['message'];
        console.log(this.message);
        this._router.navigateByUrl('/');
      }
    })
  }
}
