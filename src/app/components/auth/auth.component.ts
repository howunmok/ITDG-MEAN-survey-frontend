import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public user!: User
  public errorMessage!: string

  constructor
  (
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  authenticate (form: NgForm): void 
  {
    if (form.valid) {
      this.router.navigateByUrl('admin/main')
    } else {
      this.errorMessage = 'Form Data Invalid'
    }
  }
}
