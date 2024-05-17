import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { NavbarFooterComponent } from './navbar-footer/navbar-footer.component';




@NgModule({
  declarations: [
    NavbarFooterComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule 
  ],
  exports: [
    NavbarFooterComponent
  ]
})
export class TemplatesModule { }
