import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-consult',
  templateUrl: './offer-consult.component.html',
  styleUrls: ['./offer-consult.component.scss']
})
export class OfferConsultComponent implements OnInit {
  soloLectura: boolean = true;
  visible: string = "";
  invisible: string = "ocultar";

  id: Number = 0;
  nombre: string = "";
  cargo: string = "";
  salario: Number = 0;
  ciudad: string = "";
  experiencia: Number = 0;
  funciones: string[] = [];

  public habilitarCampos(){
    this.soloLectura = false;
    this.visible = "ocultar";
    this.invisible = "";
  }

  public bloquearCampos(){
    location.reload()
  }

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  public redirigir(){
    this.ruta.navigate(["/candidates-list"]);
  }

}
