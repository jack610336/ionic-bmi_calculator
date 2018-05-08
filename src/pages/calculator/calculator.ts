import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  height: number;
  weight: number;
  bmi: number;
  bmiMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calBMI(){
    
    if (this.weight > 0 && this.height >0) {
      let finalBmi = this.weight / ((this.height/100) * (this.height /100));
      this.bmi = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
    // if (this.name != null) {
    //   this.name = this.name;
    // }
  }

  private setBMIMessage(){
    if (this.bmi < 18.5) {
      this.bmiMessage = "Underweight"; 
    }
    if (this.bmi > 18.5 && this.bmi < 25) {
      this.bmiMessage = "Normal"
    }
  
    if (this.bmi > 25 && this.bmi < 30) {
      this.bmiMessage = "Overweight"
    }
  
    if (this.bmi > 30) {
      this.bmiMessage = "Obese"
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
