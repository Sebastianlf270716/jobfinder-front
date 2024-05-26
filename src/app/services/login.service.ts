import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:63780/api/';

  constructor(private http: HttpClient) { }

  iniciarSesion(formLogin: any, tipoUsuario: string): Observable<any>{
    let apiUrlUser: string = '';

    switch(tipoUsuario){
      case 'empleador':
        apiUrlUser = `${this.apiUrl}Empleador/IniciarSesion`;
        break;
      case 'usuario':
        apiUrlUser = `${this.apiUrl}Usuario/IniciarSesion`;
        break;
      case 'administrador':
        apiUrlUser = `${this.apiUrl}Administrador/IniciarSesion`;
        break;
      default:
        console.error('El tipo de usuario no existe')
        break;
    }
    return this.http.post(`${apiUrlUser}`, formLogin);
  }
}
