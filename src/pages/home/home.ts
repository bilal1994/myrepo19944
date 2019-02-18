import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { LoginPage } from '../login/login';
  // import { DNS } from '@ionic-native/dns';
  //  import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
splash=true;
tabBarElement:any;
  Password : any;

  constructor(public navCtrl: NavController, public alert: AlertController,
    ) {
     this.tabBarElement =document.querySelector('.tabbar');
  //   var malert = alert.create({

  
  //     message:"تحقق من اتصالك بلانترنت او اعد المحاولة",
  
  //      cssClass:"setdire",
  
  //      enableBackdropDismiss:false
  
      
  
  //    })
  
  
  
  
  //   var host = "www.google.com";
  
  
  //   this.dns.resolve(host).then(addr => {
  
  // // اكو نت كمل شغلك 
  
  //  },err => {
  
  // // ماكو نت نضهر ال alert 
  
  //           malert.present();
  
        
  
  //         })
  
  //private dns: DNS
  }

  ionViewDidLoad(){
    this.tabBarElement.style.display ='none';
    setTimeout(()=>{
      this.splash =false;
      
    this.tabBarElement.style.display ='flex';
    },4000);
  }

  admin() {
    const prompt = this.alert.create({
      title: 'تسجيل الدخول',
      message: "ادخل كلمة المرور رجاءا",
      inputs: [
        {
          name: 'Password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.Password= data.Password;
            if (this.Password == 20182018) {
              this.navCtrl.setRoot(AdminPage)
            }
            else{
              this.navCtrl.setRoot(HomePage)
            }
          }
        }
      ]
    });
    prompt.present();
  }
  
  family(){
    this.navCtrl.push(LoginPage)
  }

}
