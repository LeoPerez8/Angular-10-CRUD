import { Product } from './../../components/product/product.model';
import { ProductService } from './../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lp-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  products: Product[];

  constructor(
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
    this.products = products
    console.log(products)})
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
