import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  template: `
  <header class="fixed top-0 left-0 right-0 z-50 transition-colors duration-200" [ngClass]="scrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-transparent'">
    <div class="container flex items-center justify-between py-3">
      <a [routerLink]="['/']" class="flex items-center">
        <img src="assets/logo_bg_removed.png" alt="UBC Tennis Club Logo" class="h-20 w-20 object-contain" />
      </a>
      <nav class="hidden md:flex items-center gap-10 ml-auto">
        <a routerLink="/" routerLinkActive="text-blue-700 border-b-2 border-blue-600" [routerLinkActiveOptions]="{ exact: true }" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Home</a>
        <a routerLink="/events" routerLinkActive="text-blue-700 border-b-2 border-blue-600" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Events</a>
        <a routerLink="/gallery" routerLinkActive="text-blue-700 border-b-2 border-blue-600" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Gallery</a>
        <a routerLink="/merch" routerLinkActive="text-blue-700 border-b-2 border-blue-600" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">Merch</a>
        <a routerLink="/about-us" routerLinkActive="text-blue-700 border-b-2 border-blue-600" class="text-gray-700 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors pb-1">About Us</a>
      </nav>
    </div>
  </header>
  `,
})
export class NavbarComponent {
  scrolled = false;
  @HostListener('window:scroll') onScroll() {
    this.scrolled = window.scrollY > 0;
  }
}
