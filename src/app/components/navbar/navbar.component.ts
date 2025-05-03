import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule],
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen = false;
  isDarkMode: boolean = false;
  private resizeObserver: ResizeObserver;
  ngOnInit(): void {
    this.isDarkMode = false; // Default to light mode


  }
  constructor(private themeService: ThemeService) {
    this.checkScreenSize();
    this.resizeObserver = new ResizeObserver(() => this.checkScreenSize());
    this.resizeObserver.observe(document.body);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  private checkScreenSize(): void {
    if (window.innerWidth >= 768) { // md breakpoint
      this.closeMenu();
    }
  }


  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const newTheme = this.isDarkMode ? 'dark' : 'light';
    this.themeService.setTheme(newTheme); // Update the theme
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }

}


