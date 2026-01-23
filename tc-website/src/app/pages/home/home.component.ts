import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, FormsModule, NgIf],
    template: `
    <section class="container mt-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
            <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&auto=format&fit=crop" alt="Tennis play" class="w-full h-[380px] md:h-[420px] object-cover rounded-lg shadow-lg" />
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

    <section class="container mt-16">
        <div class="font-semibold text-xl mb-4 text-[color:#0b1a2e]">Why Join Us?</div>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div class="card p-5">
                <div class="text-2xl font-extrabold text-blue-600">15+ Tournaments</div>
                <div class="text-sm opacity-80 mt-1">Hosted annually with prizes</div>
            </div>
            <div class="card p-5">
                <div class="text-2xl font-extrabold text-blue-600">500+ Members</div>
                <div class="text-sm opacity-80 mt-1">Active community on campus</div>
            </div>
            <div class="card p-5">
                <div class="text-2xl font-extrabold text-blue-600">Social Events</div>
                <div class="text-sm opacity-80 mt-1">Weekly mixers and gatherings</div>
            </div>
            <div class="card p-5">
                <div class="text-2xl font-extrabold text-blue-600">Skill Levels</div>
                <div class="text-sm opacity-80 mt-1">Beginner to competitive tiers</div>
            </div>
        </div>
    </section>

    <section class="container mt-16 grid md:grid-cols-2 gap-8">
        <div class="card p-6">
            <div class="font-semibold mb-2 text-[color:#0b1a2e]">Stay in the Loop</div>
            <p class="text-sm opacity-80">Get the latest updates on tournament registrations, social mixers, and exclusive member perks delivered to your inbox.</p>
            <form class="flex gap-3 mt-3" (submit)="$event.preventDefault()">
                <input [(ngModel)]="email" name="email" type="email" placeholder="you@ubc.ca" class="flex-1 px-3 py-2 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button class="btn-primary" (click)="subscribe()">Join Mailing List</button>
            </form>
            <div *ngIf="subscribed" class="text-sm mt-2 text-blue-600">Thanks! You're on the list.</div>
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
    email = '';
    subscribed = false;
    contactName = '';
    contactEmail = '';
    contactMessage = '';
    contactSent = false;

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
