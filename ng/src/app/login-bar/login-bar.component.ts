import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/Usuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  usuario : Usuario = {
    email: null,
    password: null
  };

  constructor(
    private router: Router
    ){}

  ngOnInit() {
  }

  public comprobarUsuario(): void{
    if(this.usuario.email != null && this.usuario.email != ''){
      if(this.usuario.password != null && this.usuario.password != ''){
        if(this.usuario.email == 'jose@mail.com' && this.usuario.password == '123456'){
          this.router.navigateByUrl('/dashboard-ventas');
        }else
          console.log('mal');
      }else
        console.log('Contraseña vacia');
    }else
      console.log('Usuario vacio');
  }
}
