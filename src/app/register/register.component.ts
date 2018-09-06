import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerInfo:Register;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.registerInfo = new Register();
  }

  OnSubmit(){
    this.memberService.registerMember(this.registerInfo)
      .subscribe(r => {
        alert("Registration successful");
      }),
      err => {
        console.log("Error occurred: " + err);
      };
  }

}
