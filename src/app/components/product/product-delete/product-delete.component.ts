import { Component } from "@angular/core";
import { ProductService } from "../product.service";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-product-delete",
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [ProductService],
  templateUrl: "./product-delete.component.html",
  styleUrl: "./product-delete.component.css",
})
export class ProductDeleteComponent {
  constructor(
    private productService: ProductService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  product: Product = {
    id: 0,
    name: "",
    price: 0,
  };

  ngOnInit(): void {
    const idRoute = this.routeParam.snapshot.paramMap.get("id");
    if (idRoute !== null) {
      this.productService.readById(idRoute).subscribe((product) => {
        this.product = product;
      });
    } else {
      this.router.navigate(["/products"]);
    }
  }

  deleteProduct(): void {
    if (this.product && this.product.id !== undefined) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage("Produto excluído com sucesso");
        this.router.navigate(["/products/read"]);
      });
    } else {
      this.productService.showMessage("Algo deu errado, tente novamente");
    }
  }

  cancel(): void {
    this.router.navigate(["/products/read"]);
  }
}
