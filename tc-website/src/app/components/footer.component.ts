import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="sticky mt-16 border-t border-white/10 bg-[color:#0b1a2e] text-white">
      <div class="container py-12 grid grid-cols-3 gap-8 text-sm justify-items-center md:justify-items-start">
        <div class="text-center md:text-left">
          <img src="assets/logo_bg_removed.png" alt="UBC Tennis Circle Logo" class="h-20 my-4 mx-auto md:mx-0" />
        </div>
        <div class="text-center md:text-left">
          <div class="font-semibold mb-2">Quick Links</div>
          <ul class="space-y-1 opacity-90">
            <li><a routerLink="/" class="hover:text-blue-300">Home</a></li>
            <li><a routerLink="/events" class="hover:text-blue-300">Events</a></li>
            <li><a routerLink="/gallery" class="hover:text-blue-300">Gallery</a></li>
            <li><a routerLink="/merch" class="hover:text-blue-300">Merch</a></li>
            <li><a routerLink="/about-us" class="hover:text-blue-300">About Us</a></li>
          </ul>
        </div>
        <div class="text-center md:text-left">
          <div class="font-semibold mb-2">Connect</div>
          <ul class="space-y-1 opacity-90">
            <li><a href="https://www.instagram.com/ubctenniscircle/?hl=en" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">Instagram</a></li>
            <li><a href="https://www.facebook.com/groups/UBCTennisCircle" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">Facebook</a></li>
            <li><a href="https://discord.com/invite/WHt4q3bnHF" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">Discord</a></li>
          </ul>
        </div>
      </div>
      <div class="container py-6 text-xs opacity-70 border-t border-white/10 text-center">© {{ year }} UBC Tennis Club. All rights reserved.</div>
    </footer>
  `,
})
export class FooterComponent { year = new Date().getFullYear(); }
