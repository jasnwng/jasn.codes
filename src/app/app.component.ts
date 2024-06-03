import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}
  title = 'portfolioWebsite'
  showFestify = false
  showSpot = false
  showChat = true

  receiveMessage($event: any) {
    if ($event == 'festify') {
      this.showFestify = true;
      this.showSpot = false;
      this.showChat = false;
    };
    if ($event == 'spot') {
      this.showFestify = false;
      this.showSpot = true;
      this.showChat = false;
    }
    if ($event == 'none') {
      this.showFestify = false;
      this.showSpot = false;
      this.showChat = true;
    }
  }

}
