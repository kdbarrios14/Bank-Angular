import { Component, OnInit } from '@angular/core';

import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  memberId:number;

  accounts:Account[];
  accountToAdd:Account;

  constructor(private accountService:AccountService, private route:ActivatedRoute) {
    this.memberId = route.snapshot.params['id'];
    console.log(this.memberId);
  }

  ngOnInit() {
    this.accountToAdd = new Account();
    this.accountToAdd.MemberId = this.memberId;

    this.getMemberAccounts(this.memberId);
  }

  getMemberAccounts(memberId){
    this.accountService.getMemberAccounts(memberId)
      .subscribe(a => {
        this.accounts = a;
        console.log(this.accounts);
      });
  }

  addAccount(){
    this.accountService.addAccount(this.accountToAdd)
      .subscribe(res => {
        this.getMemberAccounts(this.memberId);
        alert("Account added successfully!");
      }),
      err => {
        console.log("Error occurred: " + err);
      };
    }

}

