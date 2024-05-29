import { CurriculumService } from 'src/app/services/curriculum.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-consult-user',
  templateUrl: './profile-consult-user.component.html',
  styleUrls: ['./profile-consult-user.component.scss']
})
export class ProfileConsultUserComponent implements OnInit {

  formulario: FormGroup;
  curriculum: any = {
    estudios: [],
    experiencias: []
  }

  soloLectura: boolean = true;
  visible: string = "";
  invisible: string = "ocultar";
  cboRegistro:string = "cboRegistro";
  cboRegistroDesplegado:string = "ocultar";
  cboGenero: string = "";

  experiencias:any[] = []
  estudios: any[] = []


  desplegarCombo() {
    this.cboRegistro="ocultar"
    this.cboRegistroDesplegado="cboRegistroDesplegado"
  }

  plegarCombo() {
    this.cboRegistroDesplegado="ocultar"
    this.cboRegistro="cboRegistro"
  }

  public habilitarCampos(){
    this.soloLectura = false;
    this.visible = "ocultar";
    this.invisible = "";
  }

  public bloquearCampos(){
    location.reload()
  }

  constructor(private curriculumService: CurriculumService, private usuarioService: UsuarioService, private router:Router, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      id: 0,
      nombre: '',
      email: '',
      telefono: '',
      ciudad: '',
      genero: '',
      perfil: '',
      curriculum_id: 0,
      curriculum: this.curriculum
    });
   }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  llenarDatosPerfil(){
    const usuario = this.getItem('perfil');
    this.cboGenero=usuario.genero

    this.formulario.patchValue({
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      ciudad: usuario.ciudad,
      genero: usuario.genero,
      perfil: usuario.perfil,
      curriculum_id: usuario.curriculum_id,
      curriculum: this.curriculum
    });
    console.log(this.formulario.value);
  }

  consultarCurriculum(){
    this.curriculumService.consultarEstudios(this.formulario.value.curriculum_id).subscribe({
      next: response =>{
        this.estudios=response;
      },
      error: error =>{
        alert(error);
      }
    })

    this.curriculumService.consultarExperiencias(this.formulario.value.curriculum_id).subscribe({
      next: response =>{
        this.experiencias=response;
      },
      error: error =>{
        alert(error);
      }
    })
  }

  eliminarUsuario(){
    this.usuarioService.eliminarUsuario(this.formulario.value.id).subscribe({
      next: result =>{
        alert(result);
        localStorage.removeItem('perfil');
        this.router.navigate(['home']);
      },
      error: error =>{
        alert(error);
      }
    })
  }

  actualizarUsuario(){
    this.formulario.value.genero=this.cboGenero;
    this.usuarioService.actualizarUsuario(this.formulario.value).subscribe({
      next: response => {
        alert(response);
        localStorage.setItem('perfil', JSON.stringify(this.formulario.value));
        location.reload();
      },
      error: error =>{
        alert(error);
      }
    });
  }

  ngOnInit(): void {
    this.llenarDatosPerfil();
    this.consultarCurriculum();
  }

}
