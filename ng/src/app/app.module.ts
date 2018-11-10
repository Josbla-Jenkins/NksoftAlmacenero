import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http";
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { getAuthServiceConfigs } from "./socialloginConfig";


import { AppComponent } from './app.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { RoutingModule } from './/routing.module';

import { LoginServices  } from './services/login.services';
import { HttpInterceptor } from './services/http-interceptor.services';
import { Configuration } from './app.constants';


@NgModule({
  declarations: [
    AppComponent,
    LoginBarComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    LoginServices,
    HttpInterceptor,
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
