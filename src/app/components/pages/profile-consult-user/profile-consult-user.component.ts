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

  constructor() { }

  ngOnInit(): void {
  }

}
