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

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  llenarDatos(){
    const empleador = this.getItem('perfil');
    console.log(empleador);
    this.nombre = empleador.nombre;
    this.ciudad = empleador.ciudad;
    this.actividad = empleador.actividad;
    this.correo = empleador.email;
    this.descripcion = empleador.descripcion;
  }

  constructor() { }

  ngOnInit(): void {
    this.llenarDatos();
  }

}
