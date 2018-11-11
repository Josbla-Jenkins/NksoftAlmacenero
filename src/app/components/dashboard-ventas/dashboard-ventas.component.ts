import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard-ventas',
  templateUrl: './dashboard-ventas.component.html',
  styleUrls: ['./dashboard-ventas.component.css']
})
export class DashboardVentasComponent implements OnInit {

  constructor(
    private socialAuthService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }
  }

  signOut() {
    localStorage.removeItem('token');
    this.socialAuthService.signOut();
    this.router.navigate(['/']);
  }

}
