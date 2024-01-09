import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductPageComponent } from "./views/product-page/product-page.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductPageComponent,
  },
  {
    path: "products/create",
    component: ProductCreateComponent,
  },
];
