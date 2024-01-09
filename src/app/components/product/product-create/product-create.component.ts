import { Component } from "@angular/core";
import { ProductService } from "../product.service";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-create",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.css",
})
export class ProductCreateComponent {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.showMessage("Operação executada com sucesso");
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
