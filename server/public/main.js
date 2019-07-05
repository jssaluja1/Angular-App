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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee.component */ "./src/app/employee.component.ts");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position.component */ "./src/app/position.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'employees', component: _employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"] },
    { path: 'positions', component: _positions_component__WEBPACK_IMPORTED_MODULE_4__["PositionsComponent"] },
    { path: 'employee/:_id', component: _employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"] },
    { path: 'position/:_id', component: _position_component__WEBPACK_IMPORTED_MODULE_7__["PositionComponent"] },
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*********************************************************************************
* WEB422 – Assignment 06
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: _Jasmeet Singh Saluja______ Student ID: _102579166__ Date: _3rd August, 2018_
*
* Heroku Link: ___________________________
*
********************************************************************************/

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.component */ "./src/app/content.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee.component */ "./src/app/employee.component.ts");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./position.component */ "./src/app/position.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _employees_component__WEBPACK_IMPORTED_MODULE_8__["EmployeesComponent"],
                _positions_component__WEBPACK_IMPORTED_MODULE_9__["PositionsComponent"],
                _not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _employee_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeComponent"],
                _position_component__WEBPACK_IMPORTED_MODULE_15__["PositionComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [
                _data_employee_service__WEBPACK_IMPORTED_MODULE_12__["EmployeeServiceService"],
                _data_position_service__WEBPACK_IMPORTED_MODULE_11__["PositionServiceService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content.component.css":
/*!***************************************!*\
  !*** ./src/app/content.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content.component.html":
/*!****************************************!*\
  !*** ./src/app/content.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/content.component.ts":
/*!**************************************!*\
  !*** ./src/app/content.component.ts ***!
  \**************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/employee.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/employee.service.ts ***!
  \******************************************/
/*! exports provided: EmployeeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeServiceService", function() { return EmployeeServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeServiceService = /** @class */ (function () {
    function EmployeeServiceService(http) {
        this.http = http;
        this.url = "https://stormy-earth-26721.herokuapp.com";
    }
    EmployeeServiceService.prototype.getEmployees = function () {
        return this.http.get(this.url + "/employees");
    };
    EmployeeServiceService.prototype.saveEmployee = function (employee) {
        return this.http.put(this.url + "/employee/" + employee._id, employee);
    };
    EmployeeServiceService.prototype.getEmployee = function (id) {
        return this.http.get(this.url + "/employee-raw/" + id);
    };
    EmployeeServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeServiceService);
    return EmployeeServiceService;
}());



/***/ }),

/***/ "./src/app/data/position.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/position.service.ts ***!
  \******************************************/
/*! exports provided: PositionServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionServiceService", function() { return PositionServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionServiceService = /** @class */ (function () {
    function PositionServiceService(http) {
        this.http = http;
        this.URL = "https://stormy-earth-26721.herokuapp.com";
    }
    PositionServiceService.prototype.getPositions = function () {
        return this.http.get(this.URL + "/positions");
    };
    PositionServiceService.prototype.savePosition = function (position) {
        return this.http.put(this.URL + "/position/" + position._id, position);
    };
    PositionServiceService.prototype.getPosition = function (id) {
        return this.http.get(this.URL + "/position/" + id);
    };
    PositionServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PositionServiceService);
    return PositionServiceService;
}());



/***/ }),

/***/ "./src/app/employee.component.css":
/*!****************************************!*\
  !*** ./src/app/employee.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }"

/***/ }),

