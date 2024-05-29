import { Component, OnInit } from '@angular/core';
import { EmpleadorService } from 'src/app/services/empleador.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-consult-employer',
  templateUrl: './profile-consult-employer.component.html',
  styleUrls: ['./profile-consult-employer.component.scss']
})
export class ProfileConsultEmployerComponent implements OnInit {
  formulario: FormGroup;

  soloLectura: boolean = true;
  visible: string = "";
  invisible: string = "ocultar";


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
    this.formulario.patchValue({
      id: empleador.id,
      nombre: empleador.nombre,
      ciudad: empleador.ciudad,
      actividad: empleador.actividad,
      email: empleador.email,
      descripcion: empleador.descripcion
    });
  }

  eliminarEmpleador(){
    this.empleadorService.eliminarEmpleador(this.formulario.value.id).subscribe({
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

  actualizarEmpleador(){
    console.log(this.formulario.value);

    this.empleadorService.actualizarEmpleador(this.formulario.value).subscribe({
      next: response =>{
        alert(response);
        localStorage.setItem('perfil', JSON.stringify(this.formulario.value));
        location.reload();
      },
      error: error =>{
        alert(error);
      }
    })
  }

  constructor(private empleadorService: EmpleadorService, private router:Router, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      id: 0,
      nombre: '',
      ciudad: '',
      actividad: '',
      email: '',
      descripcion: ''
    });
  }

  ngOnInit(): void {
    this.llenarDatos();
  }

}
