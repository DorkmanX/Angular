import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  href?: string; // Optional link for menu item
  click?: () => void; // Optional function to execute on click
}

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', click: () => this.onContactClick() }
  ];

  onContactClick() {
    // Handle contact click event
    console.log('Contact clicked!');
  }

}
