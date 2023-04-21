import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  record: any | null = null;

  mystring: string | null = null;

  constructor() {}

  onCompanyClicked(event: any) {
    // Access the recordId and type properties from the event
    const recordId = event.recordId;
    const type = event.type;

    // Do something with the recordId and type properties
    this.mystring = recordId + type;
  }
}
