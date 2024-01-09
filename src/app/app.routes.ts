import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductPageComponent } from "./views/product-page/product-page.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductPageComponent,
  },
];
