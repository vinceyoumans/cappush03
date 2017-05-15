import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

// VY  Import the AF2 Module
import { AngularFireModule } from 'angularfire2';


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBj9WKwbk6VbI1elts8zC2lLT3kLyVRp_Q",
  authDomain: "cappush03.firebaseapp.com",
  databaseURL: "https://cappush03.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "753325749413"
};



// <script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCeXP0kpWTKe5OpoIU4h2z__5sjwmFT3ZQ",
//     authDomain: "testcap-6e4ad.firebaseapp.com",
//     databaseURL: "https://testcap-6e4ad.firebaseio.com",
//     projectId: "testcap-6e4ad",
//     storageBucket: "testcap-6e4ad.appspot.com",
//     messagingSenderId: "282139395283"
//   };
//   firebase.initializeApp(config);
// </script>




const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'afc84e6a'  //from IONIC
  }, 
  'push': {
    'sender_id': '753325749413',    ///Comes from FB
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
