import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    console.log("request "+req);
    if(localStorage.getItem('my_at') != null || localStorage.getItem('my_at') != undefined){
      
      const token = JSON.parse(localStorage.getItem('my_at')!);
      console.log("token: "+ token.access_token);


      const AuthRequest = req.clone( { headers: req.headers.set("Authorization", "Bearer "+token!.access_token)});
      return next.handle(AuthRequest)
    }
    
    else {
     return next.handle(req);
    }
  }
}
