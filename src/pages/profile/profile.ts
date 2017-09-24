import { SpecialistServiceProvider } from './../../providers/specialist-service/specialist-service';
import { Specialist } from './../../models/specialists/specialist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  specialities:any[]=[{label:"speciality", value:1},{label:"speciality2", value:2},{label:"speciality3", value:3}];
  specialist:Specialist=  { 
    name : "Ahmed Ben Achour",
    geocode : "Les berges du Lac, Tunis",
    about_website : "fb.com/ahmed.seaFood",
    phone : "71100001",
    speciality : 2
};
  name="";
  about_website="";
  phone="";
  speciality;
  geocode="";
  constructor(public navCtrl: NavController, public navParams: NavParams,private specialistService : SpecialistServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  postSpecialist(){
    this.specialist.name=this.name;
    this.specialist.about_website=this.about_website;
    this.specialist.phone=this.phone;
    this.specialist.speciality=2;
    this.specialist.geocode=this.geocode;
    console.log(this.specialist);
    this.specialistService.add(this.specialist).subscribe(data=>console.log("ok"));
    
  }

}
