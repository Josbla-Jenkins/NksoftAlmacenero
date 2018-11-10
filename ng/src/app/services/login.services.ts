import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Configuration } from "../app.constants";
import { Response, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import { HttpInterceptor } from "./http-interceptor.services"

@Injectable()
export class LoginServices {

    constructor(private http: HttpInterceptor, private configuration: Configuration) {
    }

    public googleLogin(token : string) {
        let urlServicioLogin = this.obtenerUrlParametros(this.configuration.apiUrlLoginGoogle, token);
        let headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(urlServicioLogin, null, options).map((response: Response) => response.json());
      }

      obtenerUrlParametros(urlServicio: string, token: string): string {
        let param =`/?idToken=${token}`;
        return urlServicio + param;
      } 
}