import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensage: string = '';
  tipoUsuario: string = '';
  cboLogin:string = "cboLogin";
  cboLoginDesplegado:string = "ocultar";

  formLogin: any = {
    email: '',
    contrasenia: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  desplegarCombo() {
    this.cboLogin="ocultar"
    this.cboLoginDesplegado="cboLoginDesplegado"
  }

  plegarCombo() {
    this.cboLoginDesplegado="ocultar"
    this.cboLogin="cboLogin"
  }

  onSubmit(tipoUsuario: string){
    this.tipoUsuario = tipoUsuario;
    if(this.validarLogin()){
      this.loginService.iniciarSesion(this.formLogin, this.tipoUsuario).subscribe({
        next: response => {
          //AQUI SE TRABAJA CON response
          console.log(response);
        },
        error: error => {
          this.mensage = error;
        }
      });
    }
  }

  validarLogin(): boolean{
    if(this.formLogin.email.length > 80){
      this.mensage = 'El correo no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.formLogin.contrasenia.length > 30){
      this.mensage = 'La contraseña no puede tener mas de 30 caracteres';
      return false;
    }
    return true;
  }
}
