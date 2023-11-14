import { Component } from '@angular/core';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-survey';
  loggedStatus!: Boolean
  onLoggedStatus(boolean: Boolean)
  {
    this.loggedStatus = boolean;
    console.log(`app - this.loggedStatus = ${this.loggedStatus}`)
  }
}
