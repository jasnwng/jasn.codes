import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-overview',
  templateUrl: './work-overview.component.html',
  styleUrl: './work-overview.component.css'
})
export class WorkOverviewComponent {
  // showFestify: boolean = true;

  @Output() messageEvent = new EventEmitter<any>();

  showFestify() {
    this.messageEvent.emit('festify');
  }

  showSpot() {
    this.messageEvent.emit('spot');
  }

  hide() {
    this.messageEvent.emit('none');
  }
}
