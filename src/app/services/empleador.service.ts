import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {

  private apiUrl = 'http://localhost:63780/api/Empleador';

  constructor(private http: HttpClient) { }

  registrarEmpleador(formData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}`, formData);
  }

  eliminarEmpleador(id:Number): Observable<any>{
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }

  actualizarEmpleador(formData: any): Observable<any>{
    return this.http.put(`${this.apiUrl}`, formData);
  }
}
