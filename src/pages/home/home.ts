import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoneyServiceProvider } from '../../providers/money-service/money-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  savings:{title:string}[]=[];

  constructor(public navCtrl: NavController, private moneyService: MoneyServiceProvider) {

  }

  ionViewWillEnter(){
    console.log('ion view');
    this.savings=this.getAllSavings();
  }

  getAllSavings(){
    return this.moneyService.getAllSavings();
  }

}
