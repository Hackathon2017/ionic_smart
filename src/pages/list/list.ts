import { Specialist } from './../../models/specialists/specialist';
import { SpecialistServiceProvider } from './../../providers/specialist-service/specialist-service';
import { Message } from './../../models/messages/message';
import { MESSAGE_LIST } from './../../mocks/messages/messages';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  specialists : Specialist[] = [];
  messagesList : Message[] = MESSAGE_LIST;
  constructor(private specialistService : SpecialistServiceProvider ,public navCtrl: NavController, public navParams: NavParams) {
    this.loadSpecialists();
  }

  loadSpecialists() {
    this.specialistService.load().subscribe(
      data => { 
        console.log(data);     
       this.specialists=data; 
      
    },err=>console.log(err)); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
