import { TransactionListPage } from './../transaction-list/transaction-list';
import { AccountProvider } from './../../providers/account/account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-list',
  templateUrl: 'account-list.html',
})
export class AccountListPage {

  // public creditCardAaccounts = []
  // public depositAaccounts = []
  public accounts = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private accountProvider: AccountProvider) {
    
  }

  ngOnInit() {
    let customerId = this.navParams.get('customerId')

    this.accountProvider.getCustomerAccountsForCustomerId(customerId).subscribe(data=>{
      this.accounts = (data as any).result
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountListPage');
  }


  handleAccountClicked(account){
    console.log(account)

    this.navCtrl.push(TransactionListPage, {accountId: account.id})
    
  }
}
