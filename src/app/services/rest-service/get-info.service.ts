import {Injectable, InjectionToken, Provider} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INFO} from '../../model/info.model';
import {Country} from '../../country-list/country.model';

export interface IGetInfoService {
  getInformation(): Observable<INFO>;
  getSpecificCountryInfo(name: string): Observable<Country>;
}

export const INFO_SERVICE = new InjectionToken<IGetInfoService>('INFO_SERVICE');

@Injectable()
export class GetInfoService implements IGetInfoService{

  private url: string = "https://api.covid19api.com/summary";

  constructor(private http: HttpClient) { }

  getInformation(): Observable<INFO>{
    return this.http.get<INFO>(this.url);
  }

  getSpecificCountryInfo(name: string): Observable<Country>{
    return this.http.get<Country>("https://api.covid19api.com/live/country/"+name);
}

}

export const InfoServiceProvider: Provider = {
  provide:INFO_SERVICE,
  useClass: GetInfoService
}


