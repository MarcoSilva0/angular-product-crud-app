import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-update",
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [ProductService],
  templateUrl: "./product-update.component.html",
  styleUrl: "./product-update.component.css",
})
export class ProductUpdateComponent {
  constructor(
    private productService: ProductService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  product: Product = {
    name: "",
    price: 0,
  };

  ngOnInit(): void {
    const idRoute = this.routeParam.snapshot.paramMap.get("id");
    this.productService.readById(idRoute ?? "0").subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso");
      this.router.navigate(["/products/read"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
