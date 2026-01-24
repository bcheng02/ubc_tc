import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'events', loadComponent: () => import('./pages/events/events').then(m => m.EventsComponent) },
    { path: 'merch', loadComponent: () => import('./pages/merch/merch.component').then(m => m.MerchComponent) },
    { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
    { path: 'about-us', loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent) },
    { path: 'coming-soon', loadComponent: () => import('./pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent) },
    { path: '**', redirectTo: '' },
];
