webpackJsonp([0],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = (function () {
    function ListPageModule() {
    }
    return ListPageModule;
}());
ListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */]),
        ],
    })
], ListPageModule);

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_specialist_service_specialist_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_messages_messages__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(specialistService, navCtrl, navParams) {
        this.specialistService = specialistService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/appImg.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/AppLogo.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/logoSlash.png",
            }
        ];
        this.specialists = [];
        this.messagesList = __WEBPACK_IMPORTED_MODULE_1__mocks_messages_messages__["a" /* MESSAGE_LIST */];
        this.loadSpecialists();
    }
    ListPage.prototype.loadSpecialists = function () {
        var _this = this;
        this.specialistService.load().subscribe(function (data) {
            console.log(data);
            _this.specialists = data;
        }, function (err) { return console.log(err); });
    };
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\Sofrecom\Documents\hackathonApp\src\pages\list\list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary">Next</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n      <button ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sofrecom\Documents\hackathonApp\src\pages\list\list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_specialist_service_specialist_service__["a" /* SpecialistServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MESSAGE_LIST; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mocks_specialists_specialists__ = __webpack_require__(274);

var specialists = __WEBPACK_IMPORTED_MODULE_0__mocks_specialists_specialists__["a" /* SPECIALIST_LIST */];
var messagesList = [];
specialists.forEach(function (specialist) {
    messagesList.push({ specialist: specialist });
});
var MESSAGE_LIST = messagesList;
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPECIALIST_LIST; });
var specialists = [
    {
        id: "1",
        name: "Ahmed Ben Achour",
        geocode: "Les berges du Lac, Tunis",
        about_website: "fb.com/ahmed.seaFood",
        phone: "71100001",
        speciality: "Sea Food"
    },
    {
        id: "2",
        name: "Mohamed Saidani",
        geocode: "L'Aouina, Tunis",
        about_website: "fb.com/bijouteriePalais",
        phone: "23889932",
        speciality: "Bijouterie"
    }
];
var SPECIALIST_LIST = specialists;
//# sourceMappingURL=specialists.js.map

/***/ })

});
//# sourceMappingURL=0.js.map