import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  private url: string = "http://api.ipify.org/?format=json";

  getIpAddress(){
    return this.http.get(this.url);
  }


}
