(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");





var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Weather App\"></app-header>\n<app-navigate></app-navigate>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/favorite/favorite.component */ "./src/app/components/favorite/favorite.component.ts");
/* harmony import */ var _components_navigate_navigate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navigate/navigate.component */ "./src/app/components/navigate/navigate.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_daily_forecast_daily_forecast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/daily-forecast/daily-forecast.component */ "./src/app/components/daily-forecast/daily-forecast.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"],
                _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_10__["FavoriteComponent"],
                _components_navigate_navigate_component__WEBPACK_IMPORTED_MODULE_11__["NavigateComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _components_daily_forecast_daily_forecast_component__WEBPACK_IMPORTED_MODULE_13__["DailyForecastComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/daily-forecast/daily-forecast.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/daily-forecast/daily-forecast.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forecast-wrapper{\r\n    width: 190px;\r\n    border: 1px solid #3C3E45;\r\n    box-shadow: 10px 10px 10px black;\r\n}\r\n\r\nh3{\r\n    align-content: center;\r\n}\r\n\r\n@media (max-width: 576px) { \r\n    .forecast-wrapper {\r\n        margin-left: 80px;\r\n    }\r\n}\r\n\r\n@media (max-width: 415px) { \r\n    .forecast-wrapper {\r\n        margin-left: 50px;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) { \r\n    .forecast-wrapper {\r\n        margin-left: 20px;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYWlseS1mb3JlY2FzdC9kYWlseS1mb3JlY2FzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RhaWx5LWZvcmVjYXN0L2RhaWx5LWZvcmVjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZWNhc3Qtd3JhcHBlcntcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzQzNFNDU7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCBibGFjaztcclxufVxyXG5cclxuaDN7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgeyBcclxuICAgIC5mb3JlY2FzdC13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7IFxyXG4gICAgLmZvcmVjYXN0LXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHsgXHJcbiAgICAuZm9yZWNhc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/daily-forecast/daily-forecast.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/daily-forecast/daily-forecast.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forecast-wrapper mt-4 p-1 d-flex flex-column align-items-center\">\n  <h3>{{day}}</h3>\n  <div *ngIf=\"icon < 9; else otherIcon\">\n    <img src=\"https://developer.accuweather.com/sites/default/files/0{{icon}}-s.png\">\n  </div>\n  <ng-template #otherIcon>\n    <img src=\"https://developer.accuweather.com/sites/default/files/{{icon}}-s.png\">\n  </ng-template>\n  <h4>{{tempMaximum}}&deg;/{{tempMinimum}}&deg;</h4>\n</div>"

/***/ }),

/***/ "./src/app/components/daily-forecast/daily-forecast.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/daily-forecast/daily-forecast.component.ts ***!
  \***********************************************************************/
/*! exports provided: DailyForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyForecastComponent", function() { return DailyForecastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DailyForecastComponent = /** @class */ (function () {
    function DailyForecastComponent() {
        this.weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }
    DailyForecastComponent.prototype.ngOnInit = function () {
        this.newDate = new Date(this.date);
        this.day = this.weekDay[this.newDate.getDay()];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DailyForecastComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DailyForecastComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DailyForecastComponent.prototype, "tempMinimum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DailyForecastComponent.prototype, "tempMaximum", void 0);
    DailyForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-daily-forecast',
            template: __webpack_require__(/*! ./daily-forecast.component.html */ "./src/app/components/daily-forecast/daily-forecast.component.html"),
            styles: [__webpack_require__(/*! ./daily-forecast.component.css */ "./src/app/components/daily-forecast/daily-forecast.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DailyForecastComponent);
    return DailyForecastComponent;
}());



/***/ }),

/***/ "./src/app/components/favorite/favorite.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/favorite/favorite.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favorite-wrapper{\r\n    width: 220px;\r\n    height: 220px;\r\n    background: whitesmoke;\r\n}\r\n\r\nh3{\r\n    color: #348899;\r\n}\r\n\r\nbutton{\r\n    width: 150px; \r\n    height: 40px;\r\n    border-radius: 7px; \r\n    background-color: #F2EBC7;\r\n    color: #343642;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    transition-duration: 0.5s;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover{\r\n    transform: scale(1.2);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXRlLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuaDN7XHJcbiAgICBjb2xvcjogIzM0ODg5OTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1MHB4OyBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFQkM3O1xyXG4gICAgY29sb3I6ICMzNDM2NDI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/components/favorite/favorite.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/favorite/favorite.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"favorite-wrapper m-2 p-2 border rounded d-flex flex-column align-items-center\">\n  <h2>{{favorite.localizedName}}</h2>\n  <h3>{{favorite.weatherText}}</h3>\n  <h2>{{favorite.tempValue}}&deg;</h2>\n  <a class=\"router\" routerLink=\"../home\"><button (click)=\"showMoreDetails()\">see more</button></a>\n</div>"

/***/ }),

