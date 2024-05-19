import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-search',
  templateUrl: './offer-search.component.html',
  styleUrls: ['./offer-search.component.scss']
})
export class OfferSearchComponent implements OnInit {
  cboFiltro: string = "cboFiltro";
  cboFiltroDesplegado: string = "ocultar";  
  nombreOferta:string = "Nombre";
  empresa:string = "Empresa";
  ciudad:string = "Ciudadd";
  cargo:string = "Cargo";
  salario:Number = 0;
  experiencia:Number = 0;
  funciones:string[] = [];

  public plegarCombo(){
    this.cboFiltro = "ocultar";
    this.cboFiltroDesplegado = "cboFiltroDesplegado";
  }

  public desplegarCombo(){
    this.cboFiltro = "cboFiltro";
    this.cboFiltroDesplegado = "ocultar";
  }

  public seleccionarOferta(e:any): void{
    this.nombreOferta = this.datos[e.target.id].nombre;
    this.empresa = this.datos[e.target.id].empresa;
    this.ciudad = this.datos[e.target.id].ciudad;
    this.cargo = this.datos[e.target.id].cargo;
    this.salario = this.datos[e.target.id].salario;
    this.experiencia = this.datos[e.target.id].experiencia;
    this.funciones = this.datos[e.target.id].funciones;
  }

  public prevenirEvento(e: Event): void {
    e.stopPropagation();
    const hijo = e.target as HTMLElement;
    const padre = hijo.parentElement;
    const id = Number(padre?.id)

    this.nombreOferta = this.datos[id].nombre;
    this.empresa = this.datos[id].empresa;
    this.ciudad = this.datos[id].ciudad;
    this.cargo = this.datos[id].cargo;
    this.salario = this.datos[id].salario;
    this.experiencia = this.datos[id].experiencia;
    this.funciones = this.datos[id].funciones;
  }

  public buscar():void{

  }

  constructor() { }

  ngOnInit(): void {
  }


  
  /*
  Datos de prueba
  */
 datos = [
  {
    id: 0,
    nombre: "Desarrollador frontend",
    empresa: "Postobón",
    ciudad: "Medellín",
    cargo: "Desarrolador",
    salario: 10000000,
    experiencia: 4,
    funciones:["programar", "barrer", "trapear"]
  },
  {
    id: 1,
    nombre: "Ingeniero civil",
    empresa: "Argos",
    ciudad: "Bogotá",
    cargo: "Ingeniero",
    salario: 20000000,
    experiencia: 5,
    funciones:["Levantar muros", "Hacer puentes", "Pintar casas"]
  },
  {
    id: 2,
    nombre: "Diseñador gráfico",
    empresa: "Diseños S.A",
    ciudad: "Cali",
    cargo: "Diseñador",
    salario: 10000,
    experiencia: 20,
    funciones:["Lavar baños", "Servir tintos"]
  }
 ]
}
