import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  rootUrl:string = "http://localhost:51620/";
  loans:Observable<Loan>[];

  constructor(private http:HttpClient) { }

  getMemberLoans(memberId){
    var url = this.rootUrl + 'api/MemberLoans' + `/${memberId}`;
    var loans = this.http.get<Loan[]>(url);
    return loans;
  }

  addLoan(newLoan:Loan){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      LoanId: 1,
      MemberId: newLoan.MemberId,
      LoanStatusId: 1,
      LoanTypeId: newLoan.LoanTypeId,
      IssueDate: new Date(2000, 1, 1),
      Amount: newLoan.Amount,
      Term_Years: newLoan.Term_Years,
      AmountPaid: 0.00,
      PaymentDate: new Date(2000, 1, 1)
    };
    return this.http.post<Loan>(this.rootUrl + "api/Loans", body, {
      headers
    });
  }

  makePayment(paymentInfo:Payment){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      LoanId: paymentInfo.LoanId,
      Amount: paymentInfo.Amount,
      AccountNumber: paymentInfo.AccountNumber
    };
    return this.http.post<Payment>(this.rootUrl + "api/Loans/payment", body, {
      headers
    });
  }
}
