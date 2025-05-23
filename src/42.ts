import { Component } from 'tsort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {}

  onMenuClick(event: any) {
    if (event.type === 'toggle') {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    console.log('Toggle menu');
    // Add your toggle logic here
  }
}
