import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
 import { FamilyPage } from '../family/family';
import { HomePage } from '../home/home';
import { ShowPage } from '../show/show';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  passwordType :string = 'password';
  passwordIcon :string = 'eye-off';
  info = {
    email : '',
    password : ''
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth : AuthServiceProvider, public alertCtrl: AlertController) {
   
     
    }
    showHide(){
      console.log('hi');
      this.passwordType=this.passwordType==='text' ? 'password' :'text';
      this.passwordIcon=this.passwordIcon=== 'eye-off' ? 'eye':'eye-off';
    }
    public type='password';
    public showPass= false;
  
    showPassword(){
    this.showPass=!this.showPass;
    if(this.showPass){
      this.type='text';
  
    }else{
      this.type='password';
    }
    
  }
  goBack(){
    this.navCtrl.push(HomePage)
  
    console.log('goBackIsClicked')
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
    
    login() {
      if (this.info.email == "" || this.info.password == "") {
        const alert = this.alertCtrl.create({
          title: 'تنبيه',
          subTitle: 'يرجى ملئ جميع الحقول',
          buttons: ['OK']
        });
        alert.present();
      }
      else {
        this.auth.SignIn(this.info).then(() =>
        this.navCtrl.setRoot(ShowPage),
        error => {
          const alert = this.alertCtrl.create({
              title: 'تنبيه',
              subTitle: 'خطأ في الايميل او الباسورد',
              buttons: ['OK']
            });
            alert.present();}
        )
      }
 } 
    
    cnclBtn(){
      this.navCtrl.push(HomePage)
    }

  }