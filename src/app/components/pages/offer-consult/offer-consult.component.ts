import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-offer-consult',
  templateUrl: './offer-consult.component.html',
  styleUrls: ['./offer-consult.component.scss']
})
export class OfferConsultComponent implements OnInit {
  soloLectura: boolean = true;
  visible: string = "";
  invisible: string = "ocultar";
  icon_close: boolean = false;
  mensage: string = '';

  oferta: any = {};
  funciones: any[] = [];
  funcionesString: any[] = []; 
  formOffer: any = {
    id: null,
    nombre: '',
    cargo: '',
    salario: null,
    ciudad: '',
    anios_experiencia: null,
    funciones: [],
    usuario_id: null,
    tipo_perfil: ''
  };

  constructor(private ruta: Router, private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.ConsultarOferta();
  }

  public habilitarCampos() {
    this.soloLectura = false;
    this.visible = "ocultar";
    this.invisible = "";
    this.icon_close = true;
  }

  public bloquearCampos() {
    location.reload();
  }

  public redirigir() {
    this.ruta.navigate(["/candidates-list"]);
  }

  ConsultarOferta() {
    const id_oferta = this.getItem('id_oferta');
    this.ofertaService.obtenerOferta(id_oferta).subscribe({
      next: data => {
        this.oferta = data;
        this.funciones = this.oferta.funciones;
        this.formOffer = {
          id: this.oferta.id,
          nombre: this.oferta.nombre,
          cargo: this.oferta.cargo,
          salario: this.oferta.salario,
          ciudad: this.oferta.ciudad,
          anios_experiencia: this.oferta.anios_experiencia,
          funciones: this.funcionesString,
          usuario_id: null,
          tipo_perfil: ''
        };
      },
      error: error => {
        console.error(error);
      }
    });
  }

  eliminarOferta(){
    this.ofertaService.eliminarOferta(this.formOffer.id).subscribe({
      error: error => {
        console.error(error);
      }
    });

    window.location.href='/offer-list';
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  eliminarFuncion(i: number){
    this.funciones.splice(i, 1);
  }

  onSubmit() {
    if(this.validarFormulario()){
      this.ofertaService.actualizarOferta(this.formOffer).subscribe({
        next: data => {
          this.mensage = data;
          this.bloquearCampos();
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

  validarFormulario(){
    if(this.formOffer.nombre.length > 80){
      this.mensage = 'El nombre no puede tener mas de 80 caracteres'; 
      return false;
    }
    if(this.formOffer.cargo.length > 80){
      this.mensage = 'El cargo no puede tener mas de 80 caracteres';
      return false;
    }
    if(this.formOffer.ciudad.length > 30){
      this.mensage = 'La ciudad no puede tener mas de 30 caracteres'; 
      return false;
    }
    
    for (let i = 0; i < this.formOffer.funciones.length; i++){
      if(this.formOffer.funciones[i].descripcion.length > 150){
        this.mensage = 'La función no puede tener mas de 150 caracteres';
        return false;
      }
      this.funcionesString.push(this.formOffer.funciones[i].descripcion);
    }

    return true;
  }
}
