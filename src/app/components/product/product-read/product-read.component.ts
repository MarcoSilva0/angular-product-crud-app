import { Component } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-product-read",
  standalone: true,
  imports: [MatButtonModule, NgForOf],
  providers: [ProductService],
  templateUrl: "./product-read.component.html",
  styleUrl: "./product-read.component.css",
})
export class ProductReadComponent {
  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  navigateToProductCreate(): void {
    this.router.navigate(["products/create"]);
  }
}