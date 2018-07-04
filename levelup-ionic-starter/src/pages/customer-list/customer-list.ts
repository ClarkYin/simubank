import { AccountListPage } from './../account-list/account-list';
import { CustomerProvider } from './../../providers/customer/customer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html',
})
export class CustomerListPage {

  public customers = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private customerProvider: CustomerProvider) {
  }

  ngOnInit() {
    this.customerProvider.getCustomers().subscribe( data =>{
      
      let customers = ( data as any ).result.slice(0, 100)
      console.log(customers)
      this.customers = customers
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerListPage');
  }

  handleCustomerClicked(customer){
    console.log(customer)

    this.navCtrl.push(AccountListPage, {customerId: customer.id})

  }
}
