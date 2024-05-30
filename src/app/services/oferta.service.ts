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

  consultarOfertas(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  registrarVisita(id:Number): Observable<any>{
    return this.http.get(this.apiUrl+'/RegistrarVisita/?id='+id);
  }

  registrarCandidato(usuario_id:Number, oferta_id:Number): Observable<any>{
    return this.http.get(this.apiUrl+'/RegistrarCandidato/?usuario_id='+usuario_id+'&oferta_id='+oferta_id);
  }
}
