import {AfterContentInit, AfterViewChecked, Component, Inject, OnInit} from '@angular/core';
import {IpService} from '../services/ip-service/ip.service';
import {LocationService} from '../services/location-service/location.service';
import {IGetInfoService, INFO_SERVICE} from '../services/rest-service/get-info.service';
import {CurrentCountry} from './current-country.model';
import {INFO} from '../model/info.model';
import {Global} from './global.model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit, AfterViewChecked {
  global: Global;
  currentCountry: CurrentCountry;
  showChild: boolean = false;

  constructor(@Inject(INFO_SERVICE) private infoService: IGetInfoService,
              private ipService: IpService,
              private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.getCurrentLocation();
    this.infoService.getInformation().subscribe(data => this.global = data.Global);
    setTimeout(() => {
      this.showChild = true;
    }, 1000)
  }


  getCurrentLocation(){
    this.ipService.getIpAddress().subscribe((res: any) =>
      this.locationService.getCurrentLocation(res.ip).subscribe((res: any) =>
        this.infoService.getSpecificCountryInfo(res.country_name.toLowerCase()).subscribe(country => this.currentCountry = country[0])));
  }

  ngAfterViewChecked(): void {
  }


}
