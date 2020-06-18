import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountryListComponent} from '../country-list.component';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {InfoServiceProvider} from '../../services/rest-service/get-info.service';
import {CountryRoutingModule} from './country-routing.module';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    CountryRoutingModule,
    MatInputModule
  ],
  providers: [
    InfoServiceProvider
  ]
})
export class CountryListModule { }

