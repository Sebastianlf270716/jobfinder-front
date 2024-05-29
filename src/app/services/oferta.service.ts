import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private apiUrl = 'http://localhost:63780/api/Oferta';

  constructor(private http: HttpClient) { }

  crearOferta(formData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/crear`, formData);
  }

  obtenerOfertasEmpleador(id_empleador: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/OfertasEmpleador?id_empleador=${id_empleador}`);
  }

  obtenerOfertasAdministrador(): Observable<any>{
    return this.http.get(`${this.apiUrl}/OfertasAdministrador`);
  }

  obtenerOferta(id_oferta: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/Obtener?id=${id_oferta}`);
  }

  actualizarOferta(formOffer: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/Actualizar`, formOffer);
  }

  eliminarOferta(id_oferta: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/Eliminar?id=${id_oferta}`);
  }
}
