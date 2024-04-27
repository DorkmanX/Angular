import { Component, Input, Output, EventEmitter } from '@angular/core';

interface MenuItem {
  label: string;
  href?: string; // Optional link for menu item
  click?: () => void; // Optional function to execute on click
}

@Component({
  selector: 'menu-custom',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  @Input() items: MenuItem[] = []; // Array of menu items

  @Output() itemClicked = new EventEmitter<MenuItem>(); // Event emitter for item clicks

  onItemClick(item: MenuItem) {
    this.itemClicked.emit(item);
  }
}


