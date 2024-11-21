import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavigationLink } from '../../model/NavigationLink';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  links: NavigationLink[] = [];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.links = this.navigationService.getLinks();
    console.log(this.links);
  }
}
