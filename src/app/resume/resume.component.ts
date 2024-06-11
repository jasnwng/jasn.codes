import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  @Output() messageEvent = new EventEmitter<any>();

  showAvatar(avatar: number) {
    this.messageEvent.emit(avatar);
  }
}
