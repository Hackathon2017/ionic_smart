webpackJsonp([6],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(loginCntr, toast, navCtrl) {
        this.loginCntr = loginCntr;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.toastEmptyUsernameOptions = {
            message: 'Empty Login',
            duration: 2000
        };
        this.toastEmptyPasswordOptions = {
            message: 'Empty Password',
            duration: 2000
        };
        this.toastWrongLoginAndPassOptions = {
            message: 'Login or Password was wrong',
            duration: 2000
        };
        this.toastSuccessLoginOptions = {
            message: 'Login successfully',
            duration: 2000
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToPage = function (pageName) {
        this.navCtrl.push(pageName);
    };
    LoginPage.prototype.login = function (login, pass) {
        var username = login.value;
        var password = pass.value;
        if (username == "") {
            this.toast.create(this.toastEmptyUsernameOptions).present();
        }
        else if (password == "") {
            this.toast.create(this.toastEmptyPasswordOptions).present();
        }
        else if (username != "admin" || password != "admin") {
            this.toast.create(this.toastWrongLoginAndPassOptions).present();
        }
        else {
            var loader = this.loginCntr.create({
                content: "Please wait...",
                duration: 3000
            });
            loader.present();
            var selet = this;
            setTimeout(function () {
                selet.navCtrl.setRoot('TabsPage');
            }, 3000);
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sofrecom\Documents\Ionic Sofrecom\ionic_smart\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="navigation"> \n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="assets/img/logoSlash.png" alt="logoSlash" class="logo">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-item>\n\n        <ion-label floating>Login : </ion-label>\n\n        <ion-input type="text"  #loginn></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Password : </ion-label>\n\n        <ion-input type="password" #pass></ion-input>\n\n      </ion-item>\n\n    </ion-card-content>\n\n    <ion-row>\n\n      <button ion-button (click)="goToPage(\'RegisterPage\')" color="secondary">Register</button>\n\n      <button ion-button (click)="login(loginn,pass)" color="primary">Login</button>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sofrecom\Documents\Ionic Sofrecom\ionic_smart\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map