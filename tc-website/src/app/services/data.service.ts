import { Injectable, signal } from '@angular/core';
import { EVENTS } from '../data/events';
import { PRODUCTS } from '../data/products';
import { GALLERY } from '../data/gallery';
import { TEAM } from '../data/team';
import { FUN_FACTS } from '../data/facts';
import { EventItem } from '../models/event';

@Injectable({ providedIn: 'root' })
export class DataService {
    events = signal(EVENTS);
    products = signal(PRODUCTS);
    gallery = signal(GALLERY);
    team = signal(TEAM);
    facts = signal(FUN_FACTS);

    addMailingListEmail(_email: string) {
        // Placeholder for future API integration
        return true;
    }

    submitContact(_payload: { name: string; email: string; message: string }) {
        // Placeholder for future API integration
        return true;
    }
}
