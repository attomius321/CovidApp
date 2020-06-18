import {Component, Inject, Input, OnInit} from '@angular/core';
import {IGetInfoService, INFO_SERVICE} from '../../services/rest-service/get-info.service';
import {MatTableDataSource} from '@angular/material/table';
import {Global} from '../global.model';

@Component({
  selector: 'app-world-wide',
  templateUrl: './world-wide.component.html',
  styleUrls: ['./world-wide.component.css']
})
export class WorldWideComponent implements OnInit {
  @Input() global: Global;

  constructor() { }

  ngOnInit(): void {
  }

}
