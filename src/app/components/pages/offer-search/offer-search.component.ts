import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-offer-search',
  templateUrl: './offer-search.component.html',
  styleUrls: ['./offer-search.component.scss']
})
export class OfferSearchComponent implements OnInit {
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

  public seleccionarOferta(e:any): void{
    this.ofertaSeleccionada = 'ofertaSeleccionada';
    this.sinSeleccionar = 'ocultar';

    console.log(this.datos);

    this.id = this.datos[e.target.id-1].id;
    this.nombreOferta = this.datos[e.target.id-1].nombre;
    this.empresa = this.datos[e.target.id-1].empresa;
    this.ciudad = this.datos[e.target.id-1].ciudad;
    this.cargo = this.datos[e.target.id-1].cargo;
    this.salario = this.datos[e.target.id-1].salario;
    this.experiencia = this.datos[e.target.id-1].anios_experiencia;
    this.funciones = this.datos[e.target.id-1].funciones;

    this.registrarVisita();

  }

  public prevenirEvento(e: Event): void {
    e.stopPropagation();
    this.ofertaSeleccionada = 'ofertaSeleccionada';
    this.sinSeleccionar = 'ocultar';
    const hijo = e.target as HTMLElement;
    const padre = hijo.parentElement;
    const id = Number(padre?.id)

    this.id = this.datos[id-1].id;
    this.nombreOferta = this.datos[id-1].nombre;
    this.empresa = this.datos[id-1].empresa;
    this.ciudad = this.datos[id-1].ciudad;
    this.cargo = this.datos[id-1].cargo;
    this.salario = this.datos[id-1].salario;
    this.experiencia = this.datos[id-1].anios_experiencia;
    this.funciones = this.datos[id-1].funciones;

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

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.consultarOfertas();
  }


 datos: any[] = []
}
