import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-offer-search-user',
  templateUrl: './offer-search-user.component.html',
  styleUrls: ['./offer-search-user.component.scss']
})
export class OfferSearchUserComponent implements OnInit {
  cboFiltro: string = "cboFiltro";
  cboFiltroDesplegado: string = "ocultar";  
  id: Number=0;
  nombreOferta:string = "";
  empresa:string = "";
  ciudad:string = "";
  cargo:string = "";
  salario:Number = 0;
  experiencia:Number = 0;
  funciones:any[] = [];

  sinSeleccionar:string = 'sinSeleccionar';
  ofertaSeleccionada:string = 'ocultar'

  public plegarCombo(){
    this.cboFiltro = "ocultar";
    this.cboFiltroDesplegado = "cboFiltroDesplegado";
  }

  public desplegarCombo(){
    this.cboFiltro = "cboFiltro";
    this.cboFiltroDesplegado = "ocultar";
  }

  public seleccionarOferta(i: number): void{
    this.ofertaSeleccionada = 'ofertaSeleccionada';
    this.sinSeleccionar = 'ocultar';

    console.log(this.datos[i]);

    this.id = this.datos[i].id;
    this.nombreOferta = this.datos[i].nombre;
    this.empresa = this.datos[i].empresa;
    this.ciudad = this.datos[i].ciudad;
    this.cargo = this.datos[i].cargo;
    this.salario = this.datos[i].salario;
    this.experiencia = this.datos[i].anios_experiencia;
    this.funciones = this.datos[i].funciones;

    this.registrarVisita();

  }

  public prevenirEvento(e: Event, i: number): void {
    e.stopPropagation();
    this.ofertaSeleccionada = 'ofertaSeleccionada';
    this.sinSeleccionar = 'ocultar';
    const hijo = e.target as HTMLElement;
    const padre = hijo.parentElement;
    const id = Number(padre?.id);

    this.id = this.datos[i].id;
    this.nombreOferta = this.datos[i].nombre;
    this.empresa = this.datos[i].empresa;
    this.ciudad = this.datos[i].ciudad;
    this.cargo = this.datos[i].cargo;
    this.salario = this.datos[i].salario;
    this.experiencia = this.datos[i].anios_experiencia;
    this.funciones = this.datos[i].funciones;

    this.registrarVisita();
  }

  public buscar():void{

  }

  consultarOfertas(){
    this.ofertaService.consultarOfertas().subscribe({
      next: response => {
        this.datos=response;
        console.log(response);
      },
      error: error =>{
        alert(error);
      }
    });
  }

  registrarVisita(){
    this.ofertaService.registrarVisita(this.id).subscribe({
      error: error =>{
        alert(error);
      }
    });
  }

  getItem(key: string): any {
    const item = localStorage.getItem('perfil');
    return item ? JSON.parse(item) : null;
  }

  registrarCandidato(){
    const usuario = this.getItem('perfil');
    this.ofertaService.registrarCandidato(usuario.id, this.id).subscribe({
      next: response => {
        alert(response);
      },
      error: error => {
        alert(error);
      }
    })
  }

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.consultarOfertas();
  }


 datos: any[] = []
}
