import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/Producto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Producto[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }
}
