import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import type { EventItem } from '../../models/event';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, FormsModule, NgIf, NgFor, DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
<section class="relative w-full h-[100vh] overflow-hidden">
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
  <div class="relative z-18 flex flex-col justify-between items-center text-center h-full px-4 py-12">
    <div class="flex-1 flex flex-col justify-center items-center">
      <h1 class="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
        Join the Circle
      </h1>
      <p class="mt-4 text-white text-lg md:text-2xl opacity-90 max-w-2xl drop-shadow-md">
        The Largest Tennis Club on Campus
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

    <!-- Stats on Hero -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl w-full mb-8">
      <div class="card-hero-stat p-4 md:p-6">
        <div class="stat-icon-hero w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div class="text-2xl md:text-4xl font-bold text-white">150+</div>
        <div class="text-xs md:text-sm text-white/80 mt-1">Members</div>
      </div>

      <div class="card-hero-stat p-4 md:p-6">
        <div class="stat-icon-hero w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <div class="text-2xl md:text-4xl font-bold text-white">15+</div>
        <div class="text-xs md:text-sm text-white/80 mt-1">Events Per Year</div>
      </div>

      <div class="card-hero-stat p-4 md:p-6">
        <div class="stat-icon-hero w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div class="text-2xl md:text-4xl font-bold text-white">{{ yearsRunning }}</div>
        <div class="text-xs md:text-sm text-white/80 mt-1">Years Running</div>
      </div>

      <div class="card-hero-stat p-4 md:p-6">
        <div class="stat-icon-hero w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
          <img src="assets/handshake.svg" alt="Handshake icon" class="w-5 h-5 md:w-6 md:h-6 brightness-0 invert" />
        </div>
        <div class="text-2xl md:text-4xl font-bold text-white">12</div>
        <div class="text-xs md:text-sm text-white/80 mt-1">Partner Sponsors</div>
      </div>
    </div>
  </div>
</section>

