import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {


  toggleState: boolean = false;

  // Toggle modal visibility
  toggleModal() {
    this.toggleState = !this.toggleState;
  }
}
