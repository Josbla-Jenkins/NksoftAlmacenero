import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboarVendedorComponent } from './dashboar-vendedor/dashboar-vendedor.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboarVendedorComponent,
    LoginBarComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
