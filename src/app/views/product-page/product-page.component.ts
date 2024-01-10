import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./product-page.component.html",
  styleUrl: "./product-page.component.css",
})
export class ProductPageComponent {
  constructor(private router: Router) {}

  navigateToProductCreate(): void {
    this.router.navigate(["products/create"]);
  }
}
