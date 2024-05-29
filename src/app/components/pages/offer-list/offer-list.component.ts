import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  listaOfertas: any[] = [];

  public redirigir(id: number):void{
    localStorage.setItem('id_oferta', JSON.stringify(id));
    window.location.href='/offer-consult';
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
