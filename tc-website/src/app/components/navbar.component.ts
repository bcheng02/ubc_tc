import { Component, HostListener } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf],
  template: `
  <header class="fixed top-0 left-0 right-0 z-50 transition-colors duration-200" [ngClass]="lightNav ? 'bg-transparent' : 'bg-white/90 backdrop-blur shadow-sm'">
    <div class="container flex items-center justify-between py-3">
      <a [routerLink]="['/']" class="flex items-center">
        <img src="assets/logo_bg_removed.png" alt="UBC Tennis Club Logo" class="h-20 w-20 object-contain" />
      </a>
      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-10 ml-auto">
        <a routerLink="/" routerLinkActive="border-b-2 border-blue-600" [routerLinkActiveOptions]="{ exact: true }" class="font-semibold text-base md:text-lg transition-colors pb-1" [ngClass]="lightNav ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-blue-600'">Home</a>
        <a routerLink="/events" routerLinkActive="border-b-2 border-blue-600" class="font-semibold text-base md:text-lg transition-colors pb-1" [ngClass]="lightNav ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-blue-600'">Events</a>
        <a routerLink="/gallery" routerLinkActive="border-b-2 border-blue-600" class="font-semibold text-base md:text-lg transition-colors pb-1" [ngClass]="lightNav ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-blue-600'">Gallery</a>
        <a routerLink="/merch" routerLinkActive="border-b-2 border-blue-600" class="font-semibold text-base md:text-lg transition-colors pb-1" [ngClass]="lightNav ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-blue-600'">Merch</a>
        <a routerLink="/about-us" routerLinkActive="border-b-2 border-blue-600" class="font-semibold text-base md:text-lg transition-colors pb-1" [ngClass]="lightNav ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-blue-600'">About Us</a>
      </nav>

      <!-- Mobile menu button -->
      <button type="button" class="md:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" [ngClass]="lightNav ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-blue-600'" aria-label="Toggle navigation" (click)="menuOpen = !menuOpen">
        <svg *ngIf="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg *ngIf="menuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <!-- Mobile nav panel -->
    <div *ngIf="menuOpen" class="md:hidden bg-white/95 backdrop-blur border-t border-blue-100 shadow-sm">
      <nav class="container py-3 grid gap-2">
        <a (click)="closeMenu()" routerLink="/" routerLinkActive="text-blue-700" [routerLinkActiveOptions]="{ exact: true }" class="block px-2 py-2 rounded hover:bg-blue-50">Home</a>
        <a (click)="closeMenu()" routerLink="/events" routerLinkActive="text-blue-700" class="block px-2 py-2 rounded hover:bg-blue-50">Events</a>
        <a (click)="closeMenu()" routerLink="/gallery" routerLinkActive="text-blue-700" class="block px-2 py-2 rounded hover:bg-blue-50">Gallery</a>
        <a (click)="closeMenu()" routerLink="/merch" routerLinkActive="text-blue-700" class="block px-2 py-2 rounded hover:bg-blue-50">Merch</a>
        <a (click)="closeMenu()" routerLink="/about-us" routerLinkActive="text-blue-700" class="block px-2 py-2 rounded hover:bg-blue-50">About Us</a>
      </nav>
    </div>
  </header>
  `,
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  isHome = false;
  get lightNav(): boolean { return this.isHome && !this.scrolled; }
  constructor(private router: Router) {
    // Set initial route state
    this.isHome = this.router.url === '/' || this.router.url === '';
    // Update on navigation
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e) => {
      const url = (e as NavigationEnd).urlAfterRedirects;
      this.isHome = url === '/' || url === '';
    });
  }
  @HostListener('window:scroll') onScroll() {
    this.scrolled = window.scrollY > 0;
  }
  @HostListener('window:resize') onResize() {
    // Close menu when moving to desktop sizes
    if (window.innerWidth >= 768) this.menuOpen = false;
  }
  closeMenu() { this.menuOpen = false; }
}
