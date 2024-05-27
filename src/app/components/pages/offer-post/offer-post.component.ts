import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-offer-post',
  templateUrl: './offer-post.component.html',
  styleUrls: ['./offer-post.component.scss']
})
export class OfferPostComponent implements OnInit {

  @ViewChild('form', { static: false }) form!: NgForm;

  mensage: string = '';
  offerFuncion: string = '';
  funciones: string[] =  []

  formOffer = {
    nombre: '',
    cargo: '',
    salario: null,
    ciudad: '',
    anios_experiencia: null,
    funciones: this.funciones,
    usuario_id: null,
    tipo_perfil: ''
  }

  public redirigir(){
    this.ruta.navigate(["/home-employer"]);
  }

  constructor(private ruta: Router, private ofertaService: OfertaService) { }
  

  ngOnInit(): void {
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  agregarFuncion(){
    if(this.offerFuncion.length > 150){
      this.mensage = 'La función no puede tener mas de 150 caracteres';
      return;
    }
    this.funciones.push(this.offerFuncion);
    this.offerFuncion = '';
    this.mensage = '';
  }

  onSubmit(){
    const usuario = this.getItem('perfil');
    this.formOffer.usuario_id = usuario.id
    this.formOffer.tipo_perfil = usuario.tipo_perfil;
    console.log(this.formOffer);
    if(this.validarFormulario()){
      this.ofertaService.crearOferta(this.formOffer).subscribe({
        next: response => {
          this.mensage = response;
          this.funciones = [];
          this.formOffer = {nombre: '', cargo: '', salario: null, ciudad: '',
          anios_experiencia: null, funciones: this.funciones, usuario_id: null, tipo_perfil: ''}
          this.form.resetForm();
        },
        error: error => {
          this.mensage = error;
        }
      })
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
    return true;
  }

}
