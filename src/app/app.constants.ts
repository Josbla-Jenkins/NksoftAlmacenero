import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {

    //public servidorUrl = "https://guarded-plateau-41354.herokuapp.com"; 
    public servidorUrl = "http://localhost:4300";

    public apiUrlLoginGoogle = `${this.servidorUrl}/google`;
}