import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}
  title = 'portfolioWebsite'
  selectedProject = 'none'

  receiveMessage($event: any) {
    this.selectedProject = $event
  }

}
