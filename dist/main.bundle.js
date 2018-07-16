webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_date_countdown__ = __webpack_require__("./node_modules/ng2-date-countdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_date_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_date_countdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__ = __webpack_require__("./src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__posts_service__ = __webpack_require__("./src/app/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__priority_service__ = __webpack_require__("./src/app/priority.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__total_service__ = __webpack_require__("./src/app/total.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filter_service__ = __webpack_require__("./src/app/filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var Routes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts', component: __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_date_countdown__["CountDown"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(Routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__posts_service__["a" /* PostsService */],
                __WEBPACK_IMPORTED_MODULE_8__product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_9__priority_service__["a" /* PriorityService */],
                __WEBPACK_IMPORTED_MODULE_10__total_service__["a" /* TotalService */],
                __WEBPACK_IMPORTED_MODULE_11__filter_service__["a" /* FilterService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        "content-type": "application/json",
        "cache-control": "no-cache",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "access-control-allow-headers": "X-Requested-With,content-type",
        "access-control-allow-credentials": "true"
    })
};
var FilterService = /** @class */ (function () {
    function FilterService(http) {
        this.http = http;
    }
    FilterService.prototype.getAllFilters = function () {
        var body = {};
        return this.http.post('/routes/getFiltersFilter', body, httpOptions);
        // return this.http.get('http://localhost:4600/routes/getFiltersProduct').map((products) => {
        //   return products;
        // })
    };
    FilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('/routes/posts/').map(function (posts) {
            return posts;
        });
    };
    PostsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.intro {\r\n    background-color: white;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\ndiv {\r\n  max-width: 1400px;\r\n}\r\n\r\n/deep/ .countdown {\r\n  width: 100%;\r\n  height: 100px;\r\n  background: white;\r\n}\r\n\r\n.two-dots {\r\n  display: block;\r\n}\r\n\r\n.measurements {\r\n  color: blue;\r\n  margin-right: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.divider {\r\nfont-size: 100px;\r\n}\r\n\r\n.top-left {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 16px;\r\n}\r\n\r\n.top-right {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 16px;\r\n}\r\n\r\n@media screen and (max-width: 1204px) {\r\n    .tooSmall {\r\n        display: none !important;\r\n    }\r\n\r\n}\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n"

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\" align=\"center\">\n      <img src=\"/assets/images/realtime-gaming-jackpots.jpg\" alt=\"bugbusters\">\n      <div class=\"top-left tooSmall\"><img src=\"/assets/images/bug.png\" alt=\"bugbusters\"></div>\n      <div class=\"top-right tooSmall\"><img src=\"/assets/images/bug.png\" alt=\"bugbusters\"></div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" align=\"center\">\n  <countdown units=\"Days | Hours | Minutes | Seconds\"  end=\"July 21, 2018\"></countdown>\n</div>\n\n\n\n\n<div *ngIf=\"showLoadingComponent\" class=\"container intro\">\n  <div class=\"row\">\n    <div class=\"col\" align=\"center\">\n      <h1>Loading Components, please wait</h1>\n      <div class=\"loader\"></div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showLoadingPriority\" class=\"container intro\">\n  <div class=\"row\">\n    <div class=\"col\" align=\"center\">\n      <h1>Loading Priorities, please wait</h1>\n      <div class=\"loader\"></div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showLoadingFilter\" class=\"container intro\">\n  <div class=\"row\">\n    <div class=\"col\" align=\"center\">\n      <h1>Loading Assignees and reporters, please wait</h1>\n      <div class=\"loader\"></div>\n    </div>\n  </div>\n</div>\n<!------------------------------------------------------------------------------------------->\n<div *ngIf=\"showComponent\" class=\"container jumbotron\">\n  <div class=\"row\">\n    <div class=\"col\" align=\"center\">\n      <h1>Defects Per Component</h1>\n      <br>\n    </div>\n    <div class=\"container\" align=\"center\">\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{comp0}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalcomp0}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{comp1}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalcomp1}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{comp2}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalcomp2}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\" align=\"center\">\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{comp3}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalcomp3}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{comp4}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalcomp4}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{comp5}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalcomp5}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!----------------------------------------------------------------------------------------------------------------------------------------------->\n\n<div *ngIf=\"showPriority\" class=\"container jumbotron\">\n  <div class=\"row\">\n    <div class=\"col\" align=\"center\">\n      <h1>Defects Per Priority</h1>\n      <br>\n    </div>\n    <div class=\"container\" align=\"center\">\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{pri0}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalpri0}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{pri1}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalpri1}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{pri2}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalpri2}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!----------------------------------------------------------------------------------------------------------------------------------------------->\n\n<div *ngIf=\"showFilter\" class=\"container jumbotron\">\n  <div class=\"row\">\n    <div class=\"col\" align=\"center\">\n      <h1>Assignees and Reporters</h1>\n      <br>\n    </div>\n    <div class=\"container\" align=\"center\">\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{fil0}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalfil0}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"text-center\">\n                <th>{{fil1}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-primary text-center\">\n                <td><font size=\"20\">{{totalfil1}}</font></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__("./src/app/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__priority_service__ = __webpack_require__("./src/app/priority.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__total_service__ = __webpack_require__("./src/app/total.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_service__ = __webpack_require__("./src/app/filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, productService, priorityService, totalService, filterService) {
        var _this = this;
        this.postService = postService;
        this.productService = productService;
        this.priorityService = priorityService;
        this.totalService = totalService;
        this.filterService = filterService;
        this.filtersPro = [];
        this.filtersPri = [];
        this.filtersFil = [];
        this.priorities = [];
        this.components = [];
        this.filters = [];
        this.showLoadingComponent = true;
        this.showLoadingPriority = true;
        this.showLoadingFilter = true;
        this.showFilter = false;
        this.showComponent = false;
        this.showPriority = false;
        setInterval(function () { return _this.reloadPage(); }, 180000);
    }
    PostsComponent.prototype.ngOnInit = function () {
        // this.postService.getAllPosts().subscribe(posts => {
        //   this.posts = posts;
        // });
        this.getProduct();
        this.getPriority();
        this.getFilters();
    };
    PostsComponent.prototype.getProduct = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (products) {
            _this.filtersPro = Object.keys(products);
            for (var i = 0; i < _this.filtersPro.length; i++) {
                _this.totalService.getTotals(_this.filtersPro[i], products[_this.filtersPro[i]], i).subscribe(function (overAll) {
                    _this.components.push(overAll);
                    if (_this.filtersPro.length == _this.components.length) {
                        for (var x = 0; x < _this.components.length; x++) {
                            if (x == 0) {
                                _this.comp0 = _this.components[0].name;
                                _this.totalcomp0 = _this.components[0].amount;
                            }
                            if (x == 1) {
                                _this.comp1 = _this.components[1].name;
                                _this.totalcomp1 = _this.components[1].amount;
                            }
                            if (x == 2) {
                                _this.comp2 = _this.components[2].name;
                                _this.totalcomp2 = _this.components[2].amount;
                            }
                            if (x == 3) {
                                _this.comp3 = _this.components[3].name;
                                _this.totalcomp3 = _this.components[3].amount;
                            }
                            if (x == 4) {
                                _this.comp4 = _this.components[4].name;
                                _this.totalcomp4 = _this.components[4].amount;
                            }
                            if (x == 5) {
                                _this.comp5 = _this.components[5].name;
                                _this.totalcomp5 = _this.components[5].amount;
                            }
                        }
                        _this.showLoadingComponent = false;
                        _this.showComponent = true;
                    }
                });
                //console.log(this.filtersPro[i] + ' : ' + products[this.filtersPro[i]]);
            }
        });
    };
    PostsComponent.prototype.getPriority = function () {
        var _this = this;
        this.priorityService.getAllPriorities().subscribe(function (products) {
            _this.filtersPri = Object.keys(products);
            for (var i = 0; i < _this.filtersPri.length; i++) {
                _this.totalService.getTotals(_this.filtersPri[i], products[_this.filtersPri[i]], i).subscribe(function (overAll) {
                    _this.priorities.push(overAll);
                    if (_this.filtersPri.length == _this.priorities.length) {
                        for (var x = 0; x < _this.priorities.length; x++) {
                            if (x == 0) {
                                _this.pri0 = _this.priorities[0].name;
                                _this.totalpri0 = _this.priorities[0].amount;
                            }
                            if (x == 1) {
                                _this.pri1 = _this.priorities[1].name;
                                _this.totalpri1 = _this.priorities[1].amount;
                            }
                            if (x == 2) {
                                _this.pri2 = _this.priorities[2].name;
                                _this.totalpri2 = _this.priorities[2].amount;
                            }
                        }
                        _this.showLoadingPriority = false;
                        _this.showPriority = true;
                        for (var y = 0; y < _this.priorities.length; y++) {
                            for (var t = 0; t < _this.priorities[y].issues.length; t++) {
                                console.log(_this.priorities[y].name + " assignee: " + _this.priorities[y].issues[t].fields.assignee.name);
                                console.log(_this.priorities[y].name + " reporter: " + _this.priorities[y].issues[t].fields.reporter.name);
                            }
                        }
                    }
                    //console.log(this.priorities);
                });
                //console.log(this.filtersPri[i] + ' : ' + products[this.filtersPri[i]]);
            }
        });
    };
    PostsComponent.prototype.getFilters = function () {
        var _this = this;
        this.filterService.getAllFilters().subscribe(function (products) {
            _this.filtersFil = Object.keys(products);
            for (var i = 0; i < _this.filtersFil.length; i++) {
                _this.totalService.getTotals(_this.filtersFil[i], products[_this.filtersFil[i]], i).subscribe(function (overAll) {
                    _this.filters.push(overAll);
                    if (_this.filtersFil.length == _this.filters.length) {
                        for (var x = 0; x < _this.filters.length; x++) {
                            if (x == 0) {
                                _this.fil0 = _this.filters[0].name;
                                _this.totalfil0 = _this.filters[0].amount;
                            }
                            if (x == 1) {
                                _this.fil1 = _this.filters[1].name;
                                _this.totalfil1 = _this.filters[1].amount;
                            }
                        }
                        _this.showLoadingFilter = false;
                        _this.showFilter = true;
                    }
                    //console.log(this.priorities);
                });
                //console.log(this.filtersPri[i] + ' : ' + products[this.filtersPri[i]]);
            }
        });
    };
    PostsComponent.prototype.reloadPage = function () {
        location.reload();
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__priority_service__["a" /* PriorityService */], __WEBPACK_IMPORTED_MODULE_4__total_service__["a" /* TotalService */],
            __WEBPACK_IMPORTED_MODULE_5__filter_service__["a" /* FilterService */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/priority.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriorityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        "content-type": "application/json",
        "cache-control": "no-cache",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "access-control-allow-headers": "X-Requested-With,content-type",
        "access-control-allow-credentials": "true"
    })
};
var PriorityService = /** @class */ (function () {
    function PriorityService(http) {
        this.http = http;
    }
    PriorityService.prototype.getAllPriorities = function () {
        var body = {};
        return this.http.post('/routes/getFiltersPriority', body, httpOptions);
        // return this.http.get('http://localhost:4600/routes/getFiltersProduct').map((products) => {
        //   return products;
        // })
    };
    PriorityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PriorityService);
    return PriorityService;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        "content-type": "application/json",
        "cache-control": "no-cache",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "access-control-allow-headers": "X-Requested-With,content-type",
        "access-control-allow-credentials": "true"
    })
};
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAllProducts = function () {
        var body = {};
        return this.http.post('/routes/getFiltersProduct', body, httpOptions);
        // return this.http.get('http://localhost:4600/routes/getFiltersProduct').map((products) => {
        //   return products;
        // })
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/total.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        "content-type": "application/json",
        "cache-control": "no-cache",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "access-control-allow-headers": "X-Requested-With,content-type",
        "access-control-allow-credentials": "true"
    })
};
var TotalService = /** @class */ (function () {
    function TotalService(http) {
        this.http = http;
    }
    TotalService.prototype.getTotals = function (filterNumber, filterName, count) {
        var body = { filternumber: filterNumber, filtername: filterName };
        return this.http.post('/routes/getTotal', body, httpOptions);
        // return this.http.get('http://localhost:4600/routes/getFiltersProduct').map((products) => {
        //   return products;
        // })
    };
    TotalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TotalService);
    return TotalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map