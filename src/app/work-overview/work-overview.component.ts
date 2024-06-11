import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-overview',
  templateUrl: './work-overview.component.html',
  styleUrl: './work-overview.component.css'
})
export class WorkOverviewComponent {

  @Output() messageEvent = new EventEmitter<any>();

  showProject(name: string) {
    this.messageEvent.emit(name);
  }

  hide() {
    this.messageEvent.emit('none');
  }
}
