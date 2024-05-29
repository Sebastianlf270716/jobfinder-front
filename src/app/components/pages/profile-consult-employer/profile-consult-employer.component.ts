import { Component, OnInit } from '@angular/core';
import { EmpleadorService } from 'src/app/services/empleador.service';
import {Router} from '@angular/router';

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
    this.id = empleador.id;
    this.nombre = empleador.nombre;
    this.ciudad = empleador.ciudad;
    this.actividad = empleador.actividad;
    this.correo = empleador.email;
    this.descripcion = empleador.descripcion;
  }

  eliminarEmpleador(){
    this.empleadorService.eliminarEmpleador(this.id).subscribe({
      next: result =>{
        alert(result);
        localStorage.removeItem('perfil');
        this.router.navigate(["home"]);
      },
      error: error =>{
        alert(error);
      }
    })
  }

  constructor(private empleadorService: EmpleadorService, private router:Router) { }

  ngOnInit(): void {
    this.llenarDatos();
  }

}