/***/ "./src/app/employee.component.html":
/*!*****************************************!*\
  !*** ./src/app/employee.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" *ngIf=\"employee\" >\n  <h2>Employee: {{employee.FirstName}}&nbsp;{{employee.LastName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\" *ngIf=\"employee\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': FirstName.errors}\">\n          <label for=\"FirstName\" class=\"control-label\">First Name:</label>\n          <input class=\"form-control\" id=\"FirstName\" type=\"text\"  name=\"FirstName\" [(ngModel)]=\"employee.FirstName\" #FirstName=\"ngModel\" required autofocus/>\n          <span class=\"help-block\" *ngIf=\"FirstName.errors && FirstName.errors.required\">First Name is Required</span>\n        </div>   \n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': LastName.errors}\">\n          <label for=\"LastName\" class=\"control-label\">Last Name:</label>\n          <input class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" [(ngModel)]=\"employee.LastName\" #LastName=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"LastName.errors && LastName.errors.required\">Last Name is Required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"Position\" class=\"control-label\">Position:</label>\n          <select class=\"form-control\" id=\"Position\"  name=\"Position\" [(ngModel)]=\"employee.Position\">\n            <option  *ngFor=\"let position of positions\" [value]=\"position._id\">{{position.PositionName}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': SalaryBonus.errors}\">\n          <label for=\"SalaryBonus\" class=\"control-label\">Salary Bonus</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">$</span>\n            <input class=\"form-control\" id=\"SalaryBonus\" type=\"number\" name=\"SalaryBonus\" [(ngModel)]=\"employee.SalaryBonus\" #SalaryBonus=\"ngModel\" required/>\n            <span class=\"help-block\" *ngIf=\"SalaryBonus.errors && SalaryBonus.errors.required\">Salary bonus is Required</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressStreet.errors}\">\n          <label for=\"AddressStreet\" class=\"control-label\">Address (Street):</label>\n          <input class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" [(ngModel)]=\"employee.AddressStreet\" #AddressStreet=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressStreet.errors && AddressStreet.errors.required\">Address street is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressCity.errors}\">\n          <label for=\"AddressCity\">Address (City):</label>\n          <input class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\" [(ngModel)]=\"employee.AddressCity\" #AddressCity=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressCity.errors && AddressCity.errors.required\">Address city is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressState.errors}\">\n          <label for=\"AddressState\" class=\"control-label\">Address (State):</label>\n          <input class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\" [(ngModel)]=\"employee.AddressState\" #AddressState=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressState.errors && AddressState.errors.required\">Address state is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressZip.errors}\">\n          <label for=\"AddressZip\" class=\"control-label\">Address (Zip Code):</label>\n          <input class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\" [(ngModel)]=\"employee.AddressZip\" #AddressZip=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressZip.errors && AddressZip.errors.required\">Address zip is Required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label for=\"PhoneNum\" class=\"control-label\">Phone Number:</label>\n          <input class=\"form-control\" id=\"PhoneNum\" type=\"text\" name=\"PhoneNum\" [(ngModel)]=\"employee.PhoneNum\" #PhoneNum=\"ngModel\" ng-pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[\n          ]*){4}\" />\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': Extension.errors}\">\n          <label for=\"Extension\" class=\"control-label\">Extension:</label>\n          <input class=\"form-control\" id=\"Extension\" type=\"number\" name=\"Extension\" [(ngModel)]=\"employee.Extension\" #Extension=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"Extension.errors && Extension.errors.required\">Extension is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"HireDate\" class=\"control-label\">Hire Date:</label>\n          <input class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" value=\"HireDate\" [value]=\"employee.HireDate | date\" readonly >\n        </div>\n      </div>\n    </div>\n    <hr />\n    <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n    <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" [disabled]=\"!f.valid\" />\n    <br />\n    <br />\n  </form>\n</div>\n</div>\n<br />\n<div class=\"alert alert-success\" *ngIf=\"successMessage\" >\n  <strong>Success!</strong> First Name Last Name's information was successfully saved.\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"failMessage\" >\n  <strong>Error!</strong> First Name Last Name's information could not be saved.\n</div>\n</div>\n<br /><br />"

/***/ }),

/***/ "./src/app/employee.component.ts":
/*!***************************************!*\
  !*** ./src/app/employee.component.ts ***!
  \***************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(e, p, r) {
        this.e = e;
        this.p = p;
        this.r = r;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.r.params.subscribe(function (param) {
            _this.employeeSubscription = _this.e.getEmployee(param['_id']).subscribe(function (data) {
                _this.employee = data[0];
            });
            _this.getPositionsSubcription = _this.p.getPositions().subscribe(function (data) {
                _this.positions = data;
            });
        });
    };
    EmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.saveEmployeeSubscription = this.e.saveEmployee(this.employee).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () { _this.successMessage = false; }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () { _this.failMessage = false; }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSubcription) {
            this.getPositionsSubcription.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_data_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeServiceService"], _data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees.component.css":
/*!*****************************************!*\
  !*** ./src/app/employees.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}"

/***/ }),

