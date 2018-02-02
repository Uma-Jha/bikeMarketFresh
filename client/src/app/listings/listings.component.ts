import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: any;
  newlisting: any;
  mylisting: any;
  loggeduser: any;
  message: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bikeservice: BikeService,
    private userservice: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newlisting = {
      title: "",
      description: "",
      image: "",
      price: "",
      location: "",
      _owner: {}
    }
    this.loggeduser = this.userservice.user
  }

  addListing(){
    console.log("before adding: "+this.loggeduser._id)
    this.newlisting._owner = this.loggeduser
    let obs = this.userservice.createListing(this.loggeduser._id, this.newlisting)
    obs.subscribe(data => {
      console.log("this listing has been added: "+data)
      this.loggeduser = data
      this.newlisting = {
        title: "",
        description: "",
        image: "",
        price: "",
        location: "",
        _owner: {}
      }
      this.message = "added new listing"
    })
  }



}
