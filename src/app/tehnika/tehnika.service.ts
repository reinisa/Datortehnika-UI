import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tehnika } from './tehnika';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TehnikaService {
  constructor(private _httpClient:HttpClient) { }
  
    baseUrl:String="/api/tehnika"; // /pieprasijums/getAllPieprasijums
    fetchAllTehnika(): Observable<Tehnika[]> {
      return this._httpClient.get<Tehnika[]>(`${this.baseUrl}/getAllTehnika`);
    }
}
