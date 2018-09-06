import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MemberComponent } from './member/member.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';
import { LoanComponent } from './loan/loan.component';
import { TermDepositsComponent } from './term-deposits/term-deposits.component';

import { MemberService } from './services/member.service';
import { AccountService } from './services/account.service';
import { TransactionService } from './services/transaction.service';
import { LoanService } from './services/loan.service';

import { MyInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MemberComponent,
    TransactionComponent,
    AccountComponent,
    LoanComponent,
    TermDepositsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MemberService,
    AccountService,
    TransactionService,
    LoanService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
