import { Component, OnInit } from '@angular/core';
import { TermDepositsService } from '../services/term-deposits.service';
import { TermDeposits } from '../models/term-deposits';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-term-deposits',
  templateUrl: './term-deposits.component.html',
  styleUrls: ['./term-deposits.component.scss']
})
export class TermDepositsComponent implements OnInit {
  memberId:number;
  tds:TermDeposits[];
  tdToAdd:TermDeposits;

  constructor(private tdService:TermDepositsService, private route:ActivatedRoute) { 
    this.memberId = route.snapshot.params['id'];
    console.log(this.memberId);
  }

  ngOnInit() {
    this.tdToAdd = new TermDeposits();
    this.tdToAdd.MemberId = this.memberId;
    this.getMemberDeposits(this.memberId);
  }

  getMemberDeposits(memberId){
    this.tdService.getMemberDeposits(memberId)
      .subscribe(td => {
        this.tds = td;
        console.log(this.tds);
      });
  }

  addTermDeposit(){
    this.tdService.addTermDeposit(this.tdToAdd)
      .subscribe(res => {
        this.getMemberDeposits(this.memberId);
        alert("Term Deposit added successfully!");
      }),
      err => {
        console.log("Error occurred: " + err);
      };
    }
}
