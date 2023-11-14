import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate
{

  constructor
  (
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate()
    {
        const isAuth = this.authService.getIsAuth();
        console.log(`isAuth: ${isAuth}`)
        if(!isAuth)
        {
            this.router.navigate(["/login"])
        }
        return isAuth;
    }
}
