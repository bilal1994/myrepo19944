import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
//import { KidsConfig } from '../../model/kidsDB';
import { AngularFireAuth} from '@angular/fire/auth';
//import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import{AdminPage} from '../admin/admin'

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

    this.data.FirstName = this.navParams.get("FirstName");
    this.data.LastName = this.navParams.get("LastName");
    this.data.Address = this.navParams.get("Address");
    this.data.Phone = this.navParams.get("Phone");
    this.data.Stage = this.navParams.get("Stage");
    this.data.Email = this.navParams.get("Email");

    console.log(this.data.FirstName,this.data.LastName)


  }
  goBack(){
    this.navCtrl.push(AdminPage)
  }
  
  ionViewDidLoad() {
  
  }


  logOut(){
    this.authserv.signOut().then(() => (
    this.navCtrl.setRoot(HomePage)
  ))
  }


}
