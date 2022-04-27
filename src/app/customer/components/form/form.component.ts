import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../interfaces/customer.interface";
import {AddComponent} from "../add/add.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dataSource: Customer[] = [];
  @ViewChild(AddComponent) addComponent!: AddComponent;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  refreshCustomers(customer: Customer) {
    if (customer) {
      this.addComponent.fillCustomerData(customer);
    }
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(resp => {
      this.dataSource = resp.data;
    });
  }
}
