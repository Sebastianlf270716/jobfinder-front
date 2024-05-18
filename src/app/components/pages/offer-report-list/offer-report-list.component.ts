import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-report-list',
  templateUrl: './offer-report-list.component.html',
  styleUrls: ['./offer-report-list.component.scss']
})
export class OfferReportListComponent implements OnInit {
  public redirigirOferta():void{
    window.location.href='/offer-consult';
  }

  public redirigirEstadisticaOferta():void{
    window.location.href='/offer-report';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
