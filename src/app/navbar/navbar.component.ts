import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: firebase.User;
  
  constructor(private authSer: AuthService) {
    this.authSer.user.subscribe(user => this.user = user)
   }

  logout(){
    this.authSer.logout();
  }

}
