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

  findById(id: any): Observable<Administrador> {
    return this.http.get<Administrador>(`${API_CONFIG.baseUrl}/adm/${id}`);
  }

  findAll(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(`${API_CONFIG.baseUrl}/adm`);
  }

  create(administrador:Administrador): Observable<Administrador>{
    return this.http.post<Administrador>(`${API_CONFIG.baseUrl}/adm`, administrador)
  }

  update(administrador: Administrador): Observable<Administrador> {
    return this.http.put<Administrador>(`${API_CONFIG.baseUrl}/adm/${administrador.id}`, administrador);
  }
}
