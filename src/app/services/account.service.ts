import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  rootUrl:string = "http://localhost:51620/";

  accounts:Observable<Account>[];

  constructor(private http:HttpClient) { }

  // getAccounts(){
  //   var members = this.http.get<Account[]>(this.rootUrl + "api/Accounts");
  //   return members;
  // }

  getMemberAccounts(memberId){
    var url = this.rootUrl + 'api/MemberAccounts' + `/${memberId}`;
    var accounts = this.http.get<Account[]>(url);
    return accounts;
  }

  addAccount(newAccount:Account){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
    AccountNumber: newAccount.AccountNumber,
    MemberId: newAccount.MemberId,
    AccountTypeId: newAccount.AccountTypeId,
    CurrentBalance: 0.00,
    OpenDate: new Date(2000, 1, 1),
    AccountStatusCode: 'A',
    Overdraft: false
    };
    alert("New account created");
    return this.http.post<Account>(this.rootUrl + "api/Accounts", body, {
      headers
    });
  }
}


