export type RegistrationStatus = 'Open' | 'Closed' | 'Full' | 'Not Required';


export interface EventItem {
    id: string;
    title: string;
    date: string | Date; // ISO date string
    time: string; // e.g., '6:00 PM - 8:00 PM'
    location: string;
    description: string;
    imageUrl: string;
    registrationStatus: RegistrationStatus;
    memberPrice?: number; // Member price in dollars, optional
    nonMemberPrice?: number; // Non-member price in dollars, optional
}

export function isPastEvent(e: EventItem): boolean {
    // Force local date parsing (YYYY-MM-DD)
    const [year, month, day] = e.date.toString().split('-').map(Number);
  
    // End of the event day in LOCAL time
    const eventEnd = new Date(year, month - 1, day, 23, 59, 59, 999);
  
    return new Date().getTime() > eventEnd.getTime();
  }
  
  

