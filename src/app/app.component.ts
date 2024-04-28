import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  path: string; // Path for routing (instead of href)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  menuItems: MenuItem[] = [
    { label: 'Table', path: '/table' },
    { label: 'About', path: '/about' }
  ];
}
