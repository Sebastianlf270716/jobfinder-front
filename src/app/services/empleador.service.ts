import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {

  private apiUrl = 'http://localhost:8090/technology/';

  constructor(private http: HttpClient) { }

  registrarEmpleador(formData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}`, formData);
  }

}
