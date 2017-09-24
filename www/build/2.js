webpackJsonp([2],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialistListPageModule", function() { return SpecialistListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialist_list__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpecialistListPageModule = (function () {
    function SpecialistListPageModule() {
    }
    return SpecialistListPageModule;
}());
SpecialistListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__specialist_list__["a" /* SpecialistListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__specialist_list__["a" /* SpecialistListPage */]),
        ],
    })
], SpecialistListPageModule);

//# sourceMappingURL=specialist-list.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialistListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
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
 * Generated class for the SpecialistListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecialistListPage = (function () {
    function SpecialistListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listSpecialist = [{
                id: 1,
                name: "ahmed",
                geocode: "adresse 1",
                about_website: "Special site 1",
                phone: "1233333",
                speciality: 1
            },
            {
                id: 2,
                name: "radhwan",
                geocode: "adresse 2",
                about_website: "Special site 2",
                phone: "2222",
                speciality: 1
            },
            {
                id: 3,
                name: "anis",
                geocode: "adresse 3",
                about_website: "Special site 3",
                phone: "1233333",
                speciality: 3
            },
            { id: 1,
                name: "Zeineb",
                geocode: "adresse 4",
                about_website: "Special site 4",
                phone: "1233333",
                speciality: 4 }
        ];
        console.log(this.listSpecialist);
    }
    SpecialistListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialistListPage');
    };
    SpecialistListPage.prototype.test = function (spec) {
        console.log(spec);
        this.navCtrl.push('SpecialistDetailPage', {
            specialist: spec
        });
    };
    return SpecialistListPage;
}());
SpecialistListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-specialist-list',template:/*ion-inline-start:"C:\Users\Sofrecom\Documents\Ionic Sofrecom\ionic_smart\src\pages\specialist-list\specialist-list.html"*/'<!--\n\n  Generated template for the SpecialistListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>liste des spécialistes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngFor="let spec of listSpecialist" (click)="test(spec)">\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{spec.name}}\n\n      </ion-card-title>\n\n    </ion-card-content>\n\n\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'phone-portrait\' item-start style="color: #55acee"></ion-icon>\n\n      {{spec.phone}}\n\n      <ion-badge item-end>23270615</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'pin\' item-start style="color: #55acee"></ion-icon>\n\n      {{spec.geocode}}\n\n      <ion-badge item-end>Rue 12 Mohamed 5</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'at\' item-start style="color: #55acee"></ion-icon>\n\n      {{spec.about_website}}\n\n      <ion-badge item-end>site web</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button clear small>\n\n            <ion-icon name="color-wandup"></ion-icon>\n\n            <div>plus de detail</div>\n\n          </button>\n\n      </ion-col>\n\n      \n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sofrecom\Documents\Ionic Sofrecom\ionic_smart\src\pages\specialist-list\specialist-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SpecialistListPage);

//# sourceMappingURL=specialist-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map