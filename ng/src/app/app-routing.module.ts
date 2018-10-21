import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { DashboarVendedorComponent} from './dashboar-vendedor/dashboar-vendedor.component'

const routes:Routes = [
  { 
    path: '', 
    redirectTo: '/ventas', 
    pathMatch: 'full' 
  },
  {
    path:'ventas', 
    component: LoginBarComponent
  },
  { 
    path: 'dashboard-ventas', 
    component: DashboarVendedorComponent
  },
];

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
