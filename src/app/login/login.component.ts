import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo:Login;
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.loginInfo = new Login();
  }

  Login(){
    this.memberService.Authentication(this.loginInfo.username, this.loginInfo.password)
      .subscribe((data:any) => {
        localStorage.setItem('Token', data.access_token);
        alert("Token: " + localStorage.getItem('Token'));
        this.router.navigate(['Member']);
      }),
      err => {
        alert("Login failed");
      };
  }

}
