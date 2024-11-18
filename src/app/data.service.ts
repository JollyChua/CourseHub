import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Grab our API
  private apiUrl  = "https://dog.ceo/api/breeds/image/random";

  constructor(private http: HttpClient) { }

  // Grab Data
/*   getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  } */

/*   fetchData() {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  } */

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
