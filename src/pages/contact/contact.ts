import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneyServiceProvider } from '../../providers/money-service/money-service';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private moneyService: MoneyServiceProvider) {

  }
  addSaving(value:{title: string}){
    this.moneyService.addSaving(value);
  }
}
