import {Component, Input, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';
import {CurrentCountry} from '../../current-country.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() currentCountry: CurrentCountry;
  public date;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
        this.date = Date.now();
    }, 1000);
  }




}
