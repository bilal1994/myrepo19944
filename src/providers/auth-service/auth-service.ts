import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import {  AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';
//import { FamilyPage } from '../../pages/family/family';



@Injectable()
export class AuthServiceProvider {
  private user : firebase.User
  email:any;
  password:any;

  constructor(public db : AngularFireAuth, public alert : AlertController, ) {
    console.log('Hello AuthServiceProvider Provider');

    db.authState.subscribe(assign => {
      this.user = assign
    })
  }

  SignUp(create){
    console.log("sign Up")
    return this.db.auth.createUserWithEmailAndPassword
    (create. email, create.password).then( ()=> {

      console.log("ok !!")
      localStorage.setItem("myId","true");
   //   نجاح العملية

      })
    .catch( err=> {

        // this.navCtrl.push(FamilyPage)
      
    //  في حال خطأ
      
      if(err.message == "" ) 
      {localStorage.setItem("myId","true");}
      else {localStorage.setItem("myId","false")}

           if(err.message == "The email address is badly formatted."){
      
             this.showalert("بريد الكتروني غير صالح")
      
           }
      
      
           if(err.message == "The email address is already in use by another account."){
      
            this.showalert("بريد الكتروني مستخدم")
      
           }
      
      
           if(err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred."){
      
             this.showalert("يرجى التحقق من الاتصال بلشبكة")
      
           }
      
      
         if(err.message == "Password should be at least 6 characters"){
      
           this.showalert("كلمة مرور قصيرة");
      
         }
      
          })
          
      
        }




      
      showalert(message){
      
          var alert = this.alert.create({
      
            subTitle:message,
      
            buttons:["حسنا"]
      
          });
      
          return alert.present();
      
        }
  
  SignIn(create){
    console.log("sign in")
      return this.db.auth.signInWithEmailAndPassword(create.email, create.password);    
  }

  signOut(){
    return this.db.auth.signOut().then(
    ()=> localStorage.setItem("myId","false")
    )
  }

  /** 
  itAuth()
  {
    this.db.authState.subscribe(user => {

      if(user){
        localStorage.setItem("myId","true");
       
       // this.rootPage = TabsPage
         }
        else {
          
        // this.rootPage = LogInPage
  
        localStorage.setItem("myId","False")
  
        } 
  
      })
  }
  */
}
