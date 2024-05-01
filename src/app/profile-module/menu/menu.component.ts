import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


interface MenuItem {
  label: string;
  path: string;
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  @Input() items: MenuItem[] = [];

  constructor(private router: Router) {}

  onMenuItemClick(item: MenuItem) {
    this.router.navigate([item.path]);
  }
}
