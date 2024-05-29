import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:63780/api/Usuario';

  constructor(private http: HttpClient) { }

  registrarUsuario(formData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}`, formData);
  }

  eliminarUsuario(id: Number): Observable<any>{
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}
