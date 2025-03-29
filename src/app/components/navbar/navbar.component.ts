import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule],
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen = false;
  isDarkTheme = false;
  private resizeObserver: ResizeObserver;

  constructor() {
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




  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }




  // changeTheme() {
  //   this.isDarkTheme = !this.isDarkTheme;
  //   this.applyTheme();
  //   // حفظ التفضيل في localStorage
  //   localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  // }

  // private applyTheme() {
  //   if (this.isDarkTheme) {
  //     // تطبيق الثيم الداكن
  //     document.documentElement.style.setProperty('--color-main', '#526ECC');
  //     document.documentElement.style.setProperty('--color-secondary', '#A1A8B9');
  //     document.documentElement.style.setProperty('--color-btn', '#5779E0');
  //     document.documentElement.style.setProperty('--color-nav', '#1a1a1a');

  //     document.documentElement.style.setProperty('--color-btn-hvr', '#4A67C2');
  //     document.documentElement.style.setProperty('--background-color', '#1a1a1a');
  //     document.documentElement.style.setProperty('--text-color', '#ffffff');
  //   } else {
  //     // تطبيق الثيم الفاتح
  //     document.documentElement.style.setProperty('--color-main', '#526ECC');
  //     document.documentElement.style.setProperty('--color-secondary', '#6B7280');
  //     document.documentElement.style.setProperty('--color-btn', '#5779E0');
  //     document.documentElement.style.setProperty('--color-btn-hvr', '#5873CE');
  //     document.documentElement.style.setProperty('--color-nav', '#ffffff');

  //     document.documentElement.style.setProperty('--background-color', '#ffffff');
  //     document.documentElement.style.setProperty('--text-color', '#1a1a1a');
  //   }
  // }

  // ngOnInit() {
  //   // تحميل الثيم المحفوظ عند بدء التطبيق
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     this.isDarkTheme = savedTheme === 'dark';
  //     this.applyTheme();
  //   }
  // }
}


