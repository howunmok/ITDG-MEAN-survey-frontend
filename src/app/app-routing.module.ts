import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ActiveSurveyComponent } from './components/active-survey/active-survey.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { EditSurveyComponent } from './components/edit-survey/edit-survey.component';
import { AuthGuardService } from './services/authguard.serivce';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SurveyAnswerComponent } from './components/survey-answer/survey-answer.component';
import { SurveyResultComponent } from './components/survey-result/survey-result.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes =
[
  {path:'home',component:HomeComponent},
  {path:'signup',component: SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component: ContactComponent},
  {path:'activesurvey',component: ActiveSurveyComponent, canActivate: [AuthGuardService]},
  {path:'surveylist',component:SurveyListComponent},
  {path:"editsurvey/:id", component: EditSurveyComponent, canActivate: [AuthGuardService]},
  {path: "user", component: UserInfoComponent, canActivate: [AuthGuardService]},
  {path: "answersurvey/:id", component: SurveyAnswerComponent},
  {path: "resultsurvey/:id", component: SurveyResultComponent, canActivate: [AuthGuardService]},
  {path: "success", component: SuccessPageComponent},
  {path: "statistics", component: StatisticsComponent, canActivate: [AuthGuardService]},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
