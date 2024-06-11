import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  @Output() messageEvent = new EventEmitter<any>();

  showAvatar(avatar: number) {
    this.messageEvent.emit(avatar);
  }

}
