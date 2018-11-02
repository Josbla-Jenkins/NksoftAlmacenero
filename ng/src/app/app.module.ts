import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardVendedorComponent } from './dashboard-vendedor/dashboard-vendedor.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { TopNavBarComponent } from './common/top-nav-bar/top-nav-bar.component';
import { ProductListComponent } from './dashboard-vendedor/components/product-list/product-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardVendedorComponent,
    LoginBarComponent,
    TopNavBarComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
