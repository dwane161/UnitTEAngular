import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  exports:[
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
