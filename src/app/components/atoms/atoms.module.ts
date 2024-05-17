import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    TextComponent,
    NavbarItemComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TextComponent,
    NavbarItemComponent,
    ButtonComponent
  ]
})
export class AtomsModule { }
