import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  acc: FirebaseListObservable<any>;  
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public af:AngularFire) {
                  this.acc = af.database.list('/accounts');  
                }

    setAccount(account){
            console.log('VY***********************************************');
            console.log('Account: ' + account  );
                    window.localStorage.setItem("account", account);
                    // alert('++account: ' + window.localStorage.getItem("account") );
            console.log('VY***********************************************');  

         //Now set in FB
               this.acc.push({
                 account: window.localStorage.getItem("account"),
                 ts: Date(),
                 token: window.localStorage.getItem("deviceToken")
               });
              };

 };
