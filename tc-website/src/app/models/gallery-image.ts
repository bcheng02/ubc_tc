export interface GalleryImage {
    id: string;
    url: string;
    alt: string;
    category?: string; // e.g., 'Tournaments', 'Social', 'Training'
    event?: string;
    date?: string; // ISO date string
}
