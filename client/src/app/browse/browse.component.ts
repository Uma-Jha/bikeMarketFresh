import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  listings: any;
  listing_id: any;
  loggeduser: any;
  loggeduser_listings: [any] = [""];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bikeservice: BikeService,
    private userservice: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loggeduser = this.userservice.user
    this.getListings();
    for(var i=0; i < this.loggeduser['_listings'].length; i++){
      this.loggeduser_listings.push(this.loggeduser['_listings'][i]._id)
    }
  }

  getListings() {
    let obs = this.bikeservice.getBikes()
    obs.subscribe(data => {
      this.listings = data
      console.log("@@@got all listings"+data);
    })
  }
  getOneListing() {
    let obs = this.bikeservice.getBike(this.listing_id)
    obs.subscribe(data => {

    })
  }
}
