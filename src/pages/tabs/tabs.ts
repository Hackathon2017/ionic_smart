import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root : String;
  tab2Root : String;
  tab3Root : String;
  tab4Root : String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1Root = 'HomePage';
    this.tab2Root = 'ListPage';
    this.tab3Root = 'ProfilePage';
    this.tab4Root = 'ContactPage';

  }

}
