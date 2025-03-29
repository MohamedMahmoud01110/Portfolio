import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css'],
  imports: [CommonModule]
})
export class QualificationComponent {
  activeTab: string = 'education'; // default tab

  ngOnInit() {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      this.activeTab = savedTab;
    }
  }

  setTab(tab: string) {
    this.activeTab = tab;
    localStorage.setItem('activeTab', tab); // save tab in local storage
  }
}
