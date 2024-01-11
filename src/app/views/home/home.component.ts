import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { HeaderService } from "../../components/template/header/header.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatCardModule],
  providers: [HeaderService],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }
}
