import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './components/pages/home-main/home-main.component';
import { RegisterOptionComponent } from './components/pages/register-option/register-option.component';
import { RegisterEmployerComponent } from './components/pages/register-employer/register-employer.component';
import { RegisterUserComponent } from './components/pages/register-user/register-user.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeEmployerComponent } from './components/pages/home-employer/home-employer.component';
import { OfferConsultComponent } from './components/pages/offer-consult/offer-consult.component';
import { OfferListComponent } from './components/pages/offer-list/offer-list.component';
import { OfferReportComponent } from './components/pages/offer-report/offer-report.component';
import { OfferReportListComponent } from './components/pages/offer-report-list/offer-report-list.component';
import { CandidatesListComponent } from './components/pages/candidates-list/candidates-list.component';
import { CandidateInfoComponent } from './components/pages/candidate-info/candidate-info.component';
import { OfferSearchComponent } from './components/pages/offer-search/offer-search.component';
import { OfferPostComponent } from './components/pages/offer-post/offer-post.component';
import { ProfileConsultEmployerComponent } from './components/pages/profile-consult-employer/profile-consult-employer.component';
import { ProfileConsultUserComponent } from './components/pages/profile-consult-user/profile-consult-user.component';
import { ReportGeneralComponent } from './components/pages/report-general/report-general.component';
import { ReportDatesChoiceComponent } from './components/pages/report-dates-choice/report-dates-choice.component';
import { HomeAdminComponent } from './components/pages/home-admin/home-admin.component';
import { ReportDatesComponent } from './components/pages/report-dates/report-dates.component';
import { HomeUserComponent } from './components/pages/home-user/home-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeMainComponent},
  {path: 'register-option', component: RegisterOptionComponent},
  {path: 'register-employer', component: RegisterEmployerComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home-employer', component: HomeEmployerComponent},
  {path: 'offer-consult', component: OfferConsultComponent},
  {path: 'offer-list', component: OfferListComponent},
  {path: 'offer-report', component: OfferReportComponent},
  {path: 'offer-report-list', component: OfferReportListComponent},
  {path: 'candidates-list', component: CandidatesListComponent},
  {path: 'candidate-info', component: CandidateInfoComponent},
  {path: 'offer-search', component: OfferSearchComponent},
  {path: 'offer-post', component: OfferPostComponent},
  {path: 'profile-consult-employer', component: ProfileConsultEmployerComponent},
  {path: 'profile-consult-user', component: ProfileConsultUserComponent},
  {path: 'report-general', component: ReportGeneralComponent},
  {path: 'report-dates-choice', component: ReportDatesChoiceComponent},
  {path: 'report-dates', component: ReportDatesComponent},
  {path: 'home-admin', component: HomeAdminComponent},
  {path: 'home-user', component: HomeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
