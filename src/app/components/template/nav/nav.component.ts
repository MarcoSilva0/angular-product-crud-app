import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { ProductPageComponent } from "../../../views/product-page/product-page.component";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    ProductPageComponent,
  ],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.css",
})
export class NavComponent {}
