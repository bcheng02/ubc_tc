import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../models/gallery-image';
import { GALLERY } from '../../data/gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  galleryImages: GalleryImage[] = [];
  filteredImages: GalleryImage[] = [];
  selectedFilter: string = 'All';
  availableFilters: string[] = ['All'];
  isDropdownOpen: boolean = false;

  ngOnInit() {
    // For now, use placeholder images - ready for actual data
    this.galleryImages = GALLERY;
    this.filteredImages = GALLERY;
    
    // Extract unique event names for filters
    const uniqueEvents = [...new Set(GALLERY.map(img => img.event).filter((e): e is string => e !== undefined))];
    this.availableFilters = ['All', ...uniqueEvents];
  }

  filterByEvent(event: string) {
    this.selectedFilter = event;
    if (event === 'All') {
      this.filteredImages = this.galleryImages;
    } else {
      this.filteredImages = this.galleryImages.filter(img => img.event === event);
    }
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
