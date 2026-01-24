import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgClass],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // <-- fix typo
})
export class App {
  isHome = false;
  constructor(private router: Router) {
    this.isHome = this.router.url === '/' || this.router.url === '';
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e) => {
      const url = (e as NavigationEnd).urlAfterRedirects;
      this.isHome = url === '/' || url === '';
    });
  }
}
