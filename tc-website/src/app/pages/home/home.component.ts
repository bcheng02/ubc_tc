import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { EVENTS } from '../../data/events';
import type { EventItem } from '../../models/event';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, FormsModule, NgIf, NgFor, DatePipe],
    template: `
    <section class="container mt-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
            <img src="assets/hero.png" alt="Tennis player" class="w-4/5 mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-[color:#0b1a2e]">
                Welcome to the UBC Tennis Circle!
            </h1>
            <p class="mt-4 text-lg opacity-80">Whether you're a seasoned player or just picking up a racquet for the first time, our club offers a dynamic and inclusive community for tennis enthusiasts of all skill levels.</p>
            <div class="mt-6">
                <a routerLink="/coming-soon" class="btn-cta">Join the Circle →</a>
            </div>
        </div>
    </section>

    <section class="section-blue mt-12 py-16" >
        <div class="container text-center">
            <h2 class="text-3xl font-extrabold">UBC Tennis Circle by the <span class="text-blue-300">Numbers</span></h2>
            <p class="mt-2 opacity-90">We're proud of what we've built together. Here's a snapshot of our vibrant community.</p>
            <div class="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div class="card-ghost p-6">
                    <div class="stat-icon w-10 h-10 rounded-full mx-auto mb-3"></div>
                    <div class="text-3xl font-extrabold">500+</div>
                    <div class="text-sm opacity-80">Active Members</div>
                </div>
                <div class="card-ghost p-6">
                    <div class="stat-icon w-10 h-10 rounded-full mx-auto mb-3"></div>
                    <div class="text-3xl font-extrabold">50+</div>
                    <div class="text-sm opacity-80">Events Per Year</div>
                </div>
                <div class="card-ghost p-6">
                    <div class="stat-icon w-10 h-10 rounded-full mx-auto mb-3"></div>
                    <div class="text-3xl font-extrabold">{{ yearsRunning }}</div>
                    <div class="text-sm opacity-80">Years Running</div>
                </div>
                <div class="card-ghost p-6">
                    <div class="stat-icon w-10 h-10 rounded-full mx-auto mb-3"></div>
                    <div class="text-3xl font-extrabold">12</div>
                    <div class="text-sm opacity-80">Partner Sponsors</div>
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
            <div class="card p-5" *ngFor="let e of events">
                <div class="text-sm font-semibold text-blue-600">{{ e.date | date:'MMM d, y' }} • {{ e.time }}</div>
                <div class="text-lg font-extrabold mt-1">{{ e.title }}</div>
                <div class="text-sm opacity-80 mt-1">{{ e.location }}</div>
                <div class="mt-3 flex gap-3">
                    <a routerLink="/events" class="btn-primary">Details</a>
                    <a routerLink="/coming-soon" class="btn-cta">Register</a>
                </div>
            </div>
        </div>
    </section>

    <section class="container mt-16 grid md:grid-cols-2 gap-8">
        <div class="card p-6">
            <div class="font-semibold mb-2 text-[color:#0b1a2e]">Join the Mailing List</div>
            <p class="text-sm opacity-80">Submit your details to our Google Form. Required: Full name, Student Number, Email. Optional: Questions/Comments.</p>
            <form class="grid gap-3 mt-3" action="https://docs.google.com/forms/d/e/1FAIpQLSfBkJ5mGsncq9e4zNz-POEX2W1qscYk-F49GD7YLUjI1QK0QQ/formResponse" method="POST" target="_blank" rel="noopener noreferrer">
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
                <div class="grid gap-1">
                    <label class="text-sm font-semibold">Questions/Comments</label>
                    <textarea [attr.name]="entryCommentsId" rows="3" placeholder="Optional" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                </div>
                <button class="btn-primary justify-center" type="submit">Submit</button>
            </form>
        </div>
        <div class="card p-6">
            <div class="font-semibold mb-2 text-[color:#0b1a2e]">Get in Touch</div>
            <p class="text-sm opacity-80">Have questions about membership, events, or sponsorships? Drop us a message.</p>
            <form class="grid gap-3 mt-3" (submit)="$event.preventDefault()">
                <input [(ngModel)]="contactName" name="name" placeholder="Name" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input [(ngModel)]="contactEmail" name="contactEmail" placeholder="Email" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <textarea [(ngModel)]="contactMessage" name="message" rows="3" placeholder="Message" class="px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                <button class="btn-primary justify-center" (click)="sendContact()">Send Message</button>
                <div *ngIf="contactSent" class="text-sm mt-1 text-blue-600">Message sent! We'll get back soon.</div>
            </form>
        </div>
    </section>
    `,
})
export class HomeComponent {
    // Google Form entry IDs (replace with actual entry.<id> values)
    entryFullNameId = 'entry.X_fullName';
    entryStudentNumberId = 'entry.X_studentNumber';
    entryEmailId = 'entry.X_email';
    entryCommentsId = 'entry.X_comments';
    events: EventItem[] = EVENTS
        .filter(e => e.registrationStatus === 'Open')
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 3);
    email = '';
    subscribed = false;
    contactName = '';
    contactEmail = '';
    contactMessage = '';
    contactSent = false;
    yearsRunning = new Date().getFullYear() - 2016;

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
}
