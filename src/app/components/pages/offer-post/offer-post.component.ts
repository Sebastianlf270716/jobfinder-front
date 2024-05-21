import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-post',
  templateUrl: './offer-post.component.html',
  styleUrls: ['./offer-post.component.scss']
})
export class OfferPostComponent implements OnInit {
  public redirigir(){
    this.ruta.navigate(["/home-employer"]);
  }

  constructor(private ruta: Router) { }
  

  ngOnInit(): void {
  }

}
