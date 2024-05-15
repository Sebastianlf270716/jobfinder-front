import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomsModule } from './components/atoms/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules/molecules.module';
import { OrganismsModule } from './components/organisms/organisms/organisms.module';
import { TemplatesModule } from './components/templates/templates/templates.module';
import { PagesModule } from './components/pages/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
