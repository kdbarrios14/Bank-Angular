import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MemberComponent } from './member/member.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TermDepositsComponent } from './term-deposits/term-deposits.component';
import { LoanComponent } from './loan/loan.component';

const routes: Routes = [
  {path:'Login', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Member', component:MemberComponent},
  {path:'Member/Accounts/:id', component:AccountComponent},
  {path:'Member/TermDeposits/:id', component:TermDepositsComponent},
  {path:'Member/Loans/:id', component:LoanComponent},
  {path:'Transactions/:id', component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
