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
      children: [{ label: 'Vsi dobavitelji', route: '/suppliers-home' }],
    },
  ];

  getLinks(): NavigationLink[] {
    return this.links;
  }
}
