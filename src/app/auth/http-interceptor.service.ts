import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {
    if (localStorage.getItem("token") != null) {
      console.log("token available");
      let tokenizeReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem("token"),
        }
      })
      return next.handle(tokenizeReq)
    }

    console.log("token not available");
    return next.handle(req.clone({}));
  }

}
