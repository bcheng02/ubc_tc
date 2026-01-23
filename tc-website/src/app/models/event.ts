export type RegistrationStatus = 'Open' | 'Closed' | 'Full';

export interface EventItem {
    id: string;
    title: string;
    date: string | Date; // ISO date string
    time: string; // e.g., '6:00 PM - 8:00 PM'
    location: string;
    description: string;
    imageUrl: string;
    registrationStatus: RegistrationStatus;
}

export function isPastEvent(e: EventItem): boolean {
    const d = new Date(e.date);
    const today = new Date();
    return d.getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
}
