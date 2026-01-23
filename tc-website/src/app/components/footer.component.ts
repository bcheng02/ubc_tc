import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink],
    template: `
    <footer class="mt-16 border-t border-white/10 bg-[color:rgba(10,19,35,0.6)]">
      <div class="container py-8 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div class="font-semibold mb-2">UBC Tennis Club</div>
          <p class="opacity-80">Building a welcoming, energetic tennis community at UBC.</p>
        </div>
        <div>
          <div class="font-semibold mb-2">Quick Links</div>
          <ul class="space-y-1 opacity-90">
            <li><a routerLink="/events" class="hover:text-blue-300">Events</a></li>
            <li><a routerLink="/merch" class="hover:text-blue-300">Merch</a></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-2">We’re Hiring</div>
          <p class="opacity-80">Passionate about tennis and community? Join our exec team.</p>
          <a routerLink="/team" class="btn-primary mt-3 inline-block">Join the Team</a>
        </div>
      </div>
      <div class="container py-4 text-xs opacity-70 border-t border-white/10">© {{ year }} UBC Tennis Club</div>
    </footer>
  `,
})
export class FooterComponent { year = new Date().getFullYear(); }
