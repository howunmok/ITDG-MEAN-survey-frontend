import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Survey } from 'src/app/models/survey.model';
import { ApiSurveyService } from 'src/app/services/apisurvey.service';

@Component({
  selector: 'app-active-survey',
  templateUrl: './active-survey.component.html',
  styleUrls: ['./active-survey.component.css']
})
export class ActiveSurveyComponent implements OnInit {

  surveyForm!: FormGroup;
  newSurvey!: Survey

  constructor
  (
    private apiService: ApiSurveyService,
    private router : Router
  ) { }

  ngOnInit(): void
  {
    this.surveyForm = new FormGroup
    (
      {
        topic: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        questions: new FormArray([]),
      }
    );
  }

  onSubmit()
  {
    this.newSurvey =
    {
      topic: this.surveyForm.value.topic,
      description: this.surveyForm.value.description,
      questions: this.surveyForm.value.questions,
      surveyId: this.makeid(10),
      answered: false,
      counter: 0
    }
    console.log("onSubmit");
    console.log(this.newSurvey);
    this.apiService.postSurvey(this.newSurvey);
    this.router.navigate(["success"]);
  }

  addQuestion()
  {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.surveyForm.get("questions")).push(control);
  }

  getControl()
  {
    return (<FormArray>this.surveyForm.get("questions")).controls;
  }

  onCancel()
  {
    this.surveyForm.reset();
  }

  makeid(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
