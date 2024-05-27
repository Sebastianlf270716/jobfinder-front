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
}
