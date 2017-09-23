import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { ToastController } from "ionic-angular";

import { Account } from "../../models/account/account.interface";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;

  constructor(
    private _auth: AngularFireAuth,
    private _toast: ToastController,
    private navCtrl: NavController ) {

    }

  async login() {
    try {
      const result = await this._auth.auth.signInWithEmailAndPassword( this.account.email, this.account.password );
      console.log(result);
      this.navigateToPage('TabsPage');
    } catch (error) {
      console.log(error);

      this._toast.create({
        message: error.message,
        duration: 3000
      }).present();
    }
  }

  navigateToPage( pageName: string ) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
