

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { OneSignal } from '@ionic-native/onesignal';

//import { LocalNotifications } from '@ionic-native/local-notifications';
//import { FCM } from '@ionic-native/fcm';
import { SignUpPage } from '../sign-up/sign-up';
import { AngularFireAuth} from '@angular/fire/auth';
import { ShowPage } from '../show/show';
import { AddNewPage } from '../add-new/add-new';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  titlefirebase:'';
  bodyfirebase:'';
  


  constructor(public navCtrl: NavController, public navParams: NavParams,

public alertCtrl: AlertController  ,public authi : AngularFireAuth ,public oneSignal: OneSignal,  public db : AngularFireDatabase) {
  this.OneSignalApp();
  }
  OneSignalApp(){
    this.oneSignal.startInit('359fc310-9d57-43a3-8129-86d578d9abe9', ' 670260969228');
   
   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
   
   this.oneSignal.handleNotificationReceived().subscribe(() => {
 
    alert('notification is received');
   });
   
   this.oneSignal.handleNotificationOpened().subscribe(() => {
    alert('notification is Opened');
   
   });
   
  this.oneSignal.endInit();
  }
  // firebaseMessage(){
  //   this.getToken().then(token => {
  //     //alert(token);
  //    });
     
    //  this.fcm.onNotification().subscribe(data => {
    //    if(data.wasTapped){
    //      console.log("Received in background");
    //    alert(data.title+ " / "+ data.body);
    //    this.titlefirebase=data.title;
    //    this.bodyfirebase=data.body;
    //    } else {
    //      console.log("Protect kindergarten");
    //     alert("Protect kindergarten");
    //    };
    //  });
     
  // ;
     
  //  }
  goBack(){
  this.navCtrl.push(HomePage)

  console.log('goBackIsClicked')
}
  // notice(){
  //   this.notify.schedule({
  //     id: 1,
  //     text: 'hi from admin',
  //     title: 'your notify'
  //     // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
  //     // data: { secret: this.addkid }
  //   });
  // }
 
  add(){
    if (this.authi.auth.currentUser) {
      this.navCtrl.push(AddNewPage)
    console.log("Added")
    }
    else{
      console.log("no auth")
      this.showAlert()

    }  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'تنبيه',
      subTitle: 'عفوا لم تقم بتسجيل الدخول',
      buttons: ['OK']
    });
    alert.present();
  }

  show(){
    this.navCtrl.push(ShowPage)
    console.log("Showed")
  }

  signOut(){
    this.authi.auth.signOut()
    this.navCtrl.setRoot(HomePage)
  }

  SignUp(){
     this.navCtrl.push(SignUpPage)
  }
  send(){
    this.db.list("ids").valueChanges().subscribe( ids => {
    
            ids.forEach(id => {
        
             
              this.oneSignal.postNotification({
                app_id:"359fc310-9d57-43a3-8129-86d578d9abe9",
                include_player_ids:[id['id']],
                contents: {
                  en: "message"
                },
                headings: {
                  en: "header"
                }
              })
            
      
             
            })
        
          })
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
