import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  public redirigir():void{
    window.location.href='/offer-consult';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
