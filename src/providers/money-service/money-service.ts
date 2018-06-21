import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Saving } from '../../models/money.model';

/*
  Generated class for the MoneyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoneyServiceProvider {

  private savings: Saving[]=[];
//public http: HttpClient
  constructor(public storage: Storage) {
  }

  addSaving(saving: Saving){
    console.log('entro provider');
    this.savings.push(saving);
    this.storage.set('savings', this.savings);
  }

  getAllSavings(){
    return this.storage.get('savings').then(
      (savings)=>{
        this.savings = savings == null ? [] : savings;
        return this.savings.slice();
      }
    );
  }

}
