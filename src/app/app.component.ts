import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BankAngular';
  constructor(private router:Router){}

  Logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['Login']);
  }
}
