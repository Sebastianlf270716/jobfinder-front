import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrls: ['./register-employer.component.scss']
})
export class RegisterEmployerComponent implements OnInit {

  mensage: string = '';

  formData: any = {
    nombre: '',
    ciudad: '',
    actividad: '',
    correo: '',
    descripcion: '',
    contrasenia: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.validarFormulario()){
      //AQUI SE LLAMA AL SERVICIO
    }
    console.log(this.formData);
  }

  validarFormulario(): boolean{
    if(this.formData.nombre.length > 80){
      this.mensage = 'El nombre no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.formData.ciudad.length > 30){
      this.mensage = 'La ciudad no puede tener mas de 30 caracteres';
      return false;
    }
    if(this.formData.actividad.length > 50){
      this.mensage = 'La actividad no puede tener mas de 50 caracteres';
      return false;
    }
    if(this.formData.correo.length > 80){
      this.mensage = 'El correo no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.formData.descripcion.length > 200){
      this.mensage = 'La descripcion no puede tener mas de 200 caracteres';
      return false;
    }
    if(this.formData.contrasenia.length > 30){
      this.mensage = 'La contraseña no puede tener mas de 30 caracteres';
      return false;
    }
    if(this.formData.contrasenia.length < 8){
      this.mensage = 'La contraseña debe tener mas de 8 caracteres';
      return false;
    }

    return true;
  }
}
