import { Component,  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
// import { AdminPage } from '../admin/admin';
import { FamilyPage } from '../family/family';
import { HomePage } from '../home/home';
import { AddNewPage } from '../add-new/add-new';



@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  
  passwordType :string = 'password';
  passwordIcon :string = 'eye-off';
  data = {
    email : "",
    password : ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert : AlertController,
  public auth : AuthServiceProvider) {

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
ionViewDidLoad() {
  console.log('ionViewDidLoad SignUpPage');
}

signUp(){
  let create ={
    email : this.data.email,
    password : this.data.password
  }
  this.auth.SignUp(create).then(
    ()=> //this.auth.itAuth())
    {

    if(localStorage.getItem("myId") == "true"){
     console.log( localStorage.getItem("myId") + "" 
     +" you are logged in !!")
      this.navCtrl.push(AddNewPage)

    }
  }
  
  // this.data.password =""
  // this.data.email =""
   ) }


}
            // .then( ()=> {

    //   //   نجاح العملية
    //   this.navCtrl.push(FamilyPage)
    //      }).catch( err=> {
   
      
         
    //    //  في حال خطأ
         
         
    //           if(err.message == "The email address is badly formatted."){
         
    //             this.showalert("بريد الكتروني غير صالح")
         
    //           }
         
         
    //           if(err.message == "The email address is already in use by another account."){
         
    //            this.showalert("بريد الكتروني مستخدم")
         
    //           }
         
         
    //           if(err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred."){
         
    //             this.showalert("يرجى التحقق من الاتصال بلشبكة")
         
    //           }
         
         
    //         if(err.message == "Password should be at least 6 characters"){
         
    //           this.showalert("كلمة مرور قصيرة");
         
    //         }
         
    //          })
         
         
         
    //        }
         
    //      showalert(message){
         
    //          var alert = this.alert.create({
         
    //            subTitle:message,
         
    //            buttons:["حسنا"]
         
    //          });
         
    //          return alert.present();
      
         
    //        