import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private client: HttpClient) { }

  getPeople(): Observable<any> {
    return this.client.get<any>('https://swapi.dev/api/people');
  }

  getData(url:string): Observable<any> {
    return this.client.get<any>(url);
  }

  getMovies(): Observable<any> {
    return this.client.get<any>('https://swapi.dev/api/films');
  }
}
