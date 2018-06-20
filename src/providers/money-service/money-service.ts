import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the MoneyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoneyServiceProvider {

  private savings: {title: string}[]=[];
//public http: HttpClient
  constructor() {
  }
  
  addSaving(saving:{title: string}){
    console.log('entro provider');
    this.savings.push(saving);
  }

  getAllSavings(){
    return this.savings.slice();
  }

}
