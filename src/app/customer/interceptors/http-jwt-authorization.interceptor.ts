import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerService} from "../services/customer.service";

@Injectable()
export class HttpJwtAuthorizationInterceptor implements HttpInterceptor {

  constructor(private customerService: CustomerService) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.customerService.getToken();

    if (!token) {
      return next.handle(req);
    }

    const request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }
}
