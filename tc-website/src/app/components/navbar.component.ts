import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    template: `
  <header class="sticky top-0 z-50 bg-blue-50">
    <div class="container flex items-center justify-between py-3">
      <a [routerLink]="['/']" class="flex items-center">
        <img src="/assets/logo.svg" alt="UBC Tennis Club Logo" class="h-16 w-16 object-contain" />
      </a>
      <nav class="hidden md:flex items-center gap-10 ml-auto">
        <a routerLink="/" routerLinkActive="text-blue-700 border-b-2 border-blue-600" [routerLinkActiveOptions]="{ exact: true }" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Home</a>
        <a routerLink="/events" routerLinkActive="text-blue-700 border-b-2 border-blue-600" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Events</a>
        <a routerLink="/gallery" routerLinkActive="text-blue-700 border-b-2 border-blue-600" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Gallery</a>
        <a routerLink="/merch" routerLinkActive="text-blue-700 border-b-2 border-blue-600" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Merch</a>
        <a routerLink="/team" routerLinkActive="text-blue-700 border-b-2 border-blue-600" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Team</a>
      </nav>
    </div>
  </header>
  `,
})
export class NavbarComponent { }
