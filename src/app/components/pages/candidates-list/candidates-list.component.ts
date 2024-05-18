import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {
  public redirigir():void{
    window.location.href='/candidate-info';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
