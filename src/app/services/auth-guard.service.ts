import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authSer : AuthService, private router : Router) { }

  canActivate(){
    return this.authSer.user.pipe(map(user => {
      if(user){ return true;}
      else{
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }
}
