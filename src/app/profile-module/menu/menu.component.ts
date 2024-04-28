import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service


interface MenuItem {
  label: string;
  path: string; // Path for routing (instead of href)
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  @Input() items: MenuItem[] = []; // Array of menu items

  constructor(private router: Router) {} // Inject the Router service

  onMenuItemClick(item: MenuItem) {
    this.router.navigate([item.path]); // Navigate to the specified path
  }
}
