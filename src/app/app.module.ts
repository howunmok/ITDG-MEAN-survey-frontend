import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { SurveyItemComponent } from './components/survey-item/survey-item.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth/auth.component';
import { ActiveSurveyComponent } from './components/active-survey/active-survey.component';
import { HomeComponent } from './components/home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { EditSurveyComponent } from './components/edit-survey/edit-survey.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SurveyAnswerComponent } from './components/survey-answer/survey-answer.component';
import { SurveyResultComponent } from './components/survey-result/survey-result.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    SurveyItemComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    ActiveSurveyComponent,
    HomeComponent,
    ContactComponent,
    EditSurveyComponent,
    UserInfoComponent,
    SurveyAnswerComponent,
    SurveyResultComponent,
    SuccessPageComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
