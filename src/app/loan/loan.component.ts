import { Component, OnInit } from '@angular/core';
import { Loan } from '../models/loan';
import { Payment } from '../models/payment';
import { LoanService } from '../services/loan.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  memberId:number;
  loans:Loan[];
  loanToAdd:Loan;
  paymentInfo:Payment;

  constructor(private loanService:LoanService, private route:ActivatedRoute) {
    this.memberId = route.snapshot.params['id'];
    console.log(this.memberId);
  }

  ngOnInit() {
    this.loanToAdd = new Loan();
    this.loanToAdd.MemberId = this.memberId;
    this.paymentInfo = new Payment();

    this.getMemberLoans(this.memberId);
  }

  getMemberLoans(memberId){
    this.loanService.getMemberLoans(memberId)
      .subscribe(l => {
        this.loans = l;
        console.log(this.loans);
      });
  }

  addLoan(){
    this.loanService.addLoan(this.loanToAdd)
      .subscribe(res => {
        this.getMemberLoans(this.memberId);
        alert("Loan added successfully");
      }),
      err => {
        console.log("Error occurred: " + err);
      };
  }

  makePayment(){
    this.loanService.makePayment(this.paymentInfo)
      .subscribe(res => {
        this.getMemberLoans(this.memberId);
        alert("Payment made");
      }),
      err => {
        console.log("Error occurred: " + err);
      };
  }

}
