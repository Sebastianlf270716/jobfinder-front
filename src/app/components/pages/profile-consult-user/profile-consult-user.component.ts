import { CurriculumService } from 'src/app/services/curriculum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-consult-user',
  templateUrl: './profile-consult-user.component.html',
  styleUrls: ['./profile-consult-user.component.scss']
})
export class ProfileConsultUserComponent implements OnInit {
  nombre: string = "";
  correo: string = "";
  telefono: string = "";
  ciudad: string = "";
  genero: string = "";
  cboGenero: string = "Género";
  perfil: string = "";
  estudios: any[]=[];
  experiencias: any[]=[];
  idCurriculum: Number = 0;

  soloLectura: boolean = true;
  visible: string = "";
  invisible: string = "ocultar";
  cboRegistro:string = "cboRegistro";
  cboRegistroDesplegado:string = "ocultar";

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

  constructor(private curriculumService: CurriculumService) { }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  llenarDatosPerfil(){
    const usuario = this.getItem('perfil');
    this.nombre = usuario.nombre;
    this.ciudad = usuario.ciudad;
    this.telefono = usuario.telefono;
    this.correo = usuario.email;
    this.genero = usuario.genero;
    this.idCurriculum = usuario.curriculum_id
  }

  consultarCurriculum(){
    this.curriculumService.consultarEstudios(this.idCurriculum).subscribe({
      next: response =>{
        console.log(response);
        this.estudios=response;
      },
      error: error =>{
        alert(error);
      }
    })

    this.curriculumService.consultarExperiencias(this.idCurriculum).subscribe({
      next: response =>{
        console.log(response);
        this.experiencias=response;
      },
      error: error =>{
        alert(error);
      }
    })
  }

  ngOnInit(): void {
    this.llenarDatosPerfil();
    this.consultarCurriculum();
  }

}
