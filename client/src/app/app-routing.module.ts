import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component'
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "browse", pathMatch: "full", component: BrowseComponent },
  { path: "listings", pathMatch: "full", component: ListingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
