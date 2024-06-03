import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrl: './work-detail.component.css'
})
export class WorkDetailComponent {
  @Input() selectedProject: string;
  // @Input() showSpot: boolean;
  constructor () {}

}
