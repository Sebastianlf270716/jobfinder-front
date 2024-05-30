import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-report-general',
  templateUrl: './report-general.component.html',
  styleUrls: ['./report-general.component.scss']
})
export class ReportGeneralComponent implements OnInit {

  listaOfertas: any[] = [];
  candidatos: number[] = []

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  consultarOfertas(){
    const usuario = this.getItem('perfil');
    console.log(usuario);
    if(usuario.tipo_perfil === 'Empleador'){
      this.ofertaService.obtenerOfertasEmpleador(usuario.id).subscribe({
        next: data => {
          this.listaOfertas = data;
          console.log(this.listaOfertas);
          this.consultarCandidatos()
        },
        error: error => {
          console.error(error);
        }
      });
    }
    if(usuario.tipo_perfil === 'Administrador'){
      this.ofertaService.obtenerOfertasAdministrador().subscribe({
        next: data => {
          this.listaOfertas = data;
          this.consultarCandidatos();
        },
        error: error => {
          console.error(error);
        }
      });
    }
  
  }

  consultarCandidatos(){
    this.ofertaService.consultarCandidatos(this.listaOfertas).subscribe({
      next: response =>{
        this.candidatos=response;
      },
      error: error =>{
        alert(error);
      }
    });
  }

  calcularPromedio(){
    let promedio = 0;
    console.log(this.candidatos)
    this.candidatos.forEach((e) => {
      promedio = promedio+e;
    });
    promedio = promedio/this.candidatos.length;
    return promedio;
  }

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.consultarOfertas();
  }

}
