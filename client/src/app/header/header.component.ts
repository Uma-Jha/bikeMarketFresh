import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bikeservice: BikeService,
    private userservice: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logoff() {
    this.userservice.user = null;
    this._router.navigateByUrl("/");
  }

}
