import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { NavigationLink } from '../../model/NavigationLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLink: NavigationLink | undefined;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentLink(event.urlAfterRedirects);
      }
    });
  }

  updateCurrentLink(url: string): void {
    const links = this.navigationService.getLinks();
    this.currentLink = this.findLinkByUrl(links, url);
  }

  findLinkByUrl(
    links: NavigationLink[],
    url: string
  ): NavigationLink | undefined {
    for (const link of links) {
      if (link.route === url) {
        return link;
      }
      if (link.children) {
        const childLink = this.findLinkByUrl(link.children, url);
        if (childLink) {
          return childLink;
        }
      }
    }
    return undefined;
  }
}
