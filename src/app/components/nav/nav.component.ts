import { Component, OnChanges, OnInit, AfterViewInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  // user: User = localStorage.getItem['userInfo'];
  logged: Boolean = false;
  private authListenerSubs: Subscription;
  displayName!: string | null;

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
    this.displayName = localStorage.getItem("displayName");
  }

  ngOnInit(): void
  {

  }

  logout()
  {
    this.authService.logoutUser();
  }

  ngOnDestroy()
  {
    this.authListenerSubs.unsubscribe();
  }

}
