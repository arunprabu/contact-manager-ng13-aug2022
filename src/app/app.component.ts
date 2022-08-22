import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // element selector - Recommended
  templateUrl: './app.component.html', // template is must. should be only one
  styleUrls: ['./app.component.scss'] // styles can be many. but optional.
})
export class AppComponent {
  title = 'contact-manager-ng13';
}
