import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  username: string = "";
  password: string = "";

  @Output() loggedStatus = new EventEmitter<Boolean>();
  constructor
  (
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login()
  {
    console.log(this.username + "--- " + this.password);
    this.authService.validate(this.username, this.password);
    this.router.navigate([""]);
    // .subscribe((user) => {
    //             this.authService.setUserInfo(user)
    //                     this.loggedStatus.emit(true)
    //                     this.router.navigate(["activesurvey"])
    //                   },
    //                   (error) =>
    //                   {
    //                     console.log("Error of Login");
    //                     console.log(error);
    //                   })

  };
//*Removed this (Issue: Login & Register)
  // getUserInfo()
  // {
  //   this.authService.getUserInfo()
  //                     .subscribe((user) =>
  //                     {
  //                       return this.user = user;
  //                     });
  // };
}
