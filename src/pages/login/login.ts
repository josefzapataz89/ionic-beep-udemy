import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: "Home"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToPage( pageName: string ) {
    pageName === 'InboxPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
