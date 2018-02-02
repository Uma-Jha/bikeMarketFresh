webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var browse_component_1 = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
var listings_component_1 = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
var routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "browse", pathMatch: "full", component: browse_component_1.BrowseComponent },
    { path: "listings", pathMatch: "full", component: listings_component_1.ListingsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <router-outlet></router-outlet></div>\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(route, location, userservice, _router) {
        this.route = route;
        this.location = location;
        this.userservice = userservice;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.route.params
            .switchMap(function (params) { return params['id']; });
    };
    AppComponent.prototype.goHome = function () {
        this.location.go('/home');
    };
    AppComponent.prototype.goBack = function () {
        this.location.back();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            user_service_1.UserService,
            router_2.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
//import httpclientmodule & formsmodule
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
//import services
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var bike_service_1 = __webpack_require__("../../../../../src/app/bike.service.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/header/header.component.ts");
var browse_component_1 = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
var listings_component_1 = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                browse_component_1.BrowseComponent,
                listings_component_1.ListingsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule //import Forms module
            ],
            providers: [
                //import all service providers
                user_service_1.UserService,
                bike_service_1.BikeService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/bike.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var BikeService = /** @class */ (function () {
    function BikeService(_http) {
        this._http = _http;
    }
    BikeService.prototype.getBikes = function () {
        return this._http.get('/bikes');
    };
    BikeService.prototype.getBike = function (listing_id) {
        return this._http.get('/bike/' + listing_id);
    };
    BikeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BikeService);
    return BikeService;
}());
exports.BikeService = BikeService;


/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-2{\n    text-align: center;\n}\n.col-md-6{\n    margin-left: 5px;\n}\n.scrollbar{\n    max-height: 600px;\n    overflow-y: auto;\n\n}\nimg{\n    height: 100%;\n    width: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.listingbox{\n    border: 1px solid black;\n    margin-bottom: 20px;\n}\n.listingbox_div{\n    margin-top: 10px;\n    margin-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"scrollbar col-md-12\" role=\"navigation\">\n    <div class=\"col-md-10 offset-1\">\n      <div class=\"row listingbox\" *ngFor=\"let listing of listings\">\n\n        <div class=\"listingbox_div col-md-3\">\n          <img src=\"{{listing.image}}\" alt=\"Bike image\">\n        </div>\n\n        <div class=\"listingbox_div container col-md-7\">\n            <h5>{{ listing.title }}</h5>\n            <p>{{ listing.description }}</p>\n        </div>\n\n\n        <div class=\"listingbox_div col-md-2\">\n          <h3>${{ listing.price }}</h3>\n          <p>{{ listing.location }}</p>\n          <button *ngIf=\"!loggeduser_listings.indexOf(listing._id)\" class=\"btn btn-warning\">Contact</button>\n          <button *ngIf=\"loggeduser_listings.indexOf(listing._id)\" class=\"btn btn-danger\">DELETE</button>\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var bike_service_1 = __webpack_require__("../../../../../src/app/bike.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(route, location, bikeservice, userservice, _router) {
        this.route = route;
        this.location = location;
        this.bikeservice = bikeservice;
        this.userservice = userservice;
        this._router = _router;
        this.loggeduser_listings = [""];
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.loggeduser = this.userservice.user;
        this.getListings();
        for (var i = 0; i < this.loggeduser['_listings'].length; i++) {
            this.loggeduser_listings.push(this.loggeduser['_listings'][i]._id);
        }
    };
    BrowseComponent.prototype.getListings = function () {
        var _this = this;
        var obs = this.bikeservice.getBikes();
        obs.subscribe(function (data) {
            _this.listings = data;
            console.log("@@@got all listings" + data);
        });
    };
    BrowseComponent.prototype.getOneListing = function () {
        var obs = this.bikeservice.getBike(this.listing_id);
        obs.subscribe(function (data) {
        });
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: 'app-browse',
            template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            bike_service_1.BikeService,
            user_service_1.UserService,
            router_2.Router])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;


/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n  <h1>Bicycle Marketplace</h1>\n</div>\n<div class=\"row\">\n  <a [routerLink]=\"['browse']\">Browse</a>&nbsp;|&nbsp;\n  <a [routerLink]=\"['listings']\">My Listings</a>&nbsp;|&nbsp;\n  <a [routerLink]=\"['home']\" (click)=\"logoff()\">Log off</a>\n  <hr class=\"col-md-12\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var bike_service_1 = __webpack_require__("../../../../../src/app/bike.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, location, bikeservice, userservice, _router) {
        this.route = route;
        this.location = location;
        this.bikeservice = bikeservice;
        this.userservice = userservice;
        this._router = _router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logoff = function () {
        this.userservice.user = null;
        this._router.navigateByUrl("/");
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            bike_service_1.BikeService,
            user_service_1.UserService,
            router_2.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\n    padding: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"card border-primary mb-3 offset-3\" style=\"width: 600px;\">\n    <div class=\"card-header\">Bike of the Day!</div>\n    <div class=\"card-body text-primary\">\n      <h4 class=\"card-title\">Title</h4>\n      <p class=\"card-text\">lorem ipsum filler text woohoooooo</p>\n    </div>\n  </div>\n  <!-- end row 1 -->\n  <div class=\"col-md-5 offset-1\">\n    <form (submit)=\"login()\" method=\"post\">\n      <legend>Login</legend>\n      <div class=\"form-group\">\n        <label>Email:</label>\n        <input class=\"form-control\" type=\"text\" name=\"email\" [(ngModel)]=\"loggeduser.email\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input class=\"form-control\" type=\"text\" name=\"password\" [(ngModel)]=\"loggeduser.password\">\n      </div>\n      <input class=\"btn btn-primary\" type=\"submit\" value=\"Login\">\n    </form>\n    <br>\n    <div *ngIf=\"(message)\" class=\"alert alert-dismissible alert-danger\">\n      <strong>Error: {{ message }}</strong>\n    </div>\n  </div>\n\n<hr>\n  <div class=\"col-md-5\">\n    <form (submit)=\"register()\" method=\"post\">\n      <legend>Register</legend>\n      <div class=\"form-group\">\n        <label>First Name:</label>\n        <input class=\"form-control\" type=\"text\" name=\"user.f_name\" [(ngModel)]=\"user.f_name\">\n      </div>\n      <div class=\"form-group\">\n        <label>Last Name:</label>\n        <input class=\"form-control\" type=\"text\" name=\"user.l_name\" [(ngModel)]=\"user.l_name\">\n      </div>\n      <div class=\"form-group\">\n        <label>Email:</label>\n        <input class=\"form-control\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password:</label>\n        <input class=\"form-control\" type=\"text\" name=\"user.password\" [(ngModel)]=\"user.password\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password Confirmation</label>\n        <input class=\"form-control\" type=\"text\" name=\"user.conf_password\" [(ngModel)]=\"user.conf_password\">\n      </div>\n      <input class=\"btn btn-primary\" type=\"submit\" value=\"Register\">\n    </form>\n  </div>\n</div>\n<!-- end row 2 -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var bike_service_1 = __webpack_require__("../../../../../src/app/bike.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, location, bikeservice, userservice, _router) {
        this.route = route;
        this.location = location;
        this.bikeservice = bikeservice;
        this.userservice = userservice;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("in home component init");
        //get random bike from db
        this.user = {
            name: {
                f_name: "",
                l_name: "",
            },
            email: "",
            password: "",
            conf_password: ""
        };
        this.loggeduser = {
            email: "",
            password: ""
        };
    };
    //get random bike function
    //register function
    HomeComponent.prototype.register = function () {
        var _this = this;
        var obs = this.userservice.addUser(this.user);
        obs.subscribe(function (data) {
            if (!data['message']) {
                _this.userservice.user = data;
                _this._router.navigateByUrl('/browse');
            }
            else {
                _this.message = data['message'];
                console.log(_this.message);
                _this._router.navigateByUrl('/');
            }
        });
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        var obs = this.userservice.logUser(this.loggeduser);
        obs.subscribe(function (data) {
            if (!data['data']) {
                _this.userservice.user = data['data'];
                console.log(_this.userservice.user);
                _this._router.navigateByUrl('/browse');
            }
            else {
                _this.message = data['message'];
                console.log(_this.message);
                _this._router.navigateByUrl('/');
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            bike_service_1.BikeService,
            user_service_1.UserService,
            router_2.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".createbox{\n    border: 2px solid black;\n    padding-bottom: 15px;\n}\n.bigbox {\n    margin: auto;\n}\nimg{\n    height: 100%;\n    width: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;    \n}\n.listingbox_div{\n    padding-top: 10px;\n}\n.listingbtn{\n    margin-top: 10px;\n    width: 124px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n.title_input{\n    width: 90%\n}\n.img_input{\n    width: 100%;\n    margin: 0;\n}\n.title_box{\n    width: 50%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\ninput{\n    padding: 4px;\n}\ntextarea{\n    padding: 4px;\n}\n.right{\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100%;\n}\n.form-group{\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox row\">\n  <h4>Create Listing</h4>\n  <div class=\"createbox col-md-10 offset-1\">\n    <div class=\"bs-component\">\n      <form (submit)=\"addListing()\">\n        <fieldset>\n          <div class=\"form-group row\">\n\n            <div class=\"listingbox_div col-md-3\">\n              <div class=\"form-group row\">\n                <label>Image Upload</label> \n              </div>\n              <div class=\"form-group row\">\n                <img src=\"http://via.placeholder.com/150x150\" alt=\"Bike image\">\n             </div>\n            </div>\n\n            <div class=\"listingbox_div col-md-7\">\n\n              <div class=\"form-group row\">\n                <div class=\"title_box\">\n                  <label>Title</label>\n                  <input \n                    class=\"title_input form-control form-control-sm\" \n                    type=\"text\" name=\"newlisting.title\" \n                    [(ngModel)]=\"newlisting.title\">\n                </div>\n                <div class=\"title_box\">\n                  <label>Img URL</label>\n                  <input \n                    class=\"img_input form-control form-control-sm\" \n                    type=\"text\" \n                    name=\"newlisting.image\" \n                    [(ngModel)]=\"newlisting.image\">\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label>Description</label>\n                <textarea \n                  class=\"form-control form-control-sm\" \n                  name=\"newlisting.description\"\n                  [(ngModel)]=\"newlisting.description\">\n                </textarea>\n              </div>\n\n            </div>\n\n            <div class=\"listingbox_div col-md-2\">\n\n              <div class=\"form-group row\">\n                <label>Price</label>\n                <input \n                  class=\"form-control form-control-sm\" \n                  type=\"text\" \n                  name=\"newlisting.price\"\n                  [(ngModel)]=\"newlisting.price\">\n              </div>\n\n              <div class=\"form-group row\">\n                <label>Location</label>\n                <input \n                  class=\"form-control form-control-sm\" \n                  type=\"text\" \n                  name=\"newlisting.location\"\n                  [(ngModel)]=\"newlisting.location\">\n                <input class=\"listingbtn btn btn-success\" type=\"submit\" value=\"CREATE\">\n              </div>\n\n            </div>\n\n          </div>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n<hr>\n<div class=\"bigbox row\">\n  <h4>Edit/Delete Listings</h4>\n  <div class=\"createbox scrollbar col-md-10 offset-1\" role=\"navigation\">\n    <form (submit)=\"editListing()\" *ngFor=\"let mylisting of loggeduser._listings\">\n      <fieldset>\n        <div class=\"form-group row\">\n\n          <div class=\"listingbox_div col-md-3\">\n              <div class=\"form-group row\">\n                <label>Image Upload</label> \n              </div>\n              <div class=\"form-group row\">\n                <img src=\"{{ mylisting.image }}\" alt=\"Bike image\">\n             </div>\n            </div>\n\n          <div class=\"listingbox_div col-md-7\">\n\n            <div class=\"form-group row\">\n              <div class=\"title_box\">\n                <label>Title</label>\n                <input \n                  class=\"title_input form-control form-control-sm\" \n                  type=\"text\" \n                  name=\"mylisting.title\"\n                  [(ngModel)]=\"mylisting.title\">\n              </div>\n              <div class=\"title_box\">\n                <label>Img URL</label>\n                <input \n                  class=\"img_input form-control form-control-sm\" \n                  type=\"text\" \n                  name=\"mylisting.image\"\n                  [(ngModel)]=\"mylisting.image\">\n              </div> \n            </div>\n\n            <div class=\"form-group row\">\n              <label>Description</label>\n              <textarea \n                class=\"form-control form-control-sm\" \n                type=\"text\" \n                name=\"mylisting.description\"\n                [(ngModel)]=\"mylisting.description\">\n              </textarea>\n            </div>\n\n          </div>\n\n          <div class=\"listingbox_div col-md-2\">\n\n            <div class=\"form-group row\">\n              <label>Price</label>\n              <input \n                class=\"form-control form-control-sm\" \n                type=\"text\" \n                name=\"mylisting.price\"\n                [(ngModel)]=\"mylisting.price\">\n            </div>\n            <div class=\"form-group row\">\n              <label>Location</label>\n              <input \n                class=\"form-control form-control-sm\" \n                type=\"text\"\n                name=\"mylisting.location\" \n                [(ngModel)]=\"mylisting.location\">\n                <input class=\"listingbtn btn btn-info\" type=\"submit\" value=\"UPDATE\">\n                <button class=\"listingbtn btn btn-danger\" (click)=\"delete(listing._id)\">DELETE</button>\n            </div>\n\n          </div>\n\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var bike_service_1 = __webpack_require__("../../../../../src/app/bike.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(route, location, bikeservice, userservice, _router) {
        this.route = route;
        this.location = location;
        this.bikeservice = bikeservice;
        this.userservice = userservice;
        this._router = _router;
    }
    ListingsComponent.prototype.ngOnInit = function () {
        this.newlisting = {
            title: "",
            description: "",
            image: "",
            price: "",
            location: "",
            _owner: {}
        };
        this.loggeduser = this.userservice.user;
    };
    ListingsComponent.prototype.addListing = function () {
        var _this = this;
        console.log("before adding: " + this.loggeduser._id);
        this.newlisting._owner = this.loggeduser;
        var obs = this.userservice.createListing(this.loggeduser._id, this.newlisting);
        obs.subscribe(function (data) {
            console.log("this listing has been added: " + data);
            _this.loggeduser = data;
            _this.newlisting = {
                title: "",
                description: "",
                image: "",
                price: "",
                location: "",
                _owner: {}
            };
            _this.message = "added new listing";
        });
    };
    ListingsComponent = __decorate([
        core_1.Component({
            selector: 'app-listings',
            template: __webpack_require__("../../../../../src/app/listings/listings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            bike_service_1.BikeService,
            user_service_1.UserService,
            router_2.Router])
    ], ListingsComponent);
    return ListingsComponent;
}());
exports.ListingsComponent = ListingsComponent;


/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
//import httpclient and behaviorsubject (allows components to subscribe to dataservice behaviorsubjects)
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var UserService = /** @class */ (function () {
    //give params of httpclient to constructor
    function UserService(_http) {
        this._http = _http;
    }
    //add user
    UserService.prototype.addUser = function (user) {
        console.log('inside user/add service');
        return this._http.post('/user/add', user);
    };
    //update user
    UserService.prototype.updateUser = function (userid, newInfo) {
        return this._http.put("/user/update/" + userid, newInfo);
    };
    //delete user
    UserService.prototype.deleteUser = function (userid) {
        return this._http.delete('/user/delete/' + userid);
    };
    //fetch single user
    //create listing
    UserService.prototype.createListing = function (userid, listing) {
        return this._http.post('/user/' + userid + '/addListing/', listing);
    };
    //update listing
    UserService.prototype.updateListing = function (bikeid, newListing) {
        return this._http.post('/bike/update/' + bikeid, newListing);
    };
    UserService.prototype.logUser = function (user) {
        return this._http.post('/user/login', user);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map