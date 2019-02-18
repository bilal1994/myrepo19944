import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
//import { KidsConfig } from '../../model/kidsDB';
import { AngularFireAuth} from '@angular/fire/auth';
//import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {


  data = {
    FirstName : '',
    LastName : '',
    Phone : '',
    Address : '',
    Stage : '',
    Email:'',
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public db: AngularFireDatabase, public myAuth : AngularFireAuth, 
  public authserv : AuthServiceProvider) {

    this.data.FirstName = navParams.get("FirstName");
    this.data.LastName = navParams.get("LastName");
    this.data.Address = navParams.get("Address");
    this.data.Phone = navParams.get("Phone");
    this.data.Stage = navParams.get("Stage");
    this.data.Email = navParams.get("Email");


  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
  }


  logOut(){
    this.authserv.signOut().then(() => (
    this.navCtrl.setRoot(HomePage)
  ))
  }


}
