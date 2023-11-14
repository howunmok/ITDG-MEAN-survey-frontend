import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { BoundElementProperty } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders(
      {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatusListener = new Subject<boolean>();

  private url = "http://localhost:3201/api/auth";

  logged: boolean = false;
    token!: string;
    user!: User;
    constructor
    (
        private http: HttpClient
    ){}

    getIsAuth()
    {
        return this.logged;
     }
    getAuthStatusListener()
    {
        return this.authStatusListener.asObservable();
    }

    public isAuthenticated(): Boolean
    {
        let userData = localStorage.getItem('userInfo')
        console.log(userData);

        if (userData && JSON.parse(userData))
        {
            this.logged = true;
            return true;
        }
        else
        {
            this.logged = false;
            return false;
        }
    }



    //* Changed the parameter to any (Issue: Login & Register)
    public setUserInfo(user: any)
    {
        localStorage.setItem("userInfo", JSON.stringify(user));
    }

    clearStorage()
    {
        localStorage.clear();
    }

    // login
    public validate(username: string, password: string)
    {
        //*Removed the post <User> here (Issue: Login & Register)
        return this.http.post<{token: string, user: User}>(this.url + "/login",{"username": username, "password": password}, httpOptions)
                    .subscribe((response) =>
                    {
                        this.token = response.token;
                        this.user = response.user;
                        this.logged = true;
                        this.authStatusListener.next(true);
                        this.saveAuthData(this.token, this.user);
                    });

    }

    private saveAuthData(token: string, user: User)
    {
        localStorage.setItem("token", token);
        localStorage.setItem("username", user.username);
        localStorage.setItem("displayName", user.displayName);
        localStorage.setItem("email", user.email);

    }

    private clearAuthData()
    {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("displayName");
        localStorage.removeItem("email");
    }

    //register

    public signupUser(user: User)
    {
        return this.http.post(this.url + "/signup", user,httpOptions);
    }

    //get user info
    public getUserInfo(): Observable<User>
    {
        return this.http.get<User>(this.url + "/user", httpOptions)
    }

    public logoutUser()
    {
        this.logged = false;
        this.authStatusListener.next(false);
        this.clearAuthData();
        return this.http.get(this.url + "/logout", httpOptions)
    }
}
