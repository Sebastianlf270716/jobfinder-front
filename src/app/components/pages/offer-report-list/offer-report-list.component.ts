import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-offer-report-list',
  templateUrl: './offer-report-list.component.html',
  styleUrls: ['./offer-report-list.component.scss']
})
export class OfferReportListComponent implements OnInit {

  listaOfertas: any = [];


  public redirigirOferta(id: number):void{
    localStorage.setItem('id_oferta', JSON.stringify(id));
    window.location.href='/offer-consult';
  }

  public redirigirEstadisticaOferta():void{
    window.location.href='/offer-report';
  }

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    const usuario = this.getItem('perfil');
    if(usuario.tipo_perfil === 'Empleador'){
      this.ofertaService.obtenerOfertasEmpleador(usuario.id).subscribe({
        next: data => {
          this.listaOfertas = data;
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
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

}
