import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Producto } from '../modelos/Producto';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProductService {

    private productsUrl = '/api/products';

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    //Metodos de busqueda

    getProducts(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.productsUrl)
            .pipe(
                tap(products => this.log('fetched products')),
                catchError(this.handleError('getProducts', []))
            );
    }

    getProductNo404<Data>(barCode: number): Observable<Producto> {
        let url = `${this.productsUrl}/?barCode=${barCode}`;
        return this.http.get<Producto[]>(url)
            .pipe(
                map(products => products[0]),
                tap(p => {
                    let outcome = p ? `fetched` : `not found`;
                    this.log(`${outcome} product barCode = ${barCode}`);
                }),
                catchError(this.handleError<Producto>(`getProducto barCode=${barCode}`))
            );
    }

    getProduct(barCode: number): Observable<Producto> {
        const url = `${this.productsUrl}/${barCode}`;
        return this.http.get<Producto>(url).pipe(
            tap(_ => this.log(`fetched product barCode=${barCode}`)),
            catchError(this.handleError<Producto>(`getProduct barCode=${barCode}`))
        );
    }

    searchProducts(term: string): Observable<Producto[]> {
        if (!term.trim())
            return of([]);

        return this.http.get<Producto[]>(`${this.productsUrl}/?name=${term}`).pipe(
            tap(_ => this.log(`found products matching "${term}" `)),
            catchError(this.handleError<Producto[]>('searchProducts', []))
        );
    }

    //Metodos de almacenamiento

    addProduct(product: Producto): Observable<Producto> {
        return this.http.post<Producto>(this.productsUrl, product, httpOptions).pipe(
            tap((product:Producto)=>this.log(`added product w/ ${product.productName}, barcode=${product.barCode}`)),
            catchError(this.handleError<Producto>('addProduct'))
        );
    }

    deleteProduct(product: Producto | number): Observable<Producto>{
        let barCode = typeof product ==='number' ? product: product.barCode;
        let url = `${this.productsUrl}/${barCode}`;

        return this.http.delete<Producto>(url,httpOptions).pipe(
            tap(_=> this.log(`deleted product barCode=${barCode}`)),
            catchError(this.handleError<Producto>('deleteProduct'))
        );
    }

    updateProduct(product:Producto): Observable<any>{
        return this.http.put(this.productsUrl, product, httpOptions).pipe(
            tap(_=>this.log(`updated product barcode=${product.barCode}, name=${product.productName}`)),
            catchError(this.handleError<Producto>('updateProduct'))
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