/***/ "./src/app/employees.component.html":
/*!******************************************!*\
  !*** ./src/app/employees.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employees</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n    Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n</div>\n\n<input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" placeholder=\"Search\nEmployees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUP($event)\" /><br />\n      \n<div class=\"table-responsive\">\n       <table class=\"table\">\n         <thead>\n           <tr>\n             <th scope=\"col\">Full Name</th>\n             <th scope=\"col\">Address</th>\n             <th scope=\"col\">Phone Number</th>\n             <th scope=\"col\">Hire Date</th>\n           </tr>\n         </thead>\n         <tbody>\n           <tr *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\">\n             <td>{{employee.FirstName}} {{employee.LastName}}</td>\n             <td>{{employee.Position.PositionName}}</td>\n             <td>{{employee.PhoneNum}}</td>\n             <td>{{employee.HireDate | date: 'longDate'}}</td>\n           </tr>\n         </tbody>\n       </table>\n</div>\n       \n    "

/***/ }),

/***/ "./src/app/employees.component.ts":
/*!****************************************!*\
  !*** ./src/app/employees.component.ts ***!
  \****************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.loadingError = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeesSub = this.employeeService.getEmployees().subscribe(function (data) { _this.employees = data; _this.filteredEmployees = data; }, function () { _this.loadingError = true; });
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        if (this.getEmployeesSub) {
            this.getEmployeesSub.unsubscribe();
        }
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(['/employee', id]);
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        var substring = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (e) { return ((e.FirstName.toLowerCase().indexOf(substring) !== -1) || (e.LastName.toLowerCase().indexOf(substring) !== -1) || (e.Position.PositionName.toLocaleLowerCase().indexOf(substring) !== -1)); });
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees.component.css")]
        }),
        __metadata("design:paramtypes", [_data_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.css":
/*!**************************************!*\
  !*** ./src/app/footer.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer.component.html":
/*!***************************************!*\
  !*** ./src/app/footer.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"color-border\" > </div>\n<footer id=\"footer\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">Copyright &copy; 2018 Jasmeet Singh Saluja (WEB422). Design by <a href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a></div>\n    <div class=\"col-sm-6\">\n      <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>\n    </div>\n  </div>\n</div>\n</footer>\n<!--/#footer--> \n"

/***/ }),

/***/ "./src/app/footer.component.ts":
/*!*************************************!*\
  !*** ./src/app/footer.component.ts ***!
  \*************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/*!************************************!*\
  !*** ./src/app/home.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n    padding: 70px 0;\n   }\n   .no-margin {\n    margin: 0;\n    padding: 0;\n   } "

/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-slider\" class=\"no-margin\">\n  <div class=\"carousel slide\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"item active\" style=\"background-image: url(assets/images/slider/bg1.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-bolt\"></i> Influx</span></h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n\n      <div class=\"item\" style=\"background-image: url(assets/images/slider/bg2.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Typi non habent claritatem insitam</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <!-- <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n\n      <div class=\"item\" style=\"background-image: url(assets/images/slider/bg3.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Mirum est notare quam littera gothica</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <!-- <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n    </div>\n    <!--/.carousel-inner-->\n  </div>\n  <!--/.carousel-->\n  <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\">\n    <i class=\"fa fa-chevron-left\"></i>\n  </a>\n  <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\">\n    <i class=\"fa fa-chevron-right\"></i>\n  </a>\n</section>\n<!--/#main-slider-->\n<div class=\"color-border\"> </div>\n<section id=\"feature\">\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2>Featured Services</h2>\n      <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper\n        sem.\n        <br> Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"features\">\n        <div class=\"col-md-6 \">\n          <div class=\"feature-wrap\">\n            <i class=\"fa fa-desktop\"></i>\n            <h2>Employees</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-4    col-sm-6-->\n\n        <div class=\"col-md-6 \">\n          <div class=\"feature-wrap\">\n            <i class=\"fa fa-cogs\"></i>\n            <h2>Positions</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n       \n      </div>\n      <!--/.services-->\n    </div>\n    <!--/.row-->\n  </div>\n  <!--/.container-->\n</section>\n<!--/#feature-->"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav.component.css":
/*!***********************************!*\
  !*** ./src/app/nav.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav.component.html":
/*!************************************!*\
  !*** ./src/app/nav.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  <header id=\"header\">\n    <nav class=\"navbar navbar-inverse\" role=\"banner\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n          <a class=\"navbar-brand\" href=\"index.html\"><i class=\"fa fa-play-circle\"></i> Jasmeet Singh Saluja(API Demo)</a></div>\n        <div class=\"collapse navbar-collapse navbar-right\">\n          <ul class=\"nav navbar-nav\">\n            \n            <li routerLinkActive=\"active\">  <a routerLink=\"/home\">Home</a></li>\n            <li routerLinkActive=\"active\">  <a routerLink=\"/employees\">Employees</a></li>\n            <li routerLinkActive=\"active\">  <a routerLink=\"/positions\">Positions</a></li>\n            \n          </ul>\n        </div>\n      </div>\n      <!--/.container--> \n    </nav>\n    <!--/nav--> \n    \n  </header>\n  <!--/header-->\n  <div class=\"color-border\"> </div>\n  "

/***/ }),

