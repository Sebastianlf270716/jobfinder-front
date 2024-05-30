import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-offer-report',
  templateUrl: './offer-report.component.html',
  styleUrls: ['./offer-report.component.scss']
})
export class OfferReportComponent implements OnInit {

  generos = {
    masculino: null,
    femenino: null,
    otro: null
  }

  estadisticas = {
    nombre: '',
    candidatos: null,
    visualizaciones: null,
    generos: this.generos,
    pVsV: null
  }

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    const id_oferta = this.getItem('id_oferta');
    this.ofertaService.estadisticasOferta(id_oferta).subscribe({
      next: data => {

        this.generos = {
          masculino: data.masculino,
          femenino: data.femenino,
          otro: data.otro
        }

        this.estadisticas = {
          nombre: data.nombre,
          candidatos: data.candidatos,
          visualizaciones: data.visualizaciones,
          generos: this.generos,
          pVsV: data.pVsV
        }
      },
      error: error => {
        console.error(error);
      }
    });
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

}
