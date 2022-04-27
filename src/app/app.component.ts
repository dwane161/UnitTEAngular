import {Component} from '@angular/core';
import {CustomerService} from "./customer/services/customer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private customer: CustomerService) {
    if (!localStorage.getItem('API_TOKEN')) {
      this.customer.getAuthorization().subscribe(resp => {
        localStorage.setItem('API_TOKEN', resp.data);
      });
    }
  }
}
