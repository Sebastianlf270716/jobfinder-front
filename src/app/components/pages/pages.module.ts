import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesModule } from '../templates/templates.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { RegisterOptionComponent } from './register-option/register-option.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterEmployerComponent } from './register-employer/register-employer.component';
import { LoginComponent } from './login/login.component';
import { HomeEmployerComponent } from './home-employer/home-employer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferConsultComponent } from './offer-consult/offer-consult.component';
import { OfferReportComponent } from './offer-report/offer-report.component';
import { OfferReportListComponent } from './offer-report-list/offer-report-list.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { OfferSearchComponent } from './offer-search/offer-search.component';
import { OfferPostComponent } from './offer-post/offer-post.component';
import { ProfileConsultEmployerComponent } from './profile-consult-employer/profile-consult-employer.component';
import { ReportDatesChoiceComponent } from './report-dates-choice/report-dates-choice.component';
import { ReportDatesComponent } from './report-dates/report-dates.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ReportGeneralComponent } from './report-general/report-general.component';
import { ProfileConsultUserComponent } from './profile-consult-user/profile-consult-user.component';
import { OfferSearchUserComponent } from './offer-search-user/offer-search-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeMainComponent,
    RegisterOptionComponent,
    RegisterUserComponent,
    RegisterEmployerComponent,
    LoginComponent,
    HomeEmployerComponent,
    OfferListComponent,
    OfferConsultComponent,
    OfferReportComponent,
    OfferReportListComponent,
    CandidatesListComponent,
    CandidateInfoComponent,
    OfferSearchComponent,
    OfferPostComponent,
    ProfileConsultEmployerComponent,
    ProfileConsultUserComponent,
    ReportGeneralComponent,
    ReportDatesChoiceComponent,
    ReportDatesComponent,
    HomeAdminComponent,
    HomeUserComponent,
    OfferSearchUserComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    FormsModule
  ],
  exports: [
    HomeMainComponent
  ]
})
export class PagesModule { }