/***/ "./src/app/components/favorite/favorite.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/favorite/favorite.component.ts ***!
  \***********************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent() {
        this.favoriteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent.prototype.showMoreDetails = function () {
        this.favoriteEvent.emit(this.favorite);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteComponent.prototype, "favorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteComponent.prototype, "favoriteEvent", void 0);
    FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite',
            template: __webpack_require__(/*! ./favorite.component.html */ "./src/app/components/favorite/favorite.component.html"),
            styles: [__webpack_require__(/*! ./favorite.component.css */ "./src/app/components/favorite/favorite.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favorites-wrapper{\r\n    height: 1300px;\r\n}\r\n\r\n.fa-home{\r\n    color: #F2EBC7;\r\n}\r\n\r\n.fa-home:hover{\r\n    color: yellow;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvcml0ZXMtd3JhcHBlcntcclxuICAgIGhlaWdodDogMTMwMHB4O1xyXG59XHJcblxyXG4uZmEtaG9tZXtcclxuICAgIGNvbG9yOiAjRjJFQkM3O1xyXG59XHJcblxyXG4uZmEtaG9tZTpob3ZlcntcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"favorites-wrapper\">\n    <div class=\"w-100 h-25 d-flex align-items-center justify-content-center\" *ngIf=\"favorites.length == 0\">\n        <div class=\"text-center\">\n            <h2 class=\"font-weight-bold\">You don't have any favorites yet</h2>\n            <h4>For adding a city to favorites return to home page <a routerLink=\"../home\"><i\n                        class=\"fas fa-home\"></i></a></h4>\n        </div>\n    </div>\n    <div class=\"w-100 m-4 d-flex flex-wrap align-items-center\">\n        <div class=\"d-flex flex-wrap\" *ngFor=\"let currentFavorite of favorites\">\n            <app-favorite [favorite]=\"currentFavorite\" (favoriteEvent)=\"onFavoriteDetails($event)\"></app-favorite>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoritesService) {
        this.favoritesService = favoritesService;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.favorites = this.favoritesService.getFavorites();
    };
    FavoritesComponent.prototype.onFavoriteDetails = function (favorite) {
        localStorage.setItem('currentCityKey', favorite.key);
        localStorage.setItem('currentCityName', favorite.localizedName);
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    color: #343642;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    font-weight: bold; \r\n    margin: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOiAjMzQzNjQyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-wrapper{\r\n    height: 1300px;\r\n    margin-top: 5px; \r\n}\r\n\r\n.weather-wrapper{\r\n    background: rgba(226, 228, 227, 0.609);\r\n}\r\n\r\n.weather-details{\r\n    text-align: center;\r\n}\r\n\r\n.item{\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.item:hover {\r\n    background-color: #343642;\r\n    color: #F2EBC7;\r\n}\r\n\r\n.fa-heart{\r\n    color: red;\r\n    margin-right: 10px;\r\n    font-size: 35px; \r\n}\r\n\r\nimg{\r\n    width: 150px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.list-container{\r\n    position: absolute;\r\n}\r\n\r\n.btn{\r\n    margin-bottom: 14px; \r\n}\r\n\r\n@media (max-width: 576px) { \r\n    .btn-favorite {\r\n        margin-top: 50px;\r\n        margin-left: 10%;\r\n    }\r\n}\r\n\r\n@media (max-width: 321px) { \r\n    .btn-favorite {\r\n        margin-top: 50px;\r\n        margin-left: 0px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDEzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDsgXHJcbn1cclxuXHJcbi53ZWF0aGVyLXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNiwgMjI4LCAyMjcsIDAuNjA5KTtcclxufVxyXG5cclxuLndlYXRoZXItZGV0YWlsc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW17XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM2NDI7XHJcbiAgICBjb2xvcjogI0YyRUJDNztcclxufVxyXG5cclxuLmZhLWhlYXJ0e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDsgXHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4OyBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7IFxyXG4gICAgLmJ0bi1mYXZvcml0ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIxcHgpIHsgXHJcbiAgICAuYnRuLWZhdm9yaXRlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper w-100 d-flex flex-column align-items-center\">\n  <div class=\"w-50 m-5\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"Enter city\" (keyup)=\"autocomplete()\" #citySearch>\n    <ul class=\"w-50 list-group list-container\">\n      <li class=\"item list-group-item list-group-item-action\" *ngFor=\"let city of citiesResults\"\n        (click)=\"setCity(city)\">{{city.LocalizedName}}, {{city.Country.LocalizedName}}</li>\n    </ul>\n  </div>\n  <div class=\"weather-wrapper w-75\">\n    <div class=\"w-100 p-3 d-flex flex-column align-items-center flex-sm-row justify-content-sm-between\">\n      <div class=\"weather-details d-flex flex-column align-items-center flex-sm-row justify-content-sm-between\"\n        *ngIf=\"city\">\n        <div>\n          <div *ngIf=\"city.WeatherIcon < 9; else otherIcon\">\n            <img src=\"https://developer.accuweather.com/sites/default/files/0{{city.WeatherIcon}}-s.png\">\n          </div>\n          <ng-template #otherIcon>\n            <img src=\"https://developer.accuweather.com/sites/default/files/{{city.WeatherIcon}}-s.png\">\n          </ng-template>\n        </div>\n        <div>\n          <div>\n            <h2> {{cityName}} </h2>\n          </div>\n          <div>\n            <h3> {{city.Temperature.Metric.Value}}&deg;</h3>\n          </div>\n          <div>\n            <h3> {{city.WeatherText}} </h3>\n          </div>\n        </div>\n      </div>\n      <div class=\"btn-favorite align-self-start\">\n        <i [ngClass]=\"!isFavorite ? 'far fa-heart' : 'fas fa-heart'\"></i>\n        <button class=\"btn btn-danger btn-rounded\" (click)=\"onFavoriteClick()\">{{btnFavorite}}</button>\n      </div>\n    </div>\n    <div\n      class=\"w-100 mt-4 mb-5 d-flex flex-wrap align-items-center justify-content-sm-between justify-content-sm-around\"\n      *ngIf=\"forecastOf5Days\">\n      <div class=\"d-flex flex-wrap\" *ngFor=\"let day of forecastOf5Days.DailyForecasts\">\n        <app-daily-forecast [date]=\"day.Date\" [icon]=\"day.Day.Icon\" [tempMinimum]=\"day.Temperature.Minimum.Value\"\n          [tempMaximum]=\"day.Temperature.Maximum.Value\">\n        </app-daily-forecast>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(weatherService, favoritesService, toastr) {
        this.weatherService = weatherService;
        this.favoritesService = favoritesService;
        this.toastr = toastr;
        this.cityName = "Tel Aviv";
        this.cityKey = "215854";
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentCityKey')) {
            this.cityKey = localStorage.getItem('currentCityKey');
            this.cityName = localStorage.getItem('currentCityName');
        }
        this.onCityFavoriteExist(this.cityKey);
        this.getWeather(this.cityKey);
        this.get5DaysForecast(this.cityKey);
    };
    HomeComponent.prototype.removeKeyAndName = function () {
        localStorage.removeItem('currentCityKey');
        localStorage.removeItem('currentCityName');
    };
    HomeComponent.prototype.autocomplete = function () {
        var _this = this;
        var regex = /^[A-Za-z ]*$/;
        var isEnglish = regex.test(this.citySearch.nativeElement.value);
        if (isEnglish) {
            this.weatherService.getCityAutocomplete(this.citySearch.nativeElement.value).subscribe(function (data) {
                _this.citiesResults = data;
            }, function (error) {
                _this.errorMessage(error.name);
            });
        }
        else {
            this.errorMessage('English letters only');
        }
    };
    HomeComponent.prototype.setCity = function (city) {
        this.cityName = city.LocalizedName;
        this.cityKey = city.Key;
        this.citiesResults = [];
        this.citySearch.nativeElement.value = this.cityName + ", " + city.Country.LocalizedName;
        localStorage.setItem('currentCityKey', this.cityKey);
        localStorage.setItem('currentCityName', this.cityName);
        this.onCityFavoriteExist(this.cityKey);
        this.getWeather(this.cityKey);
        this.get5DaysForecast(this.cityKey);
    };
    HomeComponent.prototype.getWeather = function (key) {
        var _this = this;
        this.weatherService.getCurrentWeather(key).subscribe(function (data) {
            _this.city = data[0];
        }, function (error) {
            _this.errorMessage(error.name);
        });
    };
    HomeComponent.prototype.get5DaysForecast = function (key) {
        var _this = this;
        this.weatherService.get5DaysForecast(key).subscribe(function (data) {
            _this.forecastOf5Days = data;
        }, function (error) {
            _this.errorMessage(error.name);
        });
    };
    HomeComponent.prototype.onFavoriteClick = function () {
        this.isExist = this.favoritesService.checkFavoriteExist(this.cityKey);
        if (this.isExist) {
            this.removeFavorite();
            this.btnFavorite = 'Add To Favorites';
            this.isFavorite = false;
        }
        else {
            this.addFavorite();
            this.successMessage("City added successfully");
            this.btnFavorite = 'Remove From Favorites';
            this.isFavorite = true;
        }
    };
    HomeComponent.prototype.removeFavorite = function () {
        this.favoritesService.removeFromFavorites(this.cityKey);
    };
    HomeComponent.prototype.addFavorite = function () {
        this.favorite = {
            key: this.cityKey,
            localizedName: this.cityName,
            tempValue: this.city.Temperature.Metric.Value,
            weatherText: this.city.WeatherText
        };
        this.favoritesService.addToFavorites(this.favorite);
    };
    HomeComponent.prototype.onCityFavoriteExist = function (key) {
        this.isExist = this.favoritesService.checkFavoriteExist(key);
        if (this.isExist) {
            this.btnFavorite = 'Remove From Favorites';
            this.isFavorite = true;
        }
        else {
            this.btnFavorite = 'Add To Favorites';
            this.isFavorite = false;
        }
    };
    HomeComponent.prototype.errorMessage = function (error) {
        this.toastr.error("Error:" + JSON.stringify(error));
    };
    HomeComponent.prototype.successMessage = function (success) {
        this.toastr.success("success:" + JSON.stringify(success));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('citySearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "citySearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HomeComponent.prototype, "removeKeyAndName", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navigate/navigate.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/navigate/navigate.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 10px auto;\r\n    border: 1px solid #3C3E45;\r\n    box-shadow: 10px 10px 10px black;\r\n    background: white; \r\n}\r\n\r\nul {\r\n    width: 100%;\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-columns: 70% 15% 15% ;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.router{\r\n    font-size: 25px;\r\n    display: block;\r\n    color: #979C9C;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n.router:hover{\r\n    color: white; \r\n    font-weight: bold;\r\n    background-color: #979C9C;\r\n}\r\n\r\nimg{\r\n    width: 80px;\r\n    height: 60px;\r\n    margin-top: 5px;\r\n    margin-left: 10px;\r\n}\r\n\r\n@media (max-width: 768px) { \r\n    ul {\r\n        grid-template-columns: 50% 25% 25% ;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) { \r\n    ul {\r\n        grid-template-columns: 30% 35% 35% ;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) { \r\n    ul {\r\n        grid-template-columns: 30% 29% 40% ;\r\n    } \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0ZS9uYXZpZ2F0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksbUNBQW1DO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQztJQUN2QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQ0FBbUM7SUFDdkM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGUvbmF2aWdhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNDM0U0NTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7IFxyXG59XHJcblxyXG51bCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDE1JSAxNSUgO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4gIFxyXG4ucm91dGVye1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzk3OUM5QztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIFxyXG4ucm91dGVyOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OUM5QztcclxufSBcclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgIHVsIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSAyNSUgMjUlIDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7IFxyXG4gICAgdWwge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDM1JSAzNSUgO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHsgXHJcbiAgICB1bCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMjklIDQwJSA7XHJcbiAgICB9IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navigate/navigate.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/navigate/navigate.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li>\n      <a routerLink=\"home\"><img src=\"./../assets/sun-smiley.png\"></a>\n    </li>\n    <li>\n      <a class=\"router\" routerLink=\"home\">Home</a>\n    </li>\n    <li>\n      <a class=\"router\" routerLink=\"favorites\">Favorites</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/navigate/navigate.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/navigate/navigate.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateComponent", function() { return NavigateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigateComponent = /** @class */ (function () {
    function NavigateComponent() {
    }
    NavigateComponent.prototype.ngOnInit = function () {
    };
    NavigateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigate',
            template: __webpack_require__(/*! ./navigate.component.html */ "./src/app/components/navigate/navigate.component.html"),
            styles: [__webpack_require__(/*! ./navigate.component.css */ "./src/app/components/navigate/navigate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigateComponent);
    return NavigateComponent;
}());



/***/ }),

/***/ "./src/app/endpoint.ts":
/*!*****************************!*\
  !*** ./src/app/endpoint.ts ***!
  \*****************************/
/*! exports provided: autocompleteUrl, rootCurrentWeather, currentWeatherParams, rootForecast5Days, forecast5DaysParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocompleteUrl", function() { return autocompleteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootCurrentWeather", function() { return rootCurrentWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentWeatherParams", function() { return currentWeatherParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootForecast5Days", function() { return rootForecast5Days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forecast5DaysParams", function() { return forecast5DaysParams; });
var apiKey = "m80B8Z4rQzE2w30WtuOFJj6QvZuCvO9d";
var autocompleteUrl = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + apiKey + "&language=en-us";
var rootCurrentWeather = "https://dataservice.accuweather.com/currentconditions/v1/";
var currentWeatherParams = "?apikey=" + apiKey + "&language=en-us&details=false";
var rootForecast5Days = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
var forecast5DaysParams = "?apikey=" + apiKey + "&details=false&metric=true";


/***/ }),

