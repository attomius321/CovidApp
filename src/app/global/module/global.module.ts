import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalComponent} from '../global.component';
import {GlobalRoutingModule} from './global-routing.module';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {CurrentCountryComponent} from '../current-country/current-country.component';
import {WorldWideComponent} from '../world-wide/world-wide.component';
import {TimerComponent} from '../timer/timer/timer.component';

@NgModule({
  declarations: [
    GlobalComponent,
    CurrentCountryComponent,
    WorldWideComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ]
})
export class GlobalModule { }
