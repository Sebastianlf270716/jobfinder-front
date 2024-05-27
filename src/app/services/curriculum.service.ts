import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private apiUrl = 'http://localhost:63780/api/Curriculum';

  constructor(private http: HttpClient) { }

  consultarEstudios(id: Number): Observable<any>{
    return this.http.get(`${this.apiUrl}/ConsultarEstudios?id=${id}`);
  }

  consultarExperiencias(id: Number): Observable<any>{
    return this.http.get(`${this.apiUrl}/ConsultarExperiencias?id=${id}`);
  }
}
