import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Transaction } from '../models/transaction';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  rootUrl:string = "http://localhost:51620/";
  transactions:Observable<Transaction>[];

  constructor(private http:HttpClient) { }

  getAccountTransactions(accountId){
    var url = this.rootUrl + 'api/AccountTransactions' + `/${accountId}`;
    var transactions = this.http.get<Transaction[]>(url);
    return transactions;
  }

  makeTransaction(newTransaction:Transaction){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      TransactionId:newTransaction.TransactionId,
      TransTypeId:newTransaction.TransTypeId,
      AccountNumber:newTransaction.AccountNumber,
      AccountForTransfer:newTransaction.AccountForTransfer,
      TransactionDate:new Date(2000, 1, 1),
      Amount:newTransaction.Amount
    };
    alert("Made transaction");
    return this.http.post<Transaction>(this.rootUrl + "api/Transactions", body, {
      headers
    });
  }
}

