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

  ngOnInit() {
    // For now, use placeholder images - ready for actual data
    this.galleryImages = GALLERY;
  }
}
