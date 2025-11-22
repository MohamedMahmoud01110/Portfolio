import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {


modalType: 'front' | 'back' | null = null;

openModal(type: 'front' | 'back') {
  this.modalType = type;
}

closeModal() {
  this.modalType = null;
}

}