<!-- Sponsors Scroller Section -->
<section class="section-white py-8">
  <div class="container text-center">
    <h2 class="text-2xl font-semibold text-[var(--ubc-deep-blue)] mb-6">Our Partners & Sponsors</h2>
    <div class="sponsors-scroller mt-2 pb-2">
      <div class="sponsors-track" #sponsorsTrack>
        <!-- First set of sponsors -->
        <div class="sponsors-group">
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/juiceTruck.png" alt="Juice Truck" class="sponsor-logo sponsor-logo--big" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/JJBean.png" alt="JJ Bean" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/beanAroundTheWorld.png" alt="Bean Around The World" class="sponsor-logo sponsor-logo--xxl" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/guru.png" alt="Guru" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/bodyEnergyClub.png" alt="Body Energy Club" class="sponsor-logo sponsor-logo--big" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/hoochyBooch.png" alt="Hoochy Booch Kombucha" class="sponsor-logo sponsor-logo--xxl" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/boosterJuice.avif" alt="Booster Juice" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/rainOrShine.png" alt="Rain or Shine" class="sponsor-logo sponsor-logo--sm" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/gloryJuice.png" alt="Glory Juice" class="sponsor-logo sponsor-logo--xxl" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/poppi.svg" alt="Poppi" class="sponsor-logo sponsor-logo--sm" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/joDeli.avif" alt="Jo Deli" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/redBull.png" alt="Red Bull" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/teadot.png" alt="Tea Dot" class="sponsor-logo sponsor-logo--xxl" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/pacificPoke.png" alt="Pacific Poke" class="sponsor-logo sponsor-logo--pp-small" />
          </div>
        </div>

        <!-- Duplicate set for seamless loop -->
        <div class="sponsors-group">
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/juiceTruck.png" alt="Juice Truck" class="sponsor-logo sponsor-logo--big" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/JJBean.png" alt="JJ Bean" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/beanAroundTheWorld.png" alt="Bean Around The World" class="sponsor-logo sponsor-logo--xxl" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/guru.png" alt="Guru" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/bodyEnergyClub.png" alt="Body Energy Club" class="sponsor-logo sponsor-logo--big" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/hoochyBooch.png" alt="Hoochy Booch Kombucha" class="sponsor-logo sponsor-logo--xxl" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/boosterJuice.avif" alt="Booster Juice" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/rainOrShine.png" alt="Rain or Shine" class="sponsor-logo sponsor-logo--sm" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/gloryJuice.png" alt="Glory Juice" class="sponsor-logo sponsor-logo--xxl" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/poppi.svg" alt="Poppi" class="sponsor-logo sponsor-logo--sm" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/joDeli.avif" alt="Jo Deli" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/redBull.png" alt="Red Bull" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/teadot.png" alt="Tea Dot" class="sponsor-logo sponsor-logo--xxl" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/pacificPoke.png" alt="Pacific Poke" class="sponsor-logo sponsor-logo--pp-small" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        <!-- Upcoming Events -->
    <section class="container mt-16">
        <div class="flex items-center justify-between mb-4">
            <div class="font-semibold text-2xl text-[color:#0b1a2e]">Upcoming Events</div>
            <a routerLink="/events" class="text-blue-600 font-semibold hover:underline">View all</a>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="card overflow-hidden" *ngFor="let e of events">
                <div class="relative h-28 md:h-32 overflow-hidden bg-gray-100">
  <img
    [src]="e.imageUrl"
    [alt]="e.title"
    class="absolute inset-0 w-full h-full object-cover"
  />

  <div class="absolute inset-0 bg-black/30"></div>

  <!-- Date badge -->
  <div class="absolute top-3 left-3 bg-white text-[var(--ubc-deep-blue)] rounded-lg shadow px-3 py-2 text-center">
    <div class="text-2xl font-extrabold leading-none">{{ e.date | date:'d' }}</div>
    <div class="text-xs font-semibold tracking-wide">{{ e.date | date:'MMM' }}</div>
  </div>

  <!-- Category badge -->
  <div class="absolute top-3 right-3 bg-[var(--ubc-blue-600)] text-white text-xs font-semibold rounded-full px-3 py-1">
    {{ eventCategory(e) }}
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
                        <a routerLink="/events" class="btn-cta w-full text-center">View Event</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Become a Member Section -->
    <section class="container mt-16">
        <h2 class="text-2xl font-semibold text-left text-[var(--ubc-deep-blue)] mb-8">Why Become a Member?</h2>
        <div class="grid md:grid-cols-3 gap-6 max-w-full">
            <!-- Non-Member -->
            <div class="card p-6 flex flex-col">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold text-[var(--ubc-deep-blue)] mb-2">Non-Member</h3>
                    <div class="text-4xl font-extrabold text-gray-500">$0</div>
                </div>
                <div class="space-y-4 flex-grow">
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        <span class="text-sm text-gray-500">No membership card</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        <span class="text-sm text-gray-500">No sponsor discounts</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        <span class="text-sm text-gray-500">No WhatsApp group access</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        <span class="text-sm text-gray-500">No early access to sessions</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm text-gray-500">Standard event rates</span>
                    </div>
                    
                </div>
                <div class="mt-6">
                    <div class="bg-gray-100 text-gray-500 text-center rounded-full py-3 font-semibold cursor-not-allowed">
                        No Membership
                    </div>
                </div>
            </div>

            <!-- Prime Member (Center) -->
            <div class="card-prime p-6 rounded-b-lg flex flex-col border-4 border-[var(--ubc-blue-600)] bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden shadow-2xl rounded-b-lg">
                <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-[var(--ubc-blue-600)] text-white text-xs font-bold px-4 py-1.5 rounded-b-lg shadow-lg z-20">BEST VALUE</div>
                <div class="text-center mb-6 relative z-10 mt-4">
                    <h3 class="text-2xl font-bold text-[var(--ubc-deep-blue)] mb-2">Prime Member</h3>
                    <div class="text-4xl font-extrabold text-[var(--ubc-blue-600)]">$20</div>
                </div>
                <div class="space-y-4 flex-grow relative z-10">

                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">UBCTC Membership Card</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Discounts and perks from our sponsors, including Rackets & Runners, Kintec, and more</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Invite Link to UBCTC WhatsApp Group Chat</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Early access to our hitting sessions!</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Discounted rates to our social events & tennis lessons <span class="font-semibold text-[var(--ubc-blue-600)]">(NEW!)</span></span>
                    </div>
                    <div class="flex items-start gap-3 bg-yellow-50 -mx-2 px-2 py-2 rounded">
                        <svg class="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm font-semibold text-yellow-900">2 FREE beginner group tennis lessons with one of our instructors (coming soon)!</span>
                    </div>
                </div>
                <div class="mt-6 relative z-10">
                    <a href="http://docs.google.com/forms/d/e/1FAIpQLScLBPwS5roY4Dc-vf0VB0WZO7MioNhUtXOfJiTGAdNUB2rkjg/viewform" class="btn-primary w-full text-center rounded-full py-3 block">Join as Prime Member</a>
                </div>
            </div>

            <!-- General Member -->
            <div class="card p-6 flex flex-col border-2 border-[var(--ubc-blue-600)]">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold text-[var(--ubc-deep-blue)] mb-2">General Member</h3>
                    <div class="text-4xl font-extrabold text-[var(--ubc-blue-600)]">$10</div>
                </div>
                <div class="space-y-4 flex-grow">
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">UBCTC Membership Card</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Discounts and perks from our sponsors, including Rackets & Runners, Kintec, and more</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Invite Link to UBCTC WhatsApp Group Chat</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Early access to our hitting sessions!</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Discounted rates to our social events & tennis lessons <span class="font-semibold text-[var(--ubc-blue-600)]">(NEW!)</span></span>
                    </div>
                </div>
                <div class="mt-6">
                    <a href="http://docs.google.com/forms/d/e/1FAIpQLScLBPwS5roY4Dc-vf0VB0WZO7MioNhUtXOfJiTGAdNUB2rkjg/viewform" class="btn-primary w-full text-center rounded-full py-3 block">Join as General Member</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Instagram Feed (Behold) -->
    <section class="container mt-16">
      <h2 class="text-2xl font-semibold text-left text-[var(--ubc-deep-blue)] mb-8">Latest on Instagram</h2>
    </section>
    <!-- Full-bleed Behold widget -->
    <div style="display:block;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);">
      <div class="px-4 sm:px-6 md:px-8 lg:px-0 xl:px-0">
        <div data-behold-id="aZ67gOlP79kXj6a5t6Nx"></div>
      </div>
    </div>

    

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
            <a routerLink="/about-us" class="group block rounded-lg bg-gradient-to-r from-[var(--ubc-blue-600)] to-[var(--ubc-blue-300)] text-white p-6 shadow flex items-center justify-between hover:opacity-95 hover:shadow-lg transition">
                <div>
                    <div class="text-2xl md:text-3xl font-extrabold">Learn More About Our Team</div>
                </div>
                <span class="inline-flex items-center gap-2 font-semibold">
                    
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
export class HomeComponent implements OnInit, AfterViewInit {
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

