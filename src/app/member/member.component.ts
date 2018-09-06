import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Member } from '../models/member';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  members:Member[];

  memberToAdd:Member;

  constructor(private memberService:MemberService, private router:Router, private route:ActivatedRoute) {
    //this.route.params.subscribe(m => console.log(m.MemberId));
  }

  ngOnInit() {
    this.memberToAdd = new Member();

    this.getMembers();
  }

  getMembers(){
    this.memberService.getMembers()
      .subscribe(m => {
        this.members = m;
        console.log(this.members);
      });
  }

  addMember(){
    this.memberService.addMember(this.memberToAdd)
      .subscribe(res => {
        this.getMembers();
        alert("Member added successfully!");
      }),
      err => {
        console.log("Error occurred: " + err);
      };
  }
}
