// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to get data from the API
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Method to post data to the API
  addPost(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
