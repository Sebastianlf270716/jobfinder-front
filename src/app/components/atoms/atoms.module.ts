import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    TextComponent,
    NavbarItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TextComponent,
    NavbarItemComponent
  ]
})
export class AtomsModule { }
