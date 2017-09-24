import { Specialist } from './../../models/specialists/specialist';
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

  listSpecialist :Specialist[]= [{
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
  {id : 1,
    name : "Zeineb",
    geocode : "adresse 4",
    about_website : "Special site 4",
    phone : "1233333" ,
    speciality : 4}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.listSpecialist);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialistListPage');
  }

  public test(spec:Specialist){
    console.log(spec);
    this.navCtrl.push('SpecialistDetailPage',{
      specialist: spec
    })
  }

}
