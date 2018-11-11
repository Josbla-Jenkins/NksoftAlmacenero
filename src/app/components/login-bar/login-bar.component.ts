import { Component, OnInit } from '@angular/core';
import { LoginServices } from './../../providers/login.services';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  message: string = null;

  constructor(
    private loginServices : LoginServices, 
    private socialAuthService: AuthService,
    private router : Router) { }

  ngOnInit() {
  }

  onSignIn() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

  this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => { //on success
        //this will return user data from google. What you need is a user token which you will send it to the server
        let token = userData.idToken;
        this.googleLogin(token);
      }
    );
  }

  googleLogin(token : string){
    
    this.loginServices.googleLogin(token).subscribe(data =>{
      console.log('Respuesta server: ', data.token);
      localStorage.setItem('token', data.token);
      if(data.user != undefined){
        this.router.navigate(['/dashboard-ventas']);
      }
    }, err=>{
      console.log('Error en el servicio de autenticacion');
    });
  }
}
