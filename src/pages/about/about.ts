import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild('slider') slider: Slides;
  pages="0";

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    localStorage.setItem('navTitle', 'حول التطبيق') 
  }
  selectedtab(ind){
    this.slider.slideTo(ind);
  }
  moveButton($event){
   this.pages=$event._snapIndex.toString();
  }
  goBack(){
    this.navCtrl.pop()
  }
 
    showinfo0(){        
      const alert = this.alertCtrl.create({
        title: '<h1> بلال فواز<h1>',
        message: ' <h3>  شارك في البرمجة والخوارزمية والشعار<h3>  ',
        buttons: ['OK'],
        cssClass: 'alertCustomCss'

      });
      alert.present();
    }
 
    showinfo1(){
   
      const alert = this.alertCtrl.create({
        title: '<h1>هبة ستار<h1>',
        message: ' <h3>المشرفة على التطبيق <h3>  ',
        buttons: ['OK'],
        cssClass: 'alertCustomCss'

      });
      alert.present();
    }
    showinfo2(){
   
      const alert = this.alertCtrl.create({
        title: '<h1>أ. محمد عيسى<h1>',
        message: ' <h3>المدير على المشروع <h3>  ',
        buttons: ['OK'],
        cssClass: 'alertCustomCss'

      });
      alert.present();
    }


}