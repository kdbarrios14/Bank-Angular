import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  accountNumber:number;
  transactions:Transaction[];
  transactionToAdd:Transaction;

  constructor(private transactionService:TransactionService, private route:ActivatedRoute) { 
    this.accountNumber = route.snapshot.params['id'];
    console.log(this.accountNumber);
  }

  ngOnInit() {
    this.transactionToAdd = new Transaction();
    this.transactionToAdd.AccountNumber = this.accountNumber;
    this.getAccountTransactions(this.accountNumber);
  }

  getAccountTransactions(accountNumber){
    this.transactionService.getAccountTransactions(accountNumber)
      .subscribe(t => {
        this.transactions = t;
        console.log(this.transactions);
      });
  }

  makeTransaction(){
    this.transactionService.makeTransaction(this.transactionToAdd)
      .subscribe(res => {
        this.getAccountTransactions(this.accountNumber);
        alert("Transaction made successfully!");
      }),
      err => {
        console.log("Error occurred: " + err);
      };
    }
}

