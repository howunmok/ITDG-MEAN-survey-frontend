import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  username: string | null = "";
  email: string | null = "";
  displayName: string | null = "";
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.email = localStorage.getItem("email");
    this.displayName = localStorage.getItem("displayName");
  }

}
