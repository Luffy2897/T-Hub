import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-first-page', // Replace 'app-navbar' with your component selector
  templateUrl: './first-page.component.html', // Your component's HTML file
  styleUrls: ['./first-page.component.css'], // Your component's CSS file
})
export class FirstPageComponent {
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      // Click occurred outside the navigation menu, close it here
      this.closeNavbar();
    }
  }

  // Add a method to close the navbar
  closeNavbar() {
    // If you're using Bootstrap, you can close the navbar like this:
    const navbarToggler = document.querySelector(
      '.navbar-toggler'
    ) as HTMLElement;
    const navbarCollapse = document.querySelector(
      '.navbar-collapse'
    ) as HTMLElement;

    if (navbarToggler && navbarCollapse) {
      navbarToggler.click(); // Click the toggle button to close the navbar
    }
  }
}
