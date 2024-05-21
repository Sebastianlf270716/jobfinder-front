import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.scss']
})
export class CandidateInfoComponent implements OnInit {
  nombre: string = "";
  correo: string = "";
  telefono: string = "";
  ciudad: string = "";
  genenro: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
