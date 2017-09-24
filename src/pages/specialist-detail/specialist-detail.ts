import { Specialist } from './../../models/specialists/specialist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpecialistDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specialist-detail',
  templateUrl: 'specialist-detail.html',
})
export class SpecialistDetailPage {
  private specialist: Specialist
  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialistDetailPage');
    this.specialist=this.navParams.get("specialist");
    console.log(this.specialist);
  }

}
