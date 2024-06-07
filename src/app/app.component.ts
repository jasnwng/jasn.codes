import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}
  title = 'Jason Wong'
  selectedProject = 'none'

  receiveMessage($event: any) {
    this.selectedProject = $event
  }

  @ViewChild('cursor') refCursor: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.refCursor.nativeElement.style.left = (event.pageX - 10)+ 'px';
    this.refCursor.nativeElement.style.top = (event.pageY - 10) + 'px';
    
  }



}
