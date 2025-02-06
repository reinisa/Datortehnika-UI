import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pieprasijums } from './pieprasijums';
import { Status } from '../paramEnums/status';

@Injectable({
  providedIn: 'root'
})
export class PieprasijumsService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:String="/api/pieprasijums";

  fetchAllPieprasijums():Observable<Pieprasijums[]>{
    return this._httpClient.get<Pieprasijums[]>(`${this.baseUrl}/getAllPieprasijums`);
  }
  
  createPieprasijums(data: Pieprasijums){
    return this._httpClient.post<Pieprasijums>(`${this.baseUrl}/createPieprasijums`,data); // <Pieprasijums[]>
  }

  updatePieprasijums(id: number, status: boolean){
    return this._httpClient.put<Pieprasijums>(`${this.baseUrl}/updatePieprasijums/${id}/${status}`,{status});
  }

  deletePieprasijums(id: number){
    return this._httpClient.delete<Pieprasijums>(`${this.baseUrl}/deletePieprasijums/${id}`)
  }

}
