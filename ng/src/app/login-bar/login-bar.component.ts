import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/Usuario';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.services';



@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  user: Usuario = {
    id: null,
    email: null,
    password: null
  };

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  public comprobarUsuario(): void {
    if (this.user.email != null && this.user.email != '') {
      if (this.user.password != null && this.user.password != '') {
        this.loginService.getUser(this.user.email).subscribe(data => {
          let res: Usuario;
          if(data != null){
            res = data;
            if(this.user.password == data.password){
              this.user = data;
              this.router.navigateByUrl('/dashboard-ventas');
            }
            else
              console.log('incorrect password');
          } else{
            console.log('not found');
          }
        });
      } else
        console.log('Contraseña vacia');
    } else
      console.log('Usuario vacio');
  }
}
