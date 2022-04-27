import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiAddCustomerResponse, ApiCustomersResponse, Customer} from "../interfaces/customer.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Authorization} from "../interfaces/authorization.interface";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAuthorization(): Observable<Authorization> {
    return this.http.post<Authorization>(`${environment.apiUrl}/Authorize/token`, {}, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

  getToken() {
    return localStorage.getItem('API_TOKEN');
  }


  getCustomers(): Observable<ApiCustomersResponse> {
    return this.http.get<ApiCustomersResponse>(`${environment.apiUrl}/Customers`);
  }

  addCustomer(customer: Customer): Observable<ApiAddCustomerResponse> {
    return this.http.post<ApiAddCustomerResponse>(`${environment.apiUrl}/Customers`, customer);
  }

  editCustomer(customer: Customer): Observable<ApiAddCustomerResponse> {
    return this.http.put<ApiAddCustomerResponse>(`${environment.apiUrl}/Customers/${customer.id}`, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${environment.apiUrl}/Customers/${id}`)
  }
}
