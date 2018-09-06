import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TermDeposits } from '../models/term-deposits';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TermDepositsService {
  rootUrl:string = "http://localhost:51620/";
  tds:Observable<TermDeposits>[];

  constructor(private http:HttpClient) {
  }

  getMemberDeposits(memberId){
    var url = this.rootUrl + 'api/MemberDeposits' + `/${memberId}`;
    var tdeposits = this.http.get<TermDeposits[]>(url);
    return tdeposits;
  }

  addTermDeposit(newTD:TermDeposits){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      TermDepositId:1,
      MemberId:newTD.MemberId,
      Amount:newTD.Amount,
      Duration_Months:newTD.Duration_Months,
      StartDate: new Date(2000, 1, 1),
      EndDate: new Date(2000, 1, 1),
      AccountNumber:newTD.AccountNumber
    };
    alert("Added Term Deposit");
    return this.http.post<TermDeposits>(this.rootUrl + "api/TermDeposits", body, {
      headers
    });
  }
}
