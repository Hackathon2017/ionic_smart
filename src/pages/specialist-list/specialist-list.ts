import { Specialist } from './../../models/specialists/specialist';
import { SpecialistServiceProvider } from './../../providers/specialist-service/specialist-service';
import { Speciality } from './../../models/specialities/speciality';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpecialistListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specialist-list',
  templateUrl: 'specialist-list.html',
})
export class SpecialistListPage {
  speciality : Speciality;
  listSpecialist :Specialist[]= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private specService : SpecialistServiceProvider) {

    this.speciality = this.navParams.get('spec');
    console.log(this.speciality);
    this.loadSpecialists(String(this.speciality.id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialistListPage');
  }

  loadSpecialists(id : string){
    this.specService.load(id).subscribe(
      data => {
        this.listSpecialist = data;
      }
  
    )

  }

  public test(spec:Specialist){
    console.log(spec);
    this.navCtrl.push('SpecialistDetailPage',{
      specialist: spec
    })
  }
}
