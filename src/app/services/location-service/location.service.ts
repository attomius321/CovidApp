import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, UrlSerializer} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  private url: string ="http://api.ipstack.com/";
  private key: string ="a554ac78014f6af32d3f1f0e39312935";

  getCurrentLocation(ip: string) {
    return this.http.get(`${this.url}${ip}?access_key=${this.key}`);
  }
}
