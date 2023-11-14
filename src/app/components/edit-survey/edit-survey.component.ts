import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { Survey } from 'src/app/models/survey.model';
import { ApiSurveyService } from 'src/app/services/apisurvey.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {

  editSurveyForm!: FormGroup;
  questions!: FormArray;
  editedSurvey!: Survey;
  originalQuestions!: [];
  originalSurveyId!: string;
  answered = false;
  constructor
  (
    private apiService: ApiSurveyService,
    private router: ActivatedRoute,
    private route : Router
  )
  {}

  ngOnInit(): void
  {
    this.apiService.getOneSurvey(this.router.snapshot.params['id'])
                    .subscribe((result) =>
                    {
                      this.answered = result.answered;
                      let questions = result.questions;
                      this.editSurveyForm = new FormGroup
                      (
                        {
                          topic: new FormControl(result['topic'], Validators.required),
                          description: new FormControl(result['description'], Validators.required),
                          questions: new FormArray([])
                        }
                      )
                      for (let i = 0; i < questions.length; i++)
                      {
                        const control = new FormControl(questions[i], Validators.required);
                        (<FormArray>this.editSurveyForm.get("questions")).push(control);
                      }
                      this.originalQuestions = result.questions;
                      this.originalSurveyId = result.surveyId;
                    });
  };

  getControl()
  {
    return (<FormArray>this.editSurveyForm.get("questions")).controls;
  }

  onSubmit()
  {
    this.editedSurvey =
    {
      topic: this.editSurveyForm.value.topic,
      description: this.editSurveyForm.value.description,
      questions: this.editSurveyForm.value.questions,
      surveyId: this.originalSurveyId,
      answered: false,
      counter: 0
    }
    console.log(this.editedSurvey);
    this.apiService.putSurvey(this.editedSurvey);
    this.route.navigate(["success"]);
  }

  onCancel()
  {
    this.editSurveyForm.reset();
  }

  addQuestion()
  {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.editSurveyForm.get("questions")).push(control);
  }
}
