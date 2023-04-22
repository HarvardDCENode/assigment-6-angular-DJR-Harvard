/** David Rasmussen HW6 4/22/2023
 * detail.component shows the details of a selected record
 * and an array of child records.
 */
import { Component, OnInit } from '@angular/core';
import { RecordSelectService } from '../../services/selectEvent.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  record: any | null = null;  //to be reusable for other types of records
  children: any | null = null;
  type: string = 'Company';

  constructor(
    private recordSelectService: RecordSelectService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.recordSelectService.eventEmitter.subscribe((event) => {
      // Access the recordId and type properties from the event
      const recordId = event.recordId;
      //type holds the record type, e.g. Company, Person, etc.
      //for future use case ideas.
      this.type = event.type;

      this.record = this.dataService.getCompany(recordId);
      this.children = this.dataService.getPersonsByCompanyId(recordId);

    });
  }
}
