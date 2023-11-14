import { Component, OnInit } from '@angular/core';
import { ApiSurveyService } from 'src/app/services/apisurvey.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Answer } from 'src/app/models/answer.model';
import { Survey } from 'src/app/models/survey.model';

@Component({
  selector: 'app-survey-answer',
  templateUrl: './survey-answer.component.html',
  styleUrls: ['./survey-answer.component.css']
})
export class SurveyAnswerComponent implements OnInit {

  answerForm !: FormGroup;
  answer!: Answer;
  survey!: Survey;
  constructor
  (
    private apiService: ApiSurveyService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void
  {
    this.apiService.getOneSurvey(this.router.snapshot.params['id'])
      .subscribe((result) =>
      {
        this.survey = result;
        this.answerForm = new FormGroup
        (
          {
            answers: new FormArray([])
          }
        );
        for (let i = 0; i < result.questions.length; i++)
        {
          const control = new FormControl(null, Validators.required);
          (<FormArray>this.answerForm.get("answers")).push(control);
        }
      })
  }

  getControl()
  {
    return (<FormArray>this.answerForm.get("answers")).controls;
  }

  onSubmit()
  {
    this.answer =
    {
      surveyId: this.survey.surveyId,
      answers: this.answerForm.value.answers
    }
    this.apiService.postAnswer(this.answer);
    this.route.navigate(['success']);
  }
}
