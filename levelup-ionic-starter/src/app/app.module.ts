import { CustomerListPage } from './../pages/customer-list/customer-list';
import { BranchListPage } from './../pages/branch-list/branch-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccountListPage } from '../pages/account-list/account-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomerProvider } from '../providers/customer/customer';
import { AccountProvider } from '../providers/account/account';
import { TransactionProvider } from '../providers/transaction/transaction';
import {HttpClientModule} from '@angular/common/http';
import { BranchProvider } from '../providers/branch/branch';
import { TransactionListPage } from '../pages/transaction-list/transaction-list';

@NgModule({
  declarations: [
    MyApp,
    AccountListPage,
    TransactionListPage,
    BranchListPage,
    CustomerListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountListPage,
    TransactionListPage,
    BranchListPage,
    CustomerListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider,
    AccountProvider,
    TransactionProvider,
    BranchProvider
  ]
})
export class AppModule {}
