import { IonicPage,NavController,NavParams } from 'ionic-angular';
import { SpecialityServiceProvider } from './../../providers/speciality-service/speciality-service';
import { Speciality } from './../../models/specialities/speciality';
import { Domain } from './../../models/domains/domain';
import { Component } from '@angular/core';


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

  specialities : Speciality[] = [];

  domain : Domain;
  constructor(public specialityService : SpecialityServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.domain = this.navParams.get('domainID');
    console.log(this.domain);
    this.loadSpecialisties(String(this.domain.id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialitiesPage');
  }
  loadSpecialisties(id : string) {
    this.specialityService.load(id).subscribe(
      data => { 
        console.log(JSON.stringify(data));     
       this.specialities=data; 
    },err=>console.log(err)); 
  }

  getListOfSpecialists(speciality : Speciality){
    this.navCtrl.push('SpecialistListPage',{spec : speciality});
  }
}
