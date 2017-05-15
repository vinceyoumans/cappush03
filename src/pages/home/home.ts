import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {

  }


  setAccount(account){
        // let alert = this.alertCtrl.create({
        //   title:"TEXTBOX SAYS",
        //   subTitle:account,
        //   buttons:["ok"]
        // });
        
        // alert.present();

            console.log('VY***********************************************');
            console.log('Account: ' + account  );
                    // alert('account: ' + account );
                    //window.localStorage.setItem("account", account);
                    // alert('++account: ' + window.localStorage.getItem("account") );
            console.log('VY***********************************************');  


        let alert = this.alertCtrl.create({
          title:"DEVICE TOKEN",
          subTitle: window.localStorage.getItem("deviceToken"),
          buttons:["ok"]
        });
        
        alert.present();


      // alert = this.alertCtrl.create({
      //     title:"Account",
      //     subTitle: window.localStorage.getItem("account"),
      //     buttons:["ok"]
      //   });
        
      //   alert.present();
    }




}
