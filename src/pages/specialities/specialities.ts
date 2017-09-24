import { Domain } from './../../models/domains/domain';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SpecialitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specialities',
  templateUrl: 'specialities.html',
})
export class SpecialitiesPage {

  domain : Domain;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.domain = this.navParams.get('domainID');
    console.log(this.domain);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialitiesPage');
  }

}
