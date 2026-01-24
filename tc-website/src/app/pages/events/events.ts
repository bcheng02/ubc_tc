import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventItem, isPastEvent } from '../../models/event';
import { EVENTS } from '../../data/events';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class EventsComponent implements OnInit {
  allEvents: EventItem[] = [];
  upcomingEvents: EventItem[] = [];
  pastEvents: EventItem[] = [];

  ngOnInit() {
    this.allEvents = EVENTS;
    this.upcomingEvents = this.allEvents.filter(e => !isPastEvent(e));
    this.pastEvents = this.allEvents.filter(e => isPastEvent(e));
  }

  formatDate(date: string | Date): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-700';
      case 'Closed':
        return 'bg-gray-100 text-gray-700';
      case 'Full':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  formatPrice(price?: number): string {
    if (price === undefined || price === null) {
      return 'Free';
    }
    if (price === 0) {
      return 'Free';
    }
    if (price === -1) {
      return 'Unavailable';
    }
    return `$${price.toFixed(2)}`;
  }
}
