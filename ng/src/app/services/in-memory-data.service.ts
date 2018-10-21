import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Producto } from '../modelos/Producto';
import { Usuario } from '../modelos/Usuario';

export class InMemoryDataService implements InMemoryDbService{

    createDb(){
        const products = [
            { id: 10, productName: 'Pan Ayulla/Marraqueta/Integral granel', barCode: null, price: 1200, pieces: null, weight: 1000},
            { id: 11, productName: 'Arrollado artesanal ', barCode: null, price: 6500, pieces: null, weight: 1000 },
            { id: 12, productName: 'Pate ternera San jorge', barCode: 7087265056444, price: 400, pieces: 1, weight: 125 },
            { id: 13, productName: 'Moffin chispas de chocolate', barCode: null, price: 800, pieces: 1, weight: null },
            { id: 14, productName: 'Coca-cola Zero 3 litros retornable', barCode: 7087265056443, price: 1200, pieces: 1, weight: null }

        ];

        const users = [
            {id:1000, email: 'jose@mail.com', password: '123456'},
            {id:1001, email: 'sergio@mail.com', password: '123456'},
            {id:1002, email: 'gabriela@mail.com', password: '123456'},
        ]

       return { products, users };
    }

    genProductId(products: Producto[]):number{
        return products.length > 0 ? Math.max(...products.map(product=> product.id))+1 : 10;
    }

    genUserId(users: Usuario[]):number{
        return users.length >0 ? Math.max(...users.map(user => user.id))+1 : 1000;
    }
}