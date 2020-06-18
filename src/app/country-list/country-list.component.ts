import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {IGetInfoService, INFO_SERVICE} from '../services/rest-service/get-info.service';
import {Country} from './country.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: MatTableDataSource<Country>;
  displayedColumns: Array<string> = ['Country','NewConfirmed','TotalConfirmed', 'NewDeaths','TotalDeaths','NewRecovered','TotalRecovered'];


  constructor(@Inject(INFO_SERVICE) private getInfoService: IGetInfoService) {
  }

  ngOnInit() {
    this.getInfoService.getInformation().subscribe(data => this.countries = new MatTableDataSource(data.Countries));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.countries.filter = filterValue.trim().toLowerCase();
  }

}
