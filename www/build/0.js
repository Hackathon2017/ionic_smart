webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(277);
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_domain_service_domain_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_specialist_service_specialist_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_messages_messages__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(99);
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
    function ListPage(domainService, specialistService, navCtrl, navParams) {
        this.domainService = domainService;
        this.specialistService = specialistService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [];
        /*{
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
      ];*/
        this.specialists = [];
        this.domains = [];
        this.messagesList = __WEBPACK_IMPORTED_MODULE_2__mocks_messages_messages__["a" /* MESSAGE_LIST */];
        this.loadSpecialists();
        this.loadDomains();
    }
    ListPage.prototype.loadDomains = function () {
        var _this = this;
        this.domainService.load().subscribe(function (data) {
            _this.domains = data;
        });
    };
    ListPage.prototype.loadSpecialists = function () {
        var _this = this;
        this.specialistService.load().subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.specialists = data;
        }, function (err) { return console.log(err); });
    };
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\Sofrecom\Documents\Ionic Sofrecom\ionic_smart\src\pages\list\list.html"*/'<!--\n\n  Generated template for the ListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of domains" class="max-height-90">\n\n      <ion-toolbar>\n\n        <ion-buttons end>\n\n          <button ion-button color="primary">Next</button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n      <img [src]="slide.imagePath" class="slide-image"/>\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.about" class="slide-description"></p>\n\n      <button ion-button large clear color="primary" class="slide-button" (click)=goToSpecialitiesPage(slide)>\n\n        voir specialités\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sofrecom\Documents\Ionic Sofrecom\ionic_smart\src\pages\list\list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_domain_service_domain_service__["a" /* DomainServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_specialist_service_specialist_service__["a" /* SpecialistServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MESSAGE_LIST; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__specialists_specialists__ = __webpack_require__(279);

var specialists = __WEBPACK_IMPORTED_MODULE_0__specialists_specialists__["a" /* SPECIALIST_LIST */];
var messagesList = [];
specialists.forEach(function (specialist) {
    //messagesList.push()
});
var MESSAGE_LIST = messagesList;
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPECIALIST_LIST; });
var specialists = [
    {
        id: 1,
        name: "Ahmed Ben Achour",
        geocode: "Les berges du Lac, Tunis",
        about_website: "fb.com/ahmed.seaFood",
        phone: "71100001",
        speciality: 2
    },
    {
        id: 2,
        name: "Mohamed Saidani",
        geocode: "L'Aouina, Tunis",
        about_website: "fb.com/bijouteriePalais",
        phone: "23889932",
        speciality: 2
    }
];
var SPECIALIST_LIST = specialists;
//# sourceMappingURL=specialists.js.map

/***/ })

});
//# sourceMappingURL=0.js.map