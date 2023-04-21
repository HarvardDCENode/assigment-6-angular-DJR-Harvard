import { Component, OnInit } from '@angular/core';
import { RecordSelectService } from '../../services/selectEvent.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  record: any | null = null;
  persons: any | null = null;

  constructor(
    private recordSelectService: RecordSelectService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.recordSelectService.eventEmitter.subscribe((event) => {
      // Access the recordId and type properties from the event
      const recordId = event.recordId;
      const type = event.type;

      this.record = this.dataService.getCompany(recordId);
      this.persons = this.dataService.getPersonsByCompanyId(recordId);

    });
  }
}
