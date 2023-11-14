import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Survey } from '../models/survey.model';
import { Answer } from '../models/answer.model';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiSurveyService {
  private url = "http://localhost:3201/api/";

  constructor
  (
    private http: HttpClient,
    private router : Router
  ) { }

  getSurveys(): Observable<Survey[]>
  {
    console.log("getSurveys");
    return this.http.get<Survey[]>(this.url + "get-surveys");
  }

  getOneSurvey(id: string): Observable<Survey>
  {
    return this.http.get<Survey>(this.url + "get-survey/" + id);
  }

  postSurvey(newSurvey: Survey)
  {
    this.http.post(this.url + "post-survey", newSurvey, httpOptions)
              .subscribe((res)=>
              {
                console.log(res);
              });
  }

  putSurvey(editedSurvey: Survey)
  {
    return this.http.put<{msg : string, survey: Survey}>(this.url + "edit-survey/" + editedSurvey.surveyId, editedSurvey)
                      .subscribe((res)=>
                      {
                        if(res.msg = "ERROR - THE SURVEY HAS ANSWERED")
                        {
                          this.router.navigate(["404"]);
                        }
                      });
  }

  deleteSurvey(survey: Survey): Observable<Survey>
  {
    return this.http.delete<Survey>(this.url  + "delete-survey/" + survey.surveyId );
  }

  postAnswer(answer: Answer)
  {
    this.http.post(this.url + "post-answer", answer, httpOptions)
              .subscribe((res)=>
              {
                console.log(res);
              });
  }

  getAnswerById(id: string): Observable<Answer[]>
  {
    return this.http.get<Answer[]>(this.url + "get-answer/" + id);
  }
}
