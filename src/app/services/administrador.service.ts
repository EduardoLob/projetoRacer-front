import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Administrador } from '../models/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http:HttpClient) { }

  findAll(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(`${API_CONFIG.baseUrl}/adm`);
  }
}
