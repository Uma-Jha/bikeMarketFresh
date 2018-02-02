import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import httpclientmodule & formsmodule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//import services
import { UserService } from './user.service';
import { BikeService } from './bike.service';
import { HeaderComponent } from './header/header.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BrowseComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //import Httpclientmodule
    FormsModule //import Forms module
  ],
  providers: [
    //import all service providers
    UserService, 
    BikeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
