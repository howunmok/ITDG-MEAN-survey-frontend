import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/models/answer.model';
import { Survey } from 'src/app/models/survey.model';
import { ApiSurveyService } from 'src/app/services/apisurvey.service';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent implements OnInit {

  survey!: Survey;
  answers!: Answer[];
  constructor
  (
    private apiService: ApiSurveyService,
    private router: ActivatedRoute,

  ) { }

  ngOnInit(): void
  {
    this.apiService.getAnswerById(this.router.snapshot.params["id"])
      .subscribe((result) =>
      {
        console.log(result);
        this.answers = result;
      })

    this.apiService.getOneSurvey(this.router.snapshot.params["id"])
      .subscribe((result) =>
      {
        console.log(result);
        this.survey = result;
      })
  }

  printResult()
  {
    window.print();
  }

}
