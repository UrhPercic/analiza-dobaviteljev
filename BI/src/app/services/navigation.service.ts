import { Injectable } from '@angular/core';
import { NavigationLink } from '../model/NavigationLink';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private links: NavigationLink[] = [
    {
      label: 'Domov',
      route: '',
      icon: 'house.png',
    },
    {
      label: 'Dobavitelji',
      icon: 'supplier.png',
      children: [{ label: 'Vsi dobavitelji', route: '/suppliers-home' }],
    },
    {
      label: 'Nastavitve',
      route: '/settings',
      icon: 'cogwheel.png',
    },
  ];

  getLinks(): NavigationLink[] {
    return this.links;
  }
}
