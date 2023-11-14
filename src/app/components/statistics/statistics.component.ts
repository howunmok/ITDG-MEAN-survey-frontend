import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey.model';
import { ApiSurveyService } from 'src/app/services/apisurvey.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  surveys: Survey[] = [];

  constructor
  (
    private apiService: ApiSurveyService,
  ) { }

  ngOnInit(): void
  {
    this.apiService
      .getSurveys()
      .subscribe((surveys)=> this.surveys = surveys);
  }

}
