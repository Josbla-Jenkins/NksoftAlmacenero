import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//social login (google sign-in)
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  AuthService
} from "angular5-social-login";
import { getAuthServiceConfigs } from "./socialloginConfig";

//app components and services
import { LoginServices  } from './providers/login.services';
import { HttpInterceptor } from './providers/http-interceptor.services';
import { Configuration } from './app.constants';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { DashboardVentasComponent } from './components/dashboard-ventas/dashboard-ventas.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    LoginBarComponent,
    DashboardVentasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ElectronService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AuthService,
    LoginServices,
    HttpInterceptor,
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
