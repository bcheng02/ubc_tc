import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    template: `
  <header class="sticky top-0 z-50 bg-white border-b border-blue-100">
    <div class="container flex items-center justify-between py-3">
      <a [routerLink]="['/']" class="flex items-center gap-2 font-bold text-lg">
        <img src="/assets/logo.svg" alt="UBC Tennis Club Logo" class="h-8 w-8 object-contain" />
        <span class="text-[color:#0b1a2e]">UBC Tennis Club</span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a routerLink="/" routerLinkActive="text-blue-600" class="hover:text-blue-600 transition-colors">Home</a>
        <a routerLink="/events" routerLinkActive="text-blue-600" class="hover:text-blue-600 transition-colors">Events</a>
        <a routerLink="/gallery" routerLinkActive="text-blue-600" class="hover:text-blue-600 transition-colors">Gallery</a>
        <a routerLink="/merch" routerLinkActive="text-blue-600" class="hover:text-blue-600 transition-colors">Merch</a>
        <a routerLink="/team" routerLinkActive="text-blue-600" class="hover:text-blue-600 transition-colors">Team</a>
      </nav>
    </div>
  </header>
  `,
})
export class NavbarComponent { }
