import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { DashboardVentasComponent } from './components/dashboard-ventas/dashboard-ventas.component';

const routes: Routes = [
  { path: '', redirectTo: '/authenticate', pathMatch: 'full' },
  { path: 'authenticate', component: LoginBarComponent },
  { path: 'dashboard-ventas', component: DashboardVentasComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
