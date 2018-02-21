import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, take } from 'rxjs/operators';


const API_KEY = "";

@Injectable()
export class PropertiesService {

  serverUrl = "./assets/exerciseData.json";
  mapsApiUrl = "https://maps.googleapis.com/maps/api/geocode/json";

  constructor(private http: HttpClient) { }

  getProperties() {
    return this.http.get(`${this.serverUrl}`).pipe(
      take(1),
      catchError(this.handleError)
    );
  }

  getLatLong(postCode: string) {
    let encodedPostCode = encodeURIComponent(postCode);
    return this.http.get(`${this.mapsApiUrl}?address=${encodedPostCode}&key=${API_KEY}`).pipe(
      take(1),
      catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}
