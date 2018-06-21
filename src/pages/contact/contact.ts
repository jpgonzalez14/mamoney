import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoneyServiceProvider } from '../../providers/money-service/money-service';
import { Saving } from '../../models/money.model';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {



  constructor(public navCtrl: NavController, private moneyService: MoneyServiceProvider) {

  }
  addSaving(saving: Saving){
    //console.log("lok");
    this.moneyService.addSaving(saving);
  }

}
