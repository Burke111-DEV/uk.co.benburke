import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


const MaterialComponents = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatDividerModule,
  MatButtonToggleModule,
];


@NgModule({
  imports: [],
  exports: [ MaterialComponents ],
})
export class MaterialModule { }
