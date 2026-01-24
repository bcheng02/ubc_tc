import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import type { EventItem } from '../../models/event';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, FormsModule, NgIf, NgFor, DatePipe],
    template: `
<section class="relative w-full h-[95vh] overflow-hidden">
  <!-- Hero Video -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover"
    poster="assets/herov1.jpg"
  >
    <source src="assets/herov1.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/0"></div> <!-- fully transparent overlay -->

  <!-- Hero Content -->
  <div class="relative z-18 flex flex-col justify-center items-center text-center h-full">
    <h1 class="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
      Join the UBC Tennis Circle
    </h1>
    <p class="mt-4 text-white text-lg md:text-2xl opacity-90 max-w-2xl drop-shadow-md">
      Tournaments, workshops, socials — a tennis community for all skill levels.
    </p>

    <div class="mt-8 flex flex-col sm:flex-row gap-6">
      <a href="http://docs.google.com/forms/d/e/1FAIpQLScLBPwS5roY4Dc-vf0VB0WZO7MioNhUtXOfJiTGAdNUB2rkjg/viewform" class="btn-primary rounded-full px-12 py-5 text-xl font-semibold">
        Become a Member
      </a>
      <a routerLink="/events" class="btn-secondary rounded-full px-12 py-5 text-xl font-semibold">
        Browse Events
      </a>
    </div>
  </div>
</section>

<section class="section-white py-8">
  <div class="container text-center">
    <div class="stats-scroller mt-2 pb-2">
      <div class="stats-track">
        <!-- First set of stats -->
        <div class="stats-group">
          <div class="card-ghost p-6">
            <div class="stat-icon w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div class="text-4xl font-bold text-[var(--ubc-blue-600)]">500+</div>
            <div class="text-sm opacity-70 mt-1">Active Members</div>
          </div>

          <div class="card-ghost p-6">
            <div class="stat-icon w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div class="text-4xl font-bold text-[var(--ubc-blue-600)]">50+</div>
            <div class="text-sm opacity-70 mt-1">Events Per Year</div>
          </div>

          <div class="card-ghost p-6">
            <div class="stat-icon w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="text-4xl font-bold text-[var(--ubc-blue-600)]">{{ yearsRunning }}</div>
            <div class="text-sm opacity-70 mt-1">Years Running</div>
          </div>

          <div class="card-ghost p-6">
            <div class="stat-icon w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
              <img src="assets/handshake.svg" alt="Handshake icon" class="w-6 h-6" />
            </div>
            <div class="text-4xl font-bold text-[var(--ubc-blue-600)]">12</div>
            <div class="text-sm opacity-70 mt-1">Partner Sponsors</div>
          </div>
        </div>

        <!-- Duplicate set for seamless loop -->
        <div class="stats-group">
          <div class="card-ghost p-6">
            <div class="stat-icon w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div class="text-4xl font-bold text-[var(--ubc-blue-600)]">500+</div>
            <div class="text-sm opacity-70 mt-1">Active Members</div>
          </div>

          <div class="card-ghost p-6">
            <div class="stat-icon w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div class="text-4xl font-bold text-[var(--ubc-blue-600)]">50+</div>
            <div class="text-sm opacity-70 mt-1">Events Per Year</div>
          </div>

          <div class="card-ghost p-6">
            <div class="stat-icon w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="text-4xl font-bold text-[var(--ubc-blue-600)]">{{ yearsRunning }}</div>
            <div class="text-sm opacity-70 mt-1">Years Running</div>
          </div>

          <div class="card-ghost p-6">
            <div class="stat-icon w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
              <img src="assets/handshake.svg" alt="Handshake icon" class="w-6 h-6" />
            </div>
            <div class="text-4xl font-bold text-[var(--ubc-blue-600)]">12</div>
            <div class="text-sm opacity-70 mt-1">Partner Sponsors</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        <!-- Upcoming Events -->
    <section class="container mt-16">
        <div class="flex items-center justify-between mb-4">
            <div class="font-semibold text-xl text-[color:#0b1a2e]">Upcoming Events</div>
            <a routerLink="/events" class="text-blue-600 font-semibold hover:underline">View all</a>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="card overflow-hidden" *ngFor="let e of events">
                <div class="relative h-28 md:h-32 bg-gradient-to-b from-[var(--ubc-blue-700)] to-[var(--ubc-blue-500)]">
                    <div class="absolute top-3 left-3 bg-white text-[var(--ubc-deep-blue)] rounded-lg shadow px-3 py-2 text-center">
                        <div class="text-2xl font-extrabold leading-none">{{ e.date | date:'d' }}</div>
                        <div class="text-xs font-semibold tracking-wide">{{ e.date | date:'MMM' }}</div>
                    </div>
                    <div class="absolute top-3 right-3 bg-[var(--ubc-blue-600)] text-white text-xs font-semibold rounded-full px-3 py-1">{{ eventCategory(e) }}</div>
                    <div class="absolute inset-0 flex items-center justify-center opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                    </div>
                </div>
                <div class="p-5">
                    <div class="text-lg font-extrabold text-[var(--ubc-deep-blue)]">{{ e.title }}</div>
                    
                    <div class="mt-3 grid gap-2 text-sm">
                        <div class="flex items-center gap-2">
                            <span class="text-blue-600 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </span>
                            <span>{{ e.time }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-blue-600 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 5-9 13-9 13S3 15 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </span>
                            <span>{{ e.location }}</span>
                        </div>
                    </div>
                    <div class="mt-4 pt-3 border-t border-blue-100">
                        <a routerLink="/events" class="btn-cta w-full text-center">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container mt-16 grid md:grid-cols-2 gap-8 pb-16">
        <div class="card p-6 flex flex-col">
            <div class="font-semibold mb-2 text-[var(--ubc-deep-blue)]">Join the Mailing List</div>
            <p class="text-sm opacity-80 mb-4">Submit your details to our Google Form. \n</p>
            <form class="grid gap-3 flex-grow" action="https://docs.google.com/forms/d/e/1FAIpQLSfBkJ5mGsncq9e4zNz-POEX2W1qscYk-F49GD7YLUjI1QK0QQ/formResponse" method="POST" target="_blank" rel="noopener noreferrer">
                <div class="grid gap-1">
                    <label class="text-sm font-semibold">Full name (First, Last) *</label>
                    <input [attr.name]="entryFullNameId" type="text" required placeholder="Jane Doe" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div class="grid gap-1">
                    <label class="text-sm font-semibold">Student Number *</label>
                    <input [attr.name]="entryStudentNumberId" type="text" required placeholder="12345678" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div class="grid gap-1">
                    <label class="text-sm font-semibold">Email *</label>
                    <input [attr.name]="entryEmailId" type="email" required placeholder="you@ubc.ca" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div class="grid gap-1 flex-grow">
                    <label class="text-sm font-semibold">Questions/Comments</label>
                    <textarea [attr.name]="entryCommentsId" rows="3" placeholder="Optional" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none flex-grow"></textarea>
                </div>
                <button class="btn-primary justify-center rounded-full py-3 mt-auto" type="submit">Submit</button>
            </form>
        </div>
        <div class="flex flex-col gap-4">
            <a routerLink="https://docs.google.com/forms/d/e/1FAIpQLScLBPwS5roY4Dc-vf0VB0WZO7MioNhUtXOfJiTGAdNUB2rkjg/viewform" class="group block rounded-lg bg-gradient-to-r from-[var(--ubc-blue-600)] to-[var(--ubc-blue-300)] text-white p-6 shadow flex items-center justify-between hover:opacity-95 hover:shadow-lg transition">
                <div>
                    <div class="text-2xl md:text-3xl font-extrabold">Become a Member</div>
                    <div class="text-sm opacity-90">Join the Circle — tap to sign up</div>
                </div>
                <span class="inline-flex items-center gap-2 font-semibold">
                    <span>Get Started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform transition-transform group-hover:translate-x-0.5">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </span>
            </a>
            <div class="card p-6 flex flex-col flex-grow">
                <div class="font-semibold mb-2 text-[var(--ubc-deep-blue)]">Get in Touch</div>
                <p class="text-sm opacity-80 mb-4">Have questions about membership, events, or sponsorships? Drop us a message.</p>
                <form class="grid gap-3 flex-grow" (submit)="$event.preventDefault()">
                    <input [(ngModel)]="contactName" name="name" placeholder="Name" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <input [(ngModel)]="contactEmail" name="contactEmail" placeholder="Email" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <textarea [(ngModel)]="contactMessage" name="message" rows="3" placeholder="Message" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none flex-grow"></textarea>
                    <button class="btn-primary justify-center rounded-full py-3 mt-auto" (click)="sendContact()">Send Message</button>
                    <div *ngIf="contactSent" class="text-sm text-center text-blue-600">Message sent! We'll get back soon.</div>
                </form>
            </div>
        </div>
    </section>
    `,
})
export class HomeComponent implements OnInit {
    // Google Form entry IDs (replace with actual entry.<id> values)
    entryFullNameId = 'entry.X_fullName';
    entryStudentNumberId = 'entry.X_studentNumber';
    entryEmailId = 'entry.X_email';
    entryCommentsId = 'entry.X_comments';
    events: EventItem[] = [];
    email = '';
    subscribed = false;
    contactName = '';
    contactEmail = '';
    contactMessage = '';
    contactSent = false;
    yearsRunning = new Date().getFullYear() - 2016;

    constructor(private data: DataService) { }

    ngOnInit() {
        const all = this.data.events();
        this.events = all
            .filter(e => e.registrationStatus === 'Open')
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .slice(0, 3);
    }

    subscribe() {
        if (this.email.includes('@')) {
            this.subscribed = true;
        }
    }

    sendContact() {
        if (this.contactEmail && this.contactMessage) {
            this.contactSent = true;
            this.contactName = this.contactEmail = this.contactMessage = '';
        }
    }

    eventCategory(e: EventItem): string {
        const t = (e.title || '').toLowerCase();
        if (t.includes('tournament') || t.includes('open')) return 'Tournament';
        if (t.includes('workshop') || t.includes('stringing')) return 'Workshop';
        if (t.includes('social') || t.includes('mixer')) return 'Social';
        if (t.includes('cardio')) return 'Fitness';
        if (t.includes('ladder')) return 'Ladder';
        return 'Event';
    }
}