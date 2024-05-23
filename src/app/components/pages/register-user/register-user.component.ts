import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  mensage: string = '';
  cboRegistro:string = "cboRegistro";
  cboRegistroDesplegado:string = "ocultar";
  genero:string = "Género";
  estudios: any[] = [];
  experiencias: any[] = [];

  curriculum: any = {
    estudios: this.estudios,
    experiencias: this.experiencias
  }

  formData: any = {
    nombre: '',
    telefono: '',
    ciudad: '',
    email: '',
    contrasenia: '',
    genero: this.genero,
    perfil: '',
    curriculum: this.curriculum
  }

  estudio: any = {
    institucion: '',
    titulo: '',
    tiempo: null
  }

  experiencia: any = {
    empresa: '',
    cargo: '',
    tiempo: null
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  desplegarCombo() {
    this.cboRegistro="ocultar"
    this.cboRegistroDesplegado="cboRegistroDesplegado"
  }

  plegarCombo() {
    this.cboRegistroDesplegado="ocultar"
    this.cboRegistro="cboRegistro"
  }

  agregarEstudio(){
    if(this.validarEstudio()){
      this.estudios.push({ ...this.estudio });
      this.estudio = { institucion: '', titulo: '', tiempo: null };
      this.mensage = '';
    }
  }

  agregarExperiencia(){
    if(this.validarExperiencia()){
      this.experiencias.push({ ...this.experiencia});
      this.experiencia = { empresa: '', cargo: '', tiempo: null };
      this.mensage = '';
    }
  }

  selectGenero(genero: string){
    this.genero = genero;
    this.formData.genero = genero;
  }

  onSubmit(){
    console.log(this.formData);
    if(this.validarFormulario()){
      this.usuarioService.registrarUsuario(this.formData).subscribe({
        next: response => {
          console.log(response);
          this.mensage = response;
        },
        error: error => {
          this.mensage = error;
        }
      })
    }
  }

  validarEstudio(): boolean{
    if(this.estudio.institucion.length > 80){
      this.mensage = 'El nombre de la institución no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.estudio.titulo.length > 80){
      this.mensage = 'El título no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.estudio.tiempo < 0){
      this.mensage = 'Los años no pueden ser un número negativo';
      return false;
    }

    return true;
  }

  validarExperiencia(): boolean{
    if(this.experiencia.empresa.length > 80){
      this.mensage = 'El nombre de la empresa no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.experiencia.cargo.length > 80){
      this.mensage = 'El cargo no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.experiencia.tiempo < 0){
      this.mensage = 'Los años no pueden ser un número negativo';
      return false;
    }

    return true;
  }

  validarFormulario(): boolean{
    if(this.formData.nombre.length > 80){
      this.mensage = 'El nombre no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.formData.telefono.length > 20){
      this.mensage = 'El telefono no puede tener mas de 20 caracteres';
      return false;
    }
    if(this.formData.ciudad.length > 30){
      this.mensage = 'La ciudad no puede tener mas de 30 caracteres';
      return false;
    }
    if(this.formData.email.length > 80){
      this.mensage = 'El correo no puede tener mas de 80 caracteres';
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
    if(this.formData.genero === 'Género'){
      this.mensage = 'Por favor, elija un género';
    }
    if(this.formData.perfil.length > 250){
      this.mensage = 'El perfil no puede tener mas de 250 caracteres';
    }

    return true;
  }
}
