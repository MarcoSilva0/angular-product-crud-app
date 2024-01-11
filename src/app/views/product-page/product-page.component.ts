import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { HeaderService } from "../../components/template/header/header.service";
@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [MatButtonModule],
  providers: [HeaderService],
  templateUrl: "./product-page.component.html",
  styleUrl: "./product-page.component.css",
})
export class ProductPageComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  navigateToProductCreate(): void {
    this.router.navigate(["products/create"]);
  }

  navigateToProductRead(): void {
    this.router.navigate(["products/read"]);
  }
}
