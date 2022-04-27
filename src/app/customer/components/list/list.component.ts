import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../interfaces/customer.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  dataSource: Customer[] = [];

  @Output()
  customerChanged: EventEmitter<Customer> = new EventEmitter<Customer>();

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'genre', 'email', 'contactNumbers', 'actions'];

  constructor(private customerService: CustomerService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }

  editCustomer(element: Customer) {
    this.customerChanged.emit(element)
  }

  deleteCustomer(id: number, name: string) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customerChanged.emit();
      this.snackBar.open(`Customer ${name} deleted successfully`);
    })
  }
}
