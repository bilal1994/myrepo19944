import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { KidsServicesProvider } from '../../providers/kids-service/kids-service';
//import { KidsConfig } from '../../model/kidsDB';
import { AdminPage } from '../admin/admin';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
//import { AngularFireModule } from '@angular/fire';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FamilyPage } from '../family/family';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html',
})
export class AddNewPage {
info={

  FirstName :'',
  LastName :'',
  Phone :'',
  Address :'',
  Stage :'',
  Email : ''
}
 
  // public text:string;
  // public FirstName:string

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public add : KidsServicesProvider, public alertCtrl: AlertController,
    public myAuth : AngularFireAuth, public authi :AuthServiceProvider,public db:AngularFireDatabase) {
      this.db.list('/kidsdb')
  }

  addnewuser(FirstName,LastName,Phone,Address,Stage,Email){
    if(FirstName == "" ||LastName == "" || Phone == "" || Address == "" && Stage == "" || Email == ""){
      const alert = this.alertCtrl.create({
      title: 'تنبية',
      subTitle: 'يرجى مليء جميع الحقول ',
      buttons: ['OK']
    });
    alert.present();}
    else{
      
    this.db.list("kidsdb").push({
      FirstName :FirstName,
      LastName :LastName,
      Phone :Phone,
      Address :Address,
      Stage :Stage,
      Email : Email

    }).then(newpople =>{
      this.navCtrl.setRoot(FamilyPage ,{
        FirstName:FirstName,
        LastName :LastName,
        Phone :Phone,
        Address :Address ,
        Stage : Stage ,
        Email :Email


      });{ {
        
    //     const alert = this.alertCtrl.create({
    //       title: '????? ????',
    //       subTitle: '??? ????? ???? ????',
    //       buttons: ['??']
    //     });
    //     alert.present();
       }
    }
    },error=>{console.log(error);});

  }
  }

  ionViewDidLoad() {
    console.log("your email : " + this.myAuth.auth.currentUser.email)
    console.log('ionViewDidLoad AddNewPage');
  }
  goBack(){
    this.navCtrl.push(AdminPage)
  }

  // addnew(addkid){
  //     addkid.Email = this.myAuth.auth.currentUser.email
  //     addkid.Password = this.myAuth.auth.currentUser.uid
  //     console.log(addkid.Email + '......... ' + addkid.Password)
  //     this.add.addkid(addkid).then(() => this.showAlert())
  //     this.navCtrl.setRoot(FamilyPage).then(() =>{
  //       this.authi.signOut()
  //     })
  // }

  // showAlert() {
  //   const alert = this.alertCtrl.create({
  //     title: '????? ????',
  //     subTitle: '??? ????? ???? ????',
  //     buttons: ['??']
  //   });
  //   alert.present();
  // }


}
