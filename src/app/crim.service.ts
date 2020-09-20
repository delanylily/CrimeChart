import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrimService {
  url: any;
  apiKey: any;
  washington: string;
  texas: string;

  constructor(private _http: HttpClient) { 
    this.url = "https://api.usa.gov/crime/fbi/sapi/api/data/hatecrime/states/";
    this.apiKey = "API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";
    this.washington = 'WA';
    this.texas = 'TX'

    
  }

  // hateCrimeTx() {
  //   return this._http.get("https://api.usa.gov/crime/fbi/sapi/api/data/hatecrime/states/TX/BIAS_INCIDENT?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
  // }

  hateCrimeWa () {
    return this._http.get(`${this.url}${this.washington}/BIAS_INCIDENT?${this.apiKey}`);
  }

//   hateCrimeWa() {
//     return this._http.get("https://api.usa.gov/crime/fbi/sapi/api/data/hatecrime/states/WA/BIAS_INCIDENT?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
//  .map(result => result);
//   }


//using resolver: 

hateCrimeTx(): Observable<any> {
  //we don't subscribe here as the resolver should do that
  return this._http.get(`${this.url}${this.texas}/BIAS_INCIDENT?${this.apiKey}`);

}



  // getData(city, date):Observable<Object> {
  //   return this.http.get(`${this.url}${city}&${date}`);
  // }
}
