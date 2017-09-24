import { SpecialistDetailServiceProvider } from './../../providers/specialist-detail-service/specialist-detail-service';
import { Message } from './../../models/messages/message';
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
  private specialist: Specialist;
  private listComment:Message[]=[]

  traitement:string="";
  ponctualite:string="";
  communication:string="";
  commentaire:string="";
  constructor(public navCtrl: NavController, private navParams: NavParams,private specialistDetailServiceProvider:SpecialistDetailServiceProvider) {
    console.log('ionViewDidLoad SpecialistDetailPage');
    this.specialist=this.navParams.get("specialist");
    console.log(this.specialist);
    this.specialistDetailServiceProvider.load(this.specialist).subscribe(data=>{
      this.listComment=data;
      console.log(this.listComment)
    });

  }

  ionViewDidLoad() {

  }

}
