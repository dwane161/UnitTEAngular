import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './components/list/list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpJwtAuthorizationInterceptor} from "./interceptors/http-jwt-authorization.interceptor";
import {MaterialModule} from "../material/material.module";
import {AddComponent} from './components/add/add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    FormComponent
  ],
  exports: [
    ListComponent,
    AddComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpJwtAuthorizationInterceptor, multi: true}
  ]
})
export class CustomerModule {
}
