import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// user: User = localStorage.getItem['userInfo'];
logged: Boolean = false;
private authListenerSubs: Subscription;

constructor
(
  private authService: AuthService,
  private router: Router
)
{
  this.authListenerSubs = this.authService
  .getAuthStatusListener()
  .subscribe(isAuthenticated => {
    this.logged = isAuthenticated;
  });
}

ngOnInit(): void
{
  
}

}