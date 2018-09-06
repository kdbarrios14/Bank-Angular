import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  rootUrl:string = "http://localhost:51620/";
  members:Observable<Member>[];

  constructor(private http:HttpClient) { }

  registerMember(registerInfo:Register){
    const headers = new HttpHeaders().set('content-type','application/json');
    var body = {
      email:registerInfo.username,
      password:registerInfo.password
    };
    return this.http.post(this.rootUrl+'/api/Account/Register', body, {
      headers
    });
  }

  getMembers(){
    var members = this.http.get<Member[]>(this.rootUrl + "api/Members");
    return members;
  }

  addMember(newMember:Member){
    const headers = new HttpHeaders({
      'content-type':'application/json'
    });
    var body = {
      FirstName: newMember.first,
      LastName: newMember.last,
      DOB: new Date(2000,12,12),
      SSN: 123456789,
      AddressLine1: "address",
      AddressLine2: null,
      City: "city",
      State: "ST",
      Zipcode: "zipcode",
      Email: newMember.email,
      Phone: null,
      JoinDate: new Date(2000, 1, 1)
    };
    alert("New member created");
    return this.http.post<Member>(this.rootUrl + "api/Members", body, {
      headers
    });
  }

  Authentication(email, password){
    var data = {
      Username:email,
      Password:password
    }
    const headers = new HttpHeaders({
      'content-type':'application/json',
      'data':JSON.stringify(data)
    });
    return this.http.post(this.rootUrl + 'api/Account/Login', data, {
      headers
    });
  }
}
