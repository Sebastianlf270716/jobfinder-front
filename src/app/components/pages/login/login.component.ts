import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private router: Router) { }

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
    let ruta="";
    if (tipoUsuario=="empleador") {
      ruta = "home-employer";
    }else if (tipoUsuario=="usuario") {
      ruta = "home-user";
    }else{
      ruta = "home-admin";
    }
    if(this.validarLogin()){
      this.loginService.iniciarSesion(this.formLogin, this.tipoUsuario).subscribe({
        next: response => {
          if (response!=null) {
            console.log(response);
            localStorage.setItem('perfil', JSON.stringify(response[0]));
            this.router.navigate([ruta]);
          }else{
            alert("Correo o contraseña incorrectos");
          }
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
