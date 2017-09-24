webpackJsonp([3],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialistDetailPageModule", function() { return SpecialistDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialist_detail__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpecialistDetailPageModule = (function () {
    function SpecialistDetailPageModule() {
    }
    return SpecialistDetailPageModule;
}());
SpecialistDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__specialist_detail__["a" /* SpecialistDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__specialist_detail__["a" /* SpecialistDetailPage */]),
        ],
    })
], SpecialistDetailPageModule);

//# sourceMappingURL=specialist-detail.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialistDetailPage; });
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
 * Generated class for the SpecialistDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecialistDetailPage = (function () {
    function SpecialistDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpecialistDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialistDetailPage');
        this.specialist = this.navParams.get("specialist");
        console.log(this.specialist);
    };
    return SpecialistDetailPage;
}());
SpecialistDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-specialist-detail',template:/*ion-inline-start:"C:\Users\Sofrecom\Documents\Ionic Sofrecom\ionic_smart\src\pages\specialist-detail\specialist-detail.html"*/'<!--\n\n  Generated template for the SpecialistDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>specialist detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{specialist.name}}\n\n      </ion-card-title>\n\n    </ion-card-content>\n\n\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'heart\' item-start style="color: #55acee"></ion-icon>\n\n      note\n\n      <ion-badge item-end>9/10</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'phone-portrait\' item-start style="color: #55acee"></ion-icon>\n\n      téléphone\n\n      <ion-badge item-end>{{specialist.phone}}</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'pin\' item-start style="color: #55acee"></ion-icon>\n\n      adresse\n\n      <ion-badge item-end>{{specialist.geocode}}</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'at\' item-start style="color: #55acee"></ion-icon>\n\n      adresse\n\n      <ion-badge item-end>{{specialist.about_website}}</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-card-content>\n\n\n\n      <ion-item *ngFor="let comment of listComment">\n\n        <ion-icon name="person" item-start large></ion-icon>\n\n        <h2>\n\n          <Strong>{{comment.author}}</Strong>\n\n        </h2>\n\n         <div>\n\n          <Strong> ponctualité : </Strong>{{comment.ponctualite}} <br>\n\n        </div> \n\n         <div>\n\n          <Strong> traitement : </Strong>{{comment.traitement}} <br>\n\n        </div> \n\n\n\n        <Strong>commentaire : </Strong>{{comment.avis}}\n\n      </ion-item>\n\n\n\n\n\n    </ion-card-content>\n\n\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Donner votre avis\n\n      </ion-card-title>\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label floating>traitement</ion-label>\n\n          <ion-select [(ngModel)]="traitement">\n\n              <ion-option value=1>1</ion-option>\n\n              <ion-option value=2>2</ion-option>\n\n              <ion-option value=3>3</ion-option>\n\n              <ion-option value=4>4</ion-option>\n\n              <ion-option value=5>5</ion-option>\n\n              <ion-option value=6>6</ion-option>\n\n              <ion-option value=7>7</ion-option>\n\n              <ion-option value=8>8</ion-option>\n\n              <ion-option value=9>9</ion-option>\n\n              <ion-option value=10>10</ion-option>\n\n            </ion-select>\n\n        \n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>ponctualite</ion-label>\n\n          <ion-input [(ngModel)]="commentaire" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>communication</ion-label>\n\n          <ion-input [(ngModel)]="commentaire" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>nom</ion-label>\n\n          <ion-input [(ngModel)]="commentaire" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </ion-card-content>\n\n\n\n\n\n\n\n\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sofrecom\Documents\Ionic Sofrecom\ionic_smart\src\pages\specialist-detail\specialist-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SpecialistDetailPage);

//# sourceMappingURL=specialist-detail.js.map

/***/ })

});
//# sourceMappingURL=3.js.map