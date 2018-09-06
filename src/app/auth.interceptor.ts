//The HttpInterceptor is an interface and used to implement the intercept method.
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqHeader = req.clone({headers: req.headers.set(
        "Authorization", "Bearer " + localStorage.getItem('Token')
    )}
);
    return next.handle(reqHeader);
  }
}