webpackJsonp([3],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_specialist_service_specialist_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, specialistService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.specialistService = specialistService;
        this.specialities = [{ label: "speciality", value: 1 }, { label: "speciality2", value: 2 }, { label: "speciality3", value: 3 }];
        this.specialist = {
            name: "Ahmed Ben Achour",
            geocode: "Les berges du Lac, Tunis",
            about_website: "fb.com/ahmed.seaFood",
            phone: "71100001",
            speciality: 2
        };
        this.name = "";
        this.about_website = "";
        this.phone = "";
        this.geocode = "";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.postSpecialist = function () {
        this.specialist.name = "this.name";
        this.specialist.about_website = "this.about_website";
        this.specialist.phone = "this.phone";
        this.specialist.speciality = 2;
        this.specialist.geocode = "this.geocode";
        console.log(this.specialist);
        this.specialistService.add(this.specialist).subscribe(function (data) { return console.log("ok"); });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Sofrecom\Documents\hackathonApp\src\pages\profile\profile.html"*/'<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>ajouter un specialiste</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <ion-card>\n\n    <ion-list>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>nom</ion-label>\n\n        <ion-input [(ngModel)]="name" type="text"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>site web</ion-label>\n\n        <ion-input [(ngModel)]="about_website" type="text"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>téléphone</ion-label>\n\n        <ion-input [(ngModel)]="phone" type="text"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item >\n\n        <ion-label floating>Spécialité</ion-label>\n\n        <ion-select [(ngModel)]="speciality" >\n\n          <ion-option *ngFor="let spec of specialities" [value] = "spec.value" >{{spec.label}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>adresse</ion-label>\n\n        <ion-input [(ngModel)]="geocode" type="text"></ion-input>\n\n      </ion-item>\n\n  \n\n    </ion-list>\n\n    <ion-row>\n\n      <button ion-button (click)="postSpecialist()" color="secondary">ajouter</button>\n\n    </ion-row>\n\n    </ion-card>\n\n  </ion-content>\n\n\n\n  '/*ion-inline-end:"C:\Users\Sofrecom\Documents\hackathonApp\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_specialist_service_specialist_service__["a" /* SpecialistServiceProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map