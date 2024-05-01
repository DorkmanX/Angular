import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  menuItems: MenuItem[] = [
    { label: 'Tablica', path: '/table' },
    { label: 'O mnie', path: '/about' }
  ];
}
