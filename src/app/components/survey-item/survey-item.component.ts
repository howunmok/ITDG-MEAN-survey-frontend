import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Survey } from 'src/app/models/survey.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css']
})
export class SurveyItemComponent implements OnInit {

  logged: Boolean;

  @Input() survey!: Survey;

  @Output() onDeleteSurvey = new EventEmitter<Survey>();
  constructor
  (
    private authService: AuthService
  )
  {
    this.logged =  this.authService.getIsAuth();
  }

  ngOnInit(): void
  {

  }

  onDelete(survey: Survey)
  {
    this.onDeleteSurvey.emit(survey);
  }

}
