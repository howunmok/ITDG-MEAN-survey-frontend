import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit {

  username: string = "";
  password: string = "";
  email: string = "";
  displayName: string = "";
  repeatPassword: string = "";
  passwordWarning: string = "";
  @ViewChild("agreementRef", {static: true}) agreementCheck !: ElementRef;

  newUser: User = 
  {
    username: this.username,
    password: this.password,
    email: this.email,
    displayName: this.displayName
  }

  constructor
  (
    private authService: AuthService,
    private router: Router
  ) 
  {}

  ngOnInit(): void
  {

  }

   register()
   {
    console.log("Enter method")
    if(this.password === this.repeatPassword)
    {
      console.log("pass the condition")
      this.newUser =
      {
        username: this.username,
        password: this.password,
        email: this.email,
        displayName: this.displayName
      }
      console.log(this.newUser);
      this.authService.signupUser(this.newUser)
                        .subscribe(() =>
                        {
                          console.log("User registration success!");
                          console.log(`User Info: ${this.newUser}`);
                          this.router.navigate(['login'])
                        },
                        (error) =>
                        {
                          console.log(`Error: ${ error }`);
                        });
    }
    else
    {
      this.passwordWarning = "These two password must be same";
    }
    
   };
}