/***/ "./src/app/nav.component.ts":
/*!**********************************!*\
  !*** ./src/app/nav.component.ts ***!
  \**********************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/not-found.component.css":
/*!*****************************************!*\
  !*** ./src/app/not-found.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found.component.html":
/*!******************************************!*\
  !*** ./src/app/not-found.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\"> Page Not Found </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found.component.ts":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position.component.css":
/*!****************************************!*\
  !*** ./src/app/position.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }"

/***/ }),

/***/ "./src/app/position.component.html":
/*!*****************************************!*\
  !*** ./src/app/position.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"center\" *ngIf=\"position\" >\n  <h2>Position: {{position.PositionName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<div class=\"container\" *ngIf=\"position\" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f=\"ngForm\" (ngSubmit)='onSubmit(f)'>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionName.errors}\">\n              <label for=\"PositionName\">Position Name:</label>\n              <input class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" [(ngModel)]=\"position.PositionName\" #PositionName=\"ngModel\" required/>\n              <span class=\"help-block\" *ngIf=\"PositionName.errors && PositionName.errors.required\">Position name is Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionDescription.errors}\">\n              <label for=\"PositionDescription\">Description:</label>\n              <textarea class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\" [(ngModel)]=\"position.PositionDescription\" #PositionDescription=\"ngModel\" required></textarea>\n              <span class=\"help-block\" *ngIf=\"PositionDescription.errors && PositionDescription.errors.required\">Position description is Required</span>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" [disabled]=\"!f.valid\"/>\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n<br />\n<div class=\"alert alert-success\" *ngIf=\"successMessage\">\n  <strong>Success!</strong> Position: \"Position Name\" was successfully saved.\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"falseMessage\">\n  <strong>Error!</strong> Position: \"Position Name\" could not be saved.\n</div>\n</div>\n<br /><br />"

/***/ }),

/***/ "./src/app/position.component.ts":
/*!***************************************!*\
  !*** ./src/app/position.component.ts ***!
  \***************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionComponent = /** @class */ (function () {
    function PositionComponent(p, r) {
        this.p = p;
        this.r = r;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.r.params.subscribe(function (param) {
            _this.positionSubscription = _this.p.getPosition(param['_id']).subscribe(function (data) {
                _this.position = data[0];
            });
        });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savePositionsSubcription = this.p.savePosition(this.position)
            .subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () { _this.successMessage = false; }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () { _this.failMessage = false; }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionsSubcription) {
            this.savePositionsSubcription.unsubscribe();
        }
    };
    PositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position.component.css")]
        }),
        __metadata("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_1__["PositionServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/positions.component.css":
/*!*****************************************!*\
  !*** ./src/app/positions.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}"

/***/ }),

/***/ "./src/app/positions.component.html":
/*!******************************************!*\
  !*** ./src/app/positions.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Positions</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n    Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n</div>\n\n<table class=\"table\">\n  \n  <thead>\n    <tr>\n      <th scope=\"col\">Position Title</th>\n      <th scope=\"col\">Position Description</th>\n      <th scope=\"col\">Salary</th>\n    </tr>\n  </thead>\n  \n  <tbody>\n    <tr *ngFor=\"let position of positions\" (click)=\"routePosition(position._id)\">\n      <td>{{position.PositionName}}</td>\n      <td>{{position.PositionDescription}}</td>\n      <td>{{position.PositionBaseSalary}}</td>\n    </tr>\n  </tbody>\n  \n</table>"

/***/ }),

/***/ "./src/app/positions.component.ts":
/*!****************************************!*\
  !*** ./src/app/positions.component.ts ***!
  \****************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(positionService, router) {
        this.positionService = positionService;
        this.router = router;
        this.loadingError = false;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPositionsSub = this.positionService.getPositions().subscribe(function (data) { _this.positions = data; }, function () {
            _this.loadingError = true;
        });
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        if (this.getPositionsSub) {
            this.getPositionsSub.unsubscribe();
        }
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.router.navigate(['/position', id]);
    };
    PositionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-positions',
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.css */ "./src/app/positions.component.css")]
        }),
        __metadata("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_1__["PositionServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PositionsComponent);
    return PositionsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jasmeet\Desktop\assignment 6\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map