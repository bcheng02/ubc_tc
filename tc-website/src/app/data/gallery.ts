import { GalleryImage } from '../models/gallery-image';

export const GALLERY: GalleryImage[] = Array.from({ length: 20 }).map((_, i) => ({
    id: `g${i + 1}`,
    url: `https://picsum.photos/seed/gallery${i + 1}/900/700`,
    alt: `UBC Tennis Club photo ${i + 1}`,
    category: i % 3 === 0 ? 'Tournaments' : i % 3 === 1 ? 'Social' : 'Training',
    event: i % 2 === 0 ? 'UBC Open' : 'Club Night',
}));
