import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userservice: UserService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => params['id']);
  }
  goHome() {
    this.location.go('/home');
  }
  goBack(): void {
    this.location.back();
  }
}
