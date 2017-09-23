import { SplashScreen } from '@ionic-native/splash-screen';
import { Component } from '@angular/core';
import { IonicPage, ToastController, ToastOptions, NavController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  toastEmptyUsernameOptions : ToastOptions;
  toastEmptyPasswordOptions : ToastOptions;
  toastWrongLoginAndPassOptions : ToastOptions;
  toastSuccessLoginOptions : ToastOptions;
  splashScreen : SplashScreen;
  constructor(private toast: ToastController, private navCtrl: NavController) {
    
    this.toastEmptyUsernameOptions = {
      message : 'Empty Login',
      duration : 2000
    }
    this.toastEmptyPasswordOptions = {
      message : 'Empty Password',
      duration : 2000
    }
    this.toastWrongLoginAndPassOptions = {
      message : 'Login or Password was wrong',
      duration : 2000
    }

    this.toastSuccessLoginOptions = {
      message : 'Login successfully',
      duration : 2000
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToPage(pageName) {
      this.navCtrl.push(pageName);
  }

  login(login:any, pass:any){
    var username = login.value;
    var password = pass.value;

    if(username == "" ){
      this.toast.create(this.toastEmptyUsernameOptions).present();
    } else if (password == ""){
      this.toast.create(this.toastEmptyPasswordOptions).present();
    }else if(username != "admin" || password != "admin"){
      this.toast.create(this.toastWrongLoginAndPassOptions).present(); 
    }else{
      var selet = this;
      this.splashScreen.show();
      setTimeout( function(){
        this.splashScreen.hide();
        selet.navCtrl.setRoot('TabsPage')
      },3000);
    }
  }

}
