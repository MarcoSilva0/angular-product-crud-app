import { Component, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HttpClientModule } from "@angular/common/http";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localePt);

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatToolbarModule,
    FooterComponent,
    NavComponent,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  templateUrl: "app.component.html",
})
export class AppComponent {}
