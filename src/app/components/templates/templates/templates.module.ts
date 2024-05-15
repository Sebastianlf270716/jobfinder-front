import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms/atoms.module';
import { MoleculesModule } from '../../molecules/molecules/molecules.module';
import { OrganismsModule } from '../../organisms/organisms/organisms.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ]
})
export class TemplatesModule { }
