import { TransactionProvider } from './../../providers/transaction/transaction';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TransactionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-list',
  templateUrl: 'transaction-list.html',
})
export class TransactionListPage {

  public transactions = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionProvider:TransactionProvider, private alertCtrl:AlertController) {
  }

  ngOnInit() {
    
    let accountId = this.navParams.get('accountId')

    this.transactionProvider.getTransactionsForAccountId(accountId).subscribe(data=>{
      this.transactions = (data as any).result
    })
  }

  public handleTransactionClicked(transaction){

    let alert = this.alertCtrl.create({
      title: 'Edit Tags',
      inputs: [
        {
          name: 'Tags',
          placeholder: transaction.categoryTags.join(', '),
          value: transaction.categoryTags.join(', ') 
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let tags = data.Tags.split(',').map(tag=>tag.trim())
            this.transactionProvider.updateTagsForTransactionId(transaction.id, tags).subscribe(data=>{

              let accountId = this.navParams.get('accountId')
              this.transactionProvider.getTransactionsForAccountId(accountId).subscribe(data=>{
                this.transactions = (data as any).result
              })
            })
          }
        }
      ]
    });
    alert.present();

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionListPage');
  }

}
