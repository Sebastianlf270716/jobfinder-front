import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-consult-employer',
  templateUrl: './profile-consult-employer.component.html',
  styleUrls: ['./profile-consult-employer.component.scss']
})
export class ProfileConsultEmployerComponent implements OnInit {
  soloLectura: boolean = true;
  visible: string = "";
  invisible: string = "ocultar";

  id: Number = 0;
  nombre: string = "";
  ciudad: string = "";
  actividad: string = "";
  correo: string = "";
  descripcion: string = "";

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
