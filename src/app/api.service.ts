import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MRData } from './components/resultados/pilotos';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  buscarPilotos(){
    return this.http.get<MRData>('https://ergast.com/api/f1/current/driverStandings.json');
  }
}
