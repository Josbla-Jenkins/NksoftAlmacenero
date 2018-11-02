import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../modelos/Usuario';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService {
    private userUrl = '/api/users';

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getUser(email: string): Observable<Usuario> {
        if (!email)
            return of();

        return this.http.get<Usuario>(`${this.userUrl}/?email=${email}`).pipe(
            tap(_ => this.log(`found user matching "${email}"`)),
            catchError(this.handleError<Usuario>('getUser'))
        );
    }

    //Metodos privados

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}