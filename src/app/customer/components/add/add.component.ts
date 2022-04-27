import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ApiResponseStatus, Customer} from "../../interfaces/customer.interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    id: '',
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    genre: ['', Validators.required],
    contactNumbers: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  @Output()
  addedCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();


  constructor(private fb: FormBuilder, private customerService: CustomerService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  resetForm() {
    this.myForm.reset();
  }

  saveCustomer() {
    if (this.myForm.valid) {
      let value = this.myForm.value as Customer;

      if (!value.id) {
        this.customerService.addCustomer(value).subscribe(resp => {
          if (resp.status == ApiResponseStatus.SUCCESS) {
            this.snackBar.open(`Customer ${resp.data.firstName} ${resp.data.lastName} added successfully`);
            this.addedCustomer.emit(resp.data);
          }
        });
      } else {
        this.customerService.editCustomer(value).subscribe(resp => {
          this.snackBar.open(`Customer ${resp.data.firstName} ${resp.data.lastName} edited successfully`);
          this.addedCustomer.emit(resp.data);
          this.resetForm();
        })
      }
    }

  }

  fillCustomerData(customer: Customer) {
    this.myForm.setValue(customer);
  }
}
