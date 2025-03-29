import { Component } from '@angular/core';
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { QualificationComponent } from "./components/qualification/qualification.component";
import { ScrollTopComponent } from "./components/scroll-top/scroll-top.component";
import { ServicesComponent } from "./components/services/services.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { CertificatesComponent } from "./components/certificates/certificates.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, AboutComponent, SkillsComponent, ScrollTopComponent, ServicesComponent, QualificationComponent, CertificatesComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
