import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-option',
  templateUrl: './register-option.component.html',
  styleUrls: ['./register-option.component.scss']
})
export class RegisterOptionComponent implements OnInit {
  cboRegistro:string = "cboRegistro";
  cboRegistroDesplegado:string = "ocultar";

  constructor() { }

  ngOnInit(): void {
  }

  desplegarCombo() {
    this.cboRegistro="ocultar"
    this.cboRegistroDesplegado="cboRegistroDesplegado"
  }

  plegarCombo() {
    this.cboRegistroDesplegado="ocultar"
    this.cboRegistro="cboRegistro"
  }

}