/***/ "./src/app/services/favorites.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoritesService = /** @class */ (function () {
    function FavoritesService() {
        this.favorites = [];
    }
    FavoritesService.prototype.checkFavoriteExist = function (key) {
        var index = this.favorites.findIndex(function (item) { return item.key === key; });
        if (index !== -1) {
            return true;
        }
        else {
            return false;
        }
    };
    FavoritesService.prototype.addToFavorites = function (favorite) {
        this.favorites.push(favorite);
    };
    FavoritesService.prototype.removeFromFavorites = function (key) {
        var index = this.favorites.findIndex(function (item) { return item.key === key; });
        if (index !== -1) {
            this.favorites.splice(index, 1);
        }
    };
    FavoritesService.prototype.getFavorites = function () {
        return this.favorites;
    };
    FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavoritesService);
    return FavoritesService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint */ "./src/app/endpoint.ts");








var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getCityAutocomplete = function (cityName) {
        return this.http.get(_endpoint__WEBPACK_IMPORTED_MODULE_3__["autocompleteUrl"] + "&q=" + cityName);
    };
    WeatherService.prototype.getCurrentWeather = function (cityKey) {
        return this.http.get(_endpoint__WEBPACK_IMPORTED_MODULE_3__["rootCurrentWeather"] + cityKey + _endpoint__WEBPACK_IMPORTED_MODULE_3__["currentWeatherParams"]);
    };
    WeatherService.prototype.get5DaysForecast = function (cityKey) {
        return this.http.get(_endpoint__WEBPACK_IMPORTED_MODULE_3__["rootForecast5Days"] + cityKey + _endpoint__WEBPACK_IMPORTED_MODULE_3__["forecast5DaysParams"]);
    };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\elino\sqlabs\exams\herolo\wet\weather-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map