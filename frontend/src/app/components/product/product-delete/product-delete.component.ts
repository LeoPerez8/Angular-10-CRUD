import { ProductService } from './../product.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lp-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }


  cancel(): void {
    this.router.navigate(["/products"])
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!")
      this.router.navigate(["/products"])
    })
  }
}
