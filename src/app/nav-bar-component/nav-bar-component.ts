import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar-component',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './nav-bar-component.html',
  styleUrls: ['./nav-bar-component.css'],
})
export class NavBarComponent {
  menuOpen = false;
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
 
  scrollTo(section: string): void {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.menuOpen = false;
  }
}
