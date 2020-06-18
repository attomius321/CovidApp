import {AfterContentInit, AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {CurrentCountry} from '../current-country.model';

@Component({
  selector: 'app-current-country',
  templateUrl: './current-country.component.html',
  styleUrls: ['./current-country.component.css']
})
export class CurrentCountryComponent{

  @Input() currentCountry: CurrentCountry;

  constructor() {
  }

}