    sponsors: string[] = [
        'Juice Truck',
        'JJ Bean',
        'Bean Around The World',
        'Guru',
        'Body Energy Club',
        'Hoochy Booch Kombucha',
        'Booster Juice',
        'Rain or Shine',
        'Glory Juice',
        'Poppi',
        'Jo Deli',
        'Red Bull',
        'Tea Dot',
        'Pacific Poke'
    ];

    constructor(private data: DataService) { }

    ngOnInit() {
      const all = this.data.events();
    
      // Normalize "today" to start of day
      const today = new Date();
      today.setHours(0, 0, 0, 0);
    
      this.events = all
        .filter(e => {
          const [year, month, day] = e.date.toString().split('-').map(Number);
          const eventDate = new Date(year, month - 1, day); // LOCAL midnight
          return eventDate >= today;
        })
        .sort(
          (a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        )
        .slice(0, 3);
    }

    ngAfterViewInit(): void {
        this.loadBeholdScript();
    }

    private loadBeholdScript(): void {
        const src = 'https://w.behold.so/widget.js';
        if (typeof document === 'undefined') return;
        const existing = document.querySelector(`script[src="${src}"]`);
        if (!existing) {
            const s = document.createElement('script');
            s.type = 'module';
            s.src = src;
            document.head.appendChild(s);
        }
